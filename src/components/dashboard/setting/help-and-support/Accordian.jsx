import React, { useEffect, useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";

const Accordian = ({ FAQData, title }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      const faqElements = document.querySelectorAll(".faq-item");
      if (![...faqElements].some((el) => el.contains(event.target))) {
        setOpenIndex(null);
      }
    }
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [openIndex]);
  return (
    <div className="border border-green-600/30 rounded-base py-5 px-[15px]">
      <h2 className="text-base/6 text-primary font-semibold pb-[15px]">
        {title}
      </h2>
      {FAQData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="py-[13px] border-b overflow-hidden">
            <div
              className="flex gap-4 items-center justify-between bg-white cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <p
                className={`text-sm/4 transition-all duration-300 ${
                  openIndex === index
                    ? "text-green-600 font-semibold"
                    : "text-primary font-medium"
                }`}
              >
                {item.title}
              </p>
              <PiCaretDownBold
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            <div
              className={`max-w-[90%] overflow-hidden transition-max-height ease-in-out duration-500 ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="bg-white">
                <p className="text-sm/5 text-primary/75 pt-4">{item.content}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
