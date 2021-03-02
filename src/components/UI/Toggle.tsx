import React from "react";

type ToggleProps = {
  selected: boolean;
  name: string;
  onChange: (checked: boolean) => void;
};

const Toggle: React.FC<ToggleProps> = ({ selected, name, onChange }) => {
  return (
    <>
      <input
        type="checkbox"
        onChange={(event) => onChange(event.target.checked)}
        checked={selected}
        id={name}
        name={name}
      />
      <label htmlFor={name}>{name}</label>
    </>
  );
};

export default Toggle;
