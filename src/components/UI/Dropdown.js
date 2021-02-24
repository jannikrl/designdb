import React from "react";

const Dropdown = ({ options, placeholder, value, onChange }) => {
  const val = value ? value : "";
  return (
    <select value={val} onChange={(event) => onChange(event.target.value)}>
      <option key="placeholder" value="">
        {placeholder}
      </option>
      {options.map((option) => {
        return (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
