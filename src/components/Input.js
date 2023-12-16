import React from "react";

export const Input = ({ label, handleChange }) => {
  return (
    <div>
      <label htmlFor={`${label}-input`}>{label}</label>
      <input id={`${label}-input`} type="text" onChange={handleChange} />
    </div>
  );
};
