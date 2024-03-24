import React from "react";

export const Input = ({ label, value, handleChange }) => {
  return (
    <div>
      <label htmlFor={`${label}-input`}>{label}</label>
      <input
        value={value}
        id={`${label}-input`}
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};
