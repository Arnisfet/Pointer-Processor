import React from 'react';
import { useState } from 'react';

export const TextField = ({ label, placeholder }) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <label>
        {label}
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};