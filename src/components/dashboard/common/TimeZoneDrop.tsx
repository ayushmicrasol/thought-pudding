import { Bell, CaretDown } from "@phosphor-icons/react";
import React, { useState, useEffect, useRef } from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectDropdownProps {
  options?: Array<Option>;
  value?: string | undefined;
  onChange?: (value: Option) => void;
  className?: string;
  subClass?: string;
  DropClass?: string;
  placeholder?: string;
  icon?: React.ReactNode;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  options = [],
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
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: Option) => {
    if (onChange) onChange(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative mt-2 ${className}`} {...props} ref={dropdownRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full py-3 px-2.5 border border-[#D9D9D9] rounded-lg text-sm/5 text-primary flex justify-between items-center cursor-pointer ${subClass}`}
        aria-haspopup="listbox"
      >
        <div className="flex items-center gap-2.5">
          {icon === "bell" && <Bell size={20} />}
          {value
            ? options.find((option) => option.value === value)?.label ||
              placeholder
            : placeholder}
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
          className={`absolute z-10 mt-1 w-full bg-white border border-[#D9D9D9] rounded-lg shadow-lg max-h-60 overflow-auto ${DropClass} shadow-[0px_4px_15px_0px_#0000001A] py-[10px]`}
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
                className={`py-[10px] px-4 text-sm text-primary cursor-pointer hover:bg-gray-100/20 ${
                  value === option.value
                    ? "bg-green-600/10 !text-green-600"
                    : ""
                }`}
              >
                {option.label}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default SelectDropdown;
