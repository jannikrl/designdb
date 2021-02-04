import React from "react";

const Dropdown = (props) => (
  <select onChange={(event) => props.onChange(event.target.value)}>
    <option key="placeholder" value="">
      {props.placeholder}
    </option>
    {props.options.map((option) => {
      return (
        <option value={option.id} key={option.id}>
          {option.name}
        </option>
      );
    })}
  </select>
);

export default Dropdown;
