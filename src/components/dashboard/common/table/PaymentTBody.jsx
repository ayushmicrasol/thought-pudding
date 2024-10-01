import React, { useState } from "react";
import { RegularNotificationIcon } from "../../../../../public/assets/Svgs";
import { CaretDown } from "@phosphor-icons/react";

const markAs = [
  "Still Pending",
  "Paid Delay",
  "Paid On Time",
  "Free Cancellation",
  "Paid Cancellation",
];

const PaymentTBody = ({ TableData, setIsReminderModal, isReminderModal }) => {
  const [selectedOptions, setSelectedOptions] = useState(
    TableData.reduce((acc, _, index) => {
      acc[index] = "Still Pending"; // Default selection
      return acc;
    }, {})
  );
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null); // Dropdown state

  // Toggle dropdown function
  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  // Handle option selection
  const handleSelect = (index, option) => {
    setSelectedOptions((prev) => ({ ...prev, [index]: option }));
    setOpenDropdownIndex(null); // Close dropdown after selection
  };

  return (
    <tbody className="divide-y divide-primary/10">
      {TableData?.map((item, index) => (
        <tr key={index}>
          <td className="p-15px">
            <div className="flex items-center gap-3 ">
              <div className="w-[34px] h-[34px] rounded-full border border-primary/20 bg-[#F5F5F7] overflow-hidden flex items-center justify-center">
                {item.img ? (
                  <img src={item.img} alt="" className="w-full h-full" />
                ) : (
                  <span className="text-xs_18 text-[#72748D] font-medium">
                    {item.name
                      .split(" ")
                      .map((n) => n.charAt(0))
                      .join("")}
                  </span>
                )}
              </div>
              <div>
                <p className="text-sm/5 font-semibold text-primary">
                  {item.name}
                </p>
                <p className="text-xs_18 text-primary/70 font-medium">
                  {item.email}
                </p>
              </div>
            </div>
          </td>
          <td className="p-15px text-primary/70 text-sm/5 font-medium">
            {item.date}
          </td>
          <td className="p-15px text-primary/70 text-sm/5 font-medium">
            {item.time}
          </td>
          <td className="p-15px text-primary text-sm/5 font-semibold">
            ₹ {item.amount}
          </td>
          <td className="p-15px text-primary/70 text-sm/5 font-medium">
            {item.paymentType}
          </td>

          {/* Dropdown Column */}
          <td className="p-15px relative">
            <div
              className="flex items-center justify-between text-primary cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              <p className="text-sm/7 font-medium">{selectedOptions[index]}</p>
              <CaretDown size={20} />
            </div>
            {openDropdownIndex === index && (
              <ul className="absolute w-full left-0 py-2.5 rounded-base bg-white shadow-[0px_4px_12px_0px_#00000014] z-10">
                {markAs.map((option) => (
                  <li
                    key={option}
                    className={`p-2.5 text-xs_18 cursor-pointer  ${
                      selectedOptions[index] === option
                        ? "bg-green-600/20 text-green-600 font-medium"
                        : "text-primary"
                    } hover:bg-green-600/10`}
                    onClick={() => handleSelect(index, option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </td>

          <td className="p-15px text-primary/70 text-sm/5 font-medium">
            {item.paymentOn || "-"}
          </td>
          <td className="p-15px">
            <div className="flex items-center gap-5">
              <RegularNotificationIcon
                className="w-5 h-5 cursor-pointer"
                pathFillColor="#242424"
                onClick={() => setIsReminderModal(!isReminderModal)}
              />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default PaymentTBody;
