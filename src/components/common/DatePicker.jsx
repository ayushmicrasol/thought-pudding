import React from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import { CalendarDots } from "@phosphor-icons/react";

const DatePicker = ({ className, props, placeholder }) => {
  return (
    <div className={`mt-2 relative ${className}`} {...props}>
      <Flatpickr
        className="py-3 pl-2.5 pr-[30px] border border-[#D9D9D9] rounded w-full outline-none text-sm_18 text-primary"
        placeholder={`${placeholder}`}
      />
      <CalendarDots
        size={20}
        className="absolute top-1/2 right-3 -translate-y-1/2"
      />
    </div>
  );
};

export default DatePicker;
