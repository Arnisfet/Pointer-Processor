import React from 'react';
import { Button } from 'react-bootstrap';

export function CalcAudienceForm() {
  async function handleSubmit(e) {
    e.preventDefault();

    // Create a FormData object
    const form = e.target;
    const formData = new FormData(form);

    // Log the form data for debugging
    console.log('Form Data:', [...formData.entries()]);

    const successMessageElement = document.getElementById('successMessage');
    try {
      // Send PUT request with form data
      const response = await fetch('http://localhost:8080/audience/calculation', {
        method: 'PUT',
        body: formData, // Send FormData directly
      });

      if (response.ok) {
        console.log('PUT request successful');
        successMessageElement.innerText = 'Form submitted successfully!';
        successMessageElement.style.color = 'green';
      } else {
        console.error('PUT request failed with status:', response.status);
        successMessageElement.innerText = 'Error submitting the form. Status: ' + response.status;
        successMessageElement.style.color = 'red';
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      successMessageElement.innerText = 'Error submitting the form. Status: ' + error;
      successMessageElement.style.color = 'red';
    }
  }

  return (
    <form method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
      <hr />

      <p>
        <label>Радиус:</label>
        <input name="radius" />
      </p>

      <p>
        <label>Дата начала сбора:</label>
        <input type="date" name="startDate" />
      </p>

      <p>
        <label>Дата конца сбора:</label>
        <input type="date" name="endDate" />
      </p>

      <p>
        <label>Первый час сбора:</label>
        <input name="firstHour" />
      </p>

      <p>
        <label>Последний час сбора:</label>
        <input name="lastHour" />
      </p>

      <p>
        <label>Upload file:</label>
        <input type="file" name="file" />
      </p>

      <Button type="submit" variant="outline-dark">Submit</Button>
      <p id="successMessage" style={{ fontWeight: 'bold' }}></p>
    </form>
  );
}
