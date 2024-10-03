import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import * as formik from 'formik';
import * as yup from 'yup';

export function CalcAudienceForm() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    radius: yup
      .number()
      .min(0, 'Radius must be at least 0')
      .max(Number.MAX_VALUE, `Radius cannot exceed ${Number.MAX_VALUE}`)
      .required('Radius is required'),

    startDate: yup.date().required('Start date is required'),

    finishDate: yup.date()
      .min(
        yup.ref('startDate'),
        'Finish date cannot be before start date'
      )
      .required('Finish date is required'),

    file: yup.mixed().required('File upload is required'),

    firstHour: yup
      .number()
      .min(0, 'First hour must be between 0 and 23')
      .max(23, 'First hour must be between 0 and 23')
      .test('lastHour-is-defined', 'Define the first hour before filling last hour', function (value) {
        const { lastHour } = this.parent;
        if (value !== undefined && value !== null && value !== '' && (lastHour === undefined || lastHour === null || lastHour === '')) {
          return false;
        }
        return true;
      }),

    lastHour: yup
      .number()
      .min(0, 'Last hour must be between 0 and 23')
      .max(23, 'Last hour must be between 0 and 23')
      .test('firstHour-is-defined', 'Define the first hour before filling last hour', function (value) {
        const { firstHour } = this.parent;
        if (value !== undefined && value !== null && value !== '' && (firstHour === undefined || firstHour === null || firstHour === '')) {
          return false;
        }
        return true; // If validation is not failing, return true
      })
      .test('is-greater', 'Last hour cannot be before first hour', function (value) {
        const { firstHour } = this.parent;
        if (firstHour !== undefined && firstHour !== null && firstHour !== '' && value !== undefined && value !== null) {
          return value >= firstHour;
        }
        return true;

      })
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        // Handle form submission
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          if (key === 'file') {
            formData.append(key, value);
          } else {
            formData.append(key, value);
          }
        });
        console.log('Form Data:', [...formData.entries()]);

        // Send formData to the backend
        fetch('http://localhost:48080/audience/calculation', {
          method: 'PUT',
          body: formData,
        })
          .then((response) => {
            if (response.ok) {
              alert('Form submitted successfully!');
            } else {
              alert('Error submitting the form');
            }
          })
          .catch((error) => alert('Error: ' + error));
      }}
      initialValues={{
        radius: '',
        startDate: '',
        finishDate: '',
        firstHour: '',
        lastHour: '',
        file: null,
      }}
    >
      {({
        handleSubmit,
        handleChange,
        setFieldValue,
        values,
        touched,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit} encType="multipart/form-data">
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>
              Загрузка файла <b>*</b>
            </Form.Label>
            <Form.Control
              type="file"
              name="file"
              onChange={(e) => setFieldValue('file', e.target.files[0])}
              isInvalid={touched.file && !!errors.file}
            />
            <Form.Control.Feedback type="invalid">
              {errors.file}
            </Form.Control.Feedback>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formRadius">
              <Form.Label>
                Радиус <b>*</b>
              </Form.Label>
              <Form.Control
                type="number"
                name="radius"
                value={values.radius}
                onChange={handleChange}
                isInvalid={touched.radius && !!errors.radius}
              />
              <Form.Control.Feedback type="invalid">
                {errors.radius}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formStartDate">
              <Form.Label>
                Дата начала сбора <b>*</b>
              </Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={values.startDate}
                onChange={handleChange}
                isInvalid={touched.startDate && !!errors.startDate}
              />
              <Form.Control.Feedback type="invalid">
                {errors.startDate}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formFinishDate">
              <Form.Label>
                Дата конца сбора <b>*</b>
              </Form.Label>
              <Form.Control
                type="date"
                name="finishDate"
                value={values.finishDate}
                onChange={handleChange}
                isInvalid={touched.finishDate && !!errors.finishDate}
              />
              <Form.Control.Feedback type="invalid">
                {errors.finishDate}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formFirstHour">
              <Form.Label>Первый час сбора</Form.Label>
              <Form.Control
                type="number"
                name="firstHour"
                value={values.firstHour}
                onChange={handleChange}
                isInvalid={touched.firstHour && !!errors.firstHour}
                min="0"
                max="23"
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstHour}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formLastHour">
              <Form.Label>Последний час сбора</Form.Label>
              <Form.Control
                type="number"
                name="lastHour"
                value={values.lastHour}
                onChange={handleChange}
                isInvalid={touched.lastHour && !!errors.lastHour}
                min="0"
                max="23"
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastHour}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button type="submit" variant="outline-dark">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
