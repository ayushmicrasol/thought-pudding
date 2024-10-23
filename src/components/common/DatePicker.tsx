import React from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import { CalendarDots } from "@phosphor-icons/react";

interface DatePickerProps {
  className?: string;
  value?: string; // Add value prop
  onChange: (date: string) => void; // Add onChange prop
  placeholder?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  className,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className={`mt-2 relative ${className}`}>
      <Flatpickr
        className="py-3 pl-2.5 pr-[30px] border border-[#D9D9D9] rounded-lg w-full outline-none text-sm_18 text-primary"
        value={value} // Bind the value
        onChange={(dates) => onChange(dates[0]?.toISOString() || "")} // Handle date change
        options={{
          dateFormat: "d/m/Y", // You can adjust the format as needed
        }}
        placeholder={placeholder}
      />
      <CalendarDots
        size={20}
        className="absolute top-1/2 right-3 -translate-y-1/2"
      />
    </div>
  );
};

export default DatePicker;
