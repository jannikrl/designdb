import React from "react";

const Toggle = (props) => {
  return (
    <div>
      <input
        type="checkbox"
        onChange={(event) => props.onChange(event.target.checked)}
        defaultChecked={props.selected}
        id={props.name}
        name={props.name}
      />
      <label htmlFor={props.name}>{props.name}</label>
    </div>
  );
};

export default Toggle;