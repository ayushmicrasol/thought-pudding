import { Bell, CaretDown } from "@phosphor-icons/react";
import React, { useState, useEffect, useRef } from "react";

// const options = ["Today", "Week", "This Month", "Last Month"];
const today = new Date();

const options = [
  {
    label: "Today",
    startDate: new Date(today), // New instance to avoid mutation
    endDate: new Date(today),   // New instance to avoid mutation
  },
  {
    label: "Week",
    startDate: new Date(today.setDate(today.getDate() - today.getDay())), // Start of the week
    endDate: new Date(today.setDate(today.getDate() + 6)), // End of the week
  },
  {
    label: "This Month",
    startDate: new Date(today.getFullYear(), today.getMonth(), 1), // Start of this month
    endDate: new Date(today.getFullYear(), today.getMonth() + 1, 0), // End of this month
  },
  {
    label: "Last Month",
    startDate: new Date(today.getFullYear(), today.getMonth() - 1, 1), // Start of last month
    endDate: new Date(today.getFullYear(), today.getMonth(), 0), // End of last month
  },
];

interface DaysSelectDropdownProps {
  options?: Array<unknown>;
  value?: string | undefined;
  onChange?: (value: unknown) => void;
  className?: string;
  DropClass?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  setStartDate?: (startDate: Date) => void;
  // Add this property
  setEndDate?: (endDate: Date) => void; // Add this property
}

const DaysSelectDropdown: React.FC<DaysSelectDropdownProps> = ({
  value,
  onChange,
  className = "",
  DropClass = "",
  placeholder = "Select...",
  icon,
  setStartDate,
  setEndDate,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Reference to the dropdown

  const handleSelect = (option: unknown) => {
    if (onChange) onChange(option);
    setIsOpen(false);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
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
                onClick={() => {
                  handleSelect(option?.label);
                  if (setStartDate) {
                    setStartDate(option?.startDate as Date);
                  }
                  if (setEndDate) {
                    setEndDate(option?.endDate as Date);
                  }
                }}
                className={`py-[10px] px-4 text-sm text-primary cursor-pointer hover:bg-gray-100/20 rounded-lg ${value === option?.label
                  ? "bg-green-600/10 !text-green-600"
                  : ""
                  }`}
              >
                {option?.label}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default DaysSelectDropdown;
