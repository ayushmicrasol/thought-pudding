import { Bell, CaretDown } from "@phosphor-icons/react";
import React, { useState, useEffect, useRef } from "react";

const options = ["Today", "Week", "This Month", "Last Month"];

const DaysSelectDropdown = ({
  value,
  onChange,
  className = "",
  subClass = "",
  DropClass = "",
  placeholder = "Select...",
  icon,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference to the dropdown

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef} // Attach the ref to the container div
      className={`relative ${className}`}
      {...props}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full rounded flex justify-between items-center cursor-pointer text-base/6 font-medium text-primary gap-2`}
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
        <ul
          className={`absolute z-10 mt-1 bg-white rounded-base shadow-lg max-h-60 overflow-auto ${DropClass} w-48 p-5 right-0 shadow-[0px_0px_15px_0px_#2C58BB1A]`}
        >
          {options.length === 0 ? (
            <li className="py-[10px] px-4 text-sm text-gray-500">
              No options available
            </li>
          ) : (
            options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className={`py-[10px] px-4 text-sm text-primary cursor-pointer hover:bg-gray-100/20 rounded-lg ${
                  value === option ? "bg-green-600/10 !text-green-600" : ""
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

export default DaysSelectDropdown;
