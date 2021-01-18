import React from "react";

const Dropdown = (props) => (
  <select onChange={(event) => props.onChange(event.target.value)}>
    <option disabled selected={!props.selected} key="placeholder">
      {props.placeholder}
    </option>
    {props.options.map((option) => {
      return (
        <option
          value={option.id}
          selected={option.id === props.selected}
          key={option.id}
        >
          {option.name}
        </option>
      );
    })}
  </select>
);

export default Dropdown;
