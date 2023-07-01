"use client";

import { ChangeEvent } from "react";

interface InputFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  placeholder,
  value,
  onChange,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;
    return onChange(e);
  };
  return (
    <fieldset className="grid w-full gap-2">
      <label htmlFor={id} className="text-xs text-gray-500">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="
            bg-white
            w-full
            p-3
            rounded-xl
            border
            border-transparent
            focus:border-gray-300
            outline-none
            duration-300
            
        "
      />
    </fieldset>
  );
};

export default InputField;
