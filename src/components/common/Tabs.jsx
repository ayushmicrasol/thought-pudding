import { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <div>
      <ul className="flex items-center md:gap-0 gap-2 flex-wrap text-base/4 ">
        {tabs.map((tab) => (
          <li
            key={tab.label}
            onClick={() => handleTabClick(tab.label)}
            className={`cursor-pointer px-4 py-4.5 transition-colors duration-300 ${
              activeTab === tab.label
                ? "text-green-600 border-b border-green-600"
                : "text-primary/50"
            }`}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="overflow-hidden">
        <div
          className={`transition-opacity duration-300 ease-in-out ${
            activeTab ? "opacity-100" : "opacity-0"
          }`}
        >
          {tabs.find((tab) => tab.label === activeTab)?.content}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
