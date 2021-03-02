import React from "react";

type DropDownProps = {
  options: { id: number, name: string }[],
  placeholder: string,
  value: number,
  onChange: (value: string) => void,
};

const Dropdown: React.FC<DropDownProps> = ({ options, placeholder, value, onChange }) => {
  const val = value ? value : 0;
  return (
    <select value={val} onChange={(event) => onChange(event.target.value)}>
      <option key="placeholder" value={0}>
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
