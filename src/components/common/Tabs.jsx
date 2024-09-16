// components/Tabs.js
import { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <div>
      <ul className="flex items-center md:gap-[30px] gap-2 flex-wrap text-base/4 font-medium">
        {tabs.map((tab) => (
          <li
            key={tab.label}
            onClick={() => handleTabClick(tab.label)}
            className={`cursor-pointer p-2.5  ${
              activeTab === tab.label
                ? "text-blue-600 border-b border-blue-600"
                : "text-gray-400"
            }`}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="">
        {tabs.find((tab) => tab.label === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
