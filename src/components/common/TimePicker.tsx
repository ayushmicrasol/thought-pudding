"use client";
import { Clock } from "@phosphor-icons/react";
import { useState, useEffect, useRef } from "react";

interface TimePickerProps {
  className?: string; // Define className as an optional string
}

const times = Array.from({ length: 24 }, (_, i) => {
  const hour = i < 10 ? `0${i}` : i; // Format hours
  return `${hour}:00`; // Every hour on the hour
});

const TimePicker: React.FC<TimePickerProps> = ({ className }) => {
  const [selectedTime, setSelectedTime] = useState("00:00");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // To track the dropdown component

  const handleSelectTime = (time: string) => {
    setSelectedTime(time);
    setShowDropdown(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative mt-2 ${className}`} ref={dropdownRef}>
      <div
        className={`flex items-center justify-between text-sm_18 py-3 px-2.5 border border-[#D9D9D9] rounded-lg ${
          selectedTime === "00:00" ? "text-gray-400" : "text-primary"
        }`}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {selectedTime}
        <Clock size={20} className="text-primary" />
      </div>

      <div
        className={`absolute mt-1 w-full max-h-48 overflow-y-auto z-10 bg-white shadow-[0px_4px_12px_0px_#2C58BB1A] rounded-lg transition-all duration-200 ${
          showDropdown
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 -translate-y-5"
        }`}
      >
        {times.map((time) => (
          <div
            key={time}
            onClick={() => handleSelectTime(time)}
            className={`px-4 py-2 cursor-pointer hover:bg-gray-100/20 transition duration-200 text-sm_18  ${
              selectedTime === time
                ? "bg-green-600/10 text-green-600"
                : "text-primary"
            }`}
          >
            {time}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimePicker;
