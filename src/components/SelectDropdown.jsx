import { Bell, CaretDown } from "@phosphor-icons/react";
import React, { useState } from "react";

const SelectDropdown = ({
  options = [],
  value,
  onChange,
  className = "",
  placeholder = "Select...",
  icon,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={`relative mt-2 ${className}`} {...props}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-3 px-2.5 border border-[#D9D9D9] rounded text-sm/5 text-primary flex justify-between items-center cursor-pointer"
        aria-haspopup="listbox"
      >
        <div className="flex items-center gap-2.5">
          {icon === "bell" && <Bell size={20} />}
          {value || placeholder}
        </div>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <CaretDown size={20} />
        </span>
      </div>
      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-[#D9D9D9] rounded shadow-lg max-h-60 overflow-auto">
          {options.length === 0 ? (
            <li className="py-2 px-4 text-sm text-gray-500">
              No options available
            </li>
          ) : (
            options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className={`py-2 px-4 text-sm text-primary cursor-pointer hover:bg-gray-100 ${
                  value === option ? "bg-gray-100" : ""
                }`}
                role="option"
              >
                {option}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default SelectDropdown;
