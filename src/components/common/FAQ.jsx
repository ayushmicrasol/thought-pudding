import { useEffect, useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";

const FAQData = [
  {
    title: "How do I schedule an appointment?",
    content:
      "If you are running late, please notify your therapist or psychiatrist through the messaging system in your account",
  },
  {
    title: "Can I reschedule or cancel my appointment?",
    content:
      "If you are running late, please notify your therapist or psychiatrist through the messaging system in your account",
  },
  {
    title: "Will I receive reminders for my appointments?",
    content:
      "If you are running late, please notify your therapist or psychiatrist through the messaging system in your account",
  },
  {
    title: "What if I’m late for my appointment?",
    content:
      "If you are running late, please notify your therapist or psychiatrist through the messaging system in your account",
  },
  {
    title: "Can I book recurring appointments?",
    content:
      "If you are running late, please notify your therapist or psychiatrist through the messaging system in your account",
  },
];

const FAQ = () => {
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
    <div className="container mx-auto px-4 xl:px-0 sm:pt-100px pt-50px">
      <div className="sm:max-w-[654px] max-w-[300px] mx-auto sm:pb-50px pb-2.5">
        <h2 className="sm:text-4.5xl_48 text-xl/7 text-primary font-semibold text-center capitalize">
          Find answers to your questions here
        </h2>
      </div>
      {FAQData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="sm:py-9 sm:px-5 py-5 border-b overflow-hidden">
            <div
              className="flex gap-4 items-center justify-between bg-white cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <p
                className={`sm:text-xl/6 text-sm/4 transition-all duration-300 ${
                  openIndex === index
                    ? "text-blue-600 font-semibold"
                    : "text-blue-700 font-medium"
                }`}
              >
                {item.title}
              </p>
              <PiCaretDownBold
                className={`sm:w-6 sm:h-6 w-3.5 h-3.5 transition-transform duration-300 ${
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
                <p className="sm:text-xl/6 text-sm/5 text-blue-700/75  sm:pt-4 pt-2">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
