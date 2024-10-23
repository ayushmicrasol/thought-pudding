import React, { useState, useRef, useEffect } from "react";

type Tab = {
  label: string;
  value: string;
  content?: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (tab: Tab) => void;
  sessionCount: number; // Add this line
};




const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  setActiveTab,
  sessionCount,
}) => {
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});
  const tabRefs = useRef<(HTMLLIElement | null)[]>([]); // Properly typing as HTMLLIElement

  const handleTabClick = (tab: Tab, index: number) => {
    setActiveTab(tab);
    moveIndicator(index);
  };

  const moveIndicator = (index: number) => {
    const currentTab = tabRefs.current[index];
    if (currentTab) {
      setIndicatorStyle({
        width: currentTab.offsetWidth,
        left: currentTab.offsetLeft,
      });
    }
  };

  useEffect(() => {
    const currentIndex = tabs.findIndex((tab) => tab.label === activeTab);
    moveIndicator(currentIndex >= 0 ? currentIndex : 0); // Update indicator for the active tab
  }, [activeTab, tabs]);

  return (
    <div>
      <ul className="relative flex items-center md:gap-0 gap-2 flex-wrap text-base/4">
        {tabs.map(
          (tab, index) => (
            console.log(tab),
            (
              <li
                key={tab.label}
                ref={(el) => {
                  tabRefs.current[index] = el; // Ensure no return value
                }}
                onClick={() => handleTabClick(tab, index)}
                className={`cursor-pointer px-4 py-4.5 transition-colors duration-300 ${activeTab === tab.label
                  ? "text-green-600 font-medium"
                  : "text-primary/50"
                  }`}
              >
                {tab.label} {activeTab === tab.label && `(${sessionCount})`}{" "}
                {/* Example usage */}
              </li>
            )
          )
        )}
        {/* Sliding border indicator */}
        <span
          className="absolute bottom-0 h-[1.5px] bg-green-600 transition-all duration-300"
          style={indicatorStyle}
        />
      </ul>
      <div className="overflow-hidden">
        <div
          className={`transition-opacity duration-300 ease-in-out ${activeTab ? "opacity-100" : "opacity-0"
            }`}
        >
          {tabs.find((tab) => tab.label === activeTab)?.content}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
