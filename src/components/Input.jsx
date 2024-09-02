import {
  Bell,
  CurrencyInr,
  EnvelopeOpen,
  Phone,
  X,
} from "@phosphor-icons/react";
import React, { useState } from "react";

const Input = ({ placeholder, type, className, icon, ...props }) => {
  const [inputValue, setInputValue] = useState("");

  const handleClear = () => {
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="relative mt-2 py-3 pl-2.5 pr-[30px] border border-[#D9D9D9] rounded flex items-center gap-2.5">
      {icon === "number" && <Phone size={20} />}
      {icon === "email" && <EnvelopeOpen size={20} />}
      {icon === "rup" && <CurrencyInr size={20} />}

      <input
        type={type}
        className={`outline-none text-sm text-primary w-full ${className}`}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        {...props}
      />
      {inputValue && (
        <button
          onClick={handleClear}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 focus:outline-none"
          aria-label="Clear input"
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
};

export default Input;
