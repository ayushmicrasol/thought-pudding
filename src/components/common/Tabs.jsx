import { useState, useRef, useEffect } from "react";

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  // const [activeTab, setActiveTab] = useState(tabs[0].label);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabRefs = useRef([]);

  const handleTabClick = (label, index) => {
    setActiveTab(label);
    moveIndicator(index);
  };

  const moveIndicator = (index) => {
    const currentTab = tabRefs.current[index];
    setIndicatorStyle({
      width: currentTab.offsetWidth,
      left: currentTab.offsetLeft,
    });
  };

  useEffect(() => {
    moveIndicator(0); // Initialize indicator for the first tab
  }, []);

  return (
    <div>
      <ul className="relative flex items-center md:gap-0 gap-2 flex-wrap text-base/4 ">
        {tabs.map((tab, index) => (
          <li
            key={tab.label}
            ref={(el) => (tabRefs.current[index] = el)}
            onClick={() => handleTabClick(tab.label, index)}
            className={`cursor-pointer px-4 py-4.5 transition-colors duration-300 ${
              activeTab === tab.label
                ? "text-green-600 font-medium"
                : "text-primary/50"
            }`}
          >
            {tab.label}
          </li>
        ))}
        {/* Sliding border indicator */}
        <span
          className="absolute bottom-0 h-[1.5px] bg-green-600 transition-all duration-300"
          style={indicatorStyle}
        />
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
