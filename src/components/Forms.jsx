import React from 'react';
import FileUploader from './FileUploader.jsx';

export function CalcAudienceForm() {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <FileUploader />
      <hr />

      <p>
        <label>
          Радиус:
        </label>
      </p>
      <input name="radius" />

      <p>
        <label>
          Дата начала сбора:
        </label>
      </p>
      <input type="date" name="startDate" />

      <p>
        <label>
          Дата конца сбора:
        </label>
      </p>
      <input type="date" name="endDate" />

      <p>
        <label>
          Первый час сбора:
        </label>
      </p>
      <input name="firstHour" />

      <p>
        <label>
          Последний час сбора:
        </label>
      </p>
      <input name="lastHour" />

      <button type="submit">Submit</button>
    </form>
  );
}
