import React, { useId } from 'react';
import { FileTransfer } from './FileTransfer.jsx';

export default function FileUploader({ onUpload }) {
  // Generate a unique ID for the input element
  const id = useId();

  // Handle the file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    handleFile(file);
  };

  // Function to handle the file upload
  const handleFile = (file) => {
    if (!file) return;

    // Call the FileTransfer function with the file and URL
    FileTransfer(file, 'http://localhost:8000/upload', {
      onProgress: (progress) => {
        console.log(`Upload progress: ${progress}%`);
      }
    })
      .then(onUpload)
      .catch((e) => {
        console.error('Upload failed', e);
      });
  };

  return (
    <label htmlFor={id}>
      <input type="file" id={id} onChange={handleFileChange} />
    </label>
  );
}