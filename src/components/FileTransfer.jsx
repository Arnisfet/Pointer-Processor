import React from 'react';

export const FileTransfer = (
  file,
  url,
  options
) => {
  return new Promise((resolve, reject) => {
    //1. Create XHR
    const xhr = new XMLHttpRequest();

    //2. Open XHR
    xhr.open('POST', url, true);

    // Optional: Add event listener for progress if provided
    if (options && options.onProgress) {
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = (event.loaded / event.total) * 100;
          options.onProgress(progress);
        }
      };
    }
    // response handler
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        } catch (error) {
          reject(new Error('Failed to parse JSON response'));
        }
      } else {
        reject(new Error(`HTTP error: ${xhr.status}`));
      }
    };

    xhr.onerror = () => reject(new Error('Network error'));

    const formData = new FormData();
    formData.append('file', file);

    xhr.send(formData);
  });
};