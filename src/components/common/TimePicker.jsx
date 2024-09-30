"use client";
import { Clock } from "@phosphor-icons/react";
import { useState } from "react";
// import { FiClock } from "react-icons/fi"; // Import clock icon from react-icons

const times = Array.from({ length: 24 }, (_, i) => {
  const hour = i < 10 ? `0${i}` : i; // Format hours
  return `${hour}:00`; // Every hour on the hour
});

const TimePicker = ({ className }) => {
  const [selectedTime, setSelectedTime] = useState("00:00");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelectTime = (time) => {
    setSelectedTime(time);
    setShowDropdown(false);
  };

  return (
    <div className={`relative mt-2 ${className}`}>
      <div
        className={`flex items-center justify-between text-sm_18 py-3 px-2.5  border border-[#D9D9D9] rounded-lg ${
          selectedTime === "00:00" ? "text-gray-400" : "text-primary"
        }`}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {selectedTime}
        <Clock size={20} className="text-primary" />
      </div>

      {showDropdown && (
        <div className="absolute mt-1 w-full max-h-48 overflow-y-auto z-10 bg-white shadow-[0px_4px_12px_0px_#2C58BB1A] rounded-lg">
          {times.map((time) => (
            <div
              key={time}
              onClick={() => handleSelectTime(time)}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100/20 transition duration-200 text-sm_18  ${
                selectedTime === time
                  ? "bg-blue-600/10 text-blue-600"
                  : "text-primary"
              }`}
            >
              {time}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimePicker;
