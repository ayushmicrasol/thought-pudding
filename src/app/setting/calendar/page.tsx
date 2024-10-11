"use client";
import Tabs from "@/components/common/Tabs";
import SettingLayout from "@/layout/dashboard/SettingLayout";
import React, { useState } from "react";

const CalendarTab = [
  { label: "Syncable Events" },
  { label: "Non Syncable Events" },
];

const SyncableEvents = Array(4).fill({
  title: "Testing Mode",
  date: "17 Sep,2024 04:25 PM ",
  time: "(30 Minute)",
  email: "sparth.micra@gmail.com",
  frequency: "Frequency +1",
  depression: "Depression and Weekly ketchup",
});

const NonSyncableEvents = Array(4).fill({
  title: "Testing Mode",
  date: "17 Sep,2024 04:25 PM ",
  time: "(30 Minute)",
  email: "sparth.micra@gmail.com",
  frequency: "Frequency +1",
  depression: "Depression and Weekly ketchup",
});

const CalendarSetting = () => {
  const [activeTab, setActiveTab] = useState(CalendarTab[0].label);
  return (
    <SettingLayout>
      <div>
        <h1 className="text-xl_30 font-semibold text-primary">
          Calendar Setting
        </h1>
        <div className="pt-6">
          <Tabs
            tabs={CalendarTab}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          {activeTab === "Syncable Events" && (
            <div>
              <div className="grid grid-cols-3 gap-4.5 pt-7.5">
                {SyncableEvents?.map((item, index) => (
                  <div
                    key={index}
                    className="border border-green-600/20 rounded-base p-5 overflow-hidden transition-all duration-300 relative after:absolute after:w-full after:h-full after:bg-yellow-100 after:-top-full after:left-0 hover:after:top-0 after:transition-all after:duration-300 cursor-pointer"
                  >
                    <div className="relative z-10 space-y-3">
                      <div className="flex items-center justify-between">
                        <input
                          type="checkbox"
                          className="w-4 h-4 accent-green-600 cursor-pointer"
                        />
                        <div className="relative group">
                          <p className="text-sm/5 text-green-400">
                            Confirmed !
                          </p>
                          <div className="absolute right-0 top-4 p-2.5 bg-white w-[202px] rounded-base shadow-[0px_4px_20.9px_0px_#0000001A] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                            <p className="text-xs_18 text-primary">
                              This events does not have any{" "}
                              <span className="font-semibold">
                                attendees email
                              </span>
                              , hence this can not be synced!
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="text-base/6 text-green-600 font-semibold">
                        {item.title}
                      </p>
                      <p className="text-base/6 font-medium text-primary">
                        {item.date}
                        <span className="font-normal">{item.time}</span>
                      </p>
                      <p className="text-base/6 text-primary">{item.email}</p>
                      <p className="text-base/6 text-primary">
                        {item.frequency}
                      </p>
                      <p className="text-base/6 text-primary font-medium">
                        {item.depression}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === "Non Syncable Events" && (
            <div className="grid grid-cols-3 gap-4.5 pt-7.5">
              {NonSyncableEvents?.map((item, index) => (
                <div
                  key={index}
                  className="border border-green-600/20 rounded-base p-5 overflow-hidden transition-all duration-300 relative after:absolute after:w-full after:h-full after:bg-yellow-100 after:-top-full after:left-0 hover:after:top-0 after:transition-all after:duration-300 cursor-pointer"
                >
                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-base/6 text-green-600 font-semibold">
                        {item.title}
                      </p>
                      <div className="relative group">
                        <p className="text-sm/5 text-green-400">Confirmed !</p>
                        <div className="absolute right-0 top-4 p-2.5 bg-white w-[202px] rounded-base shadow-[0px_4px_20.9px_0px_#0000001A] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                          <p className="text-xs_18 text-primary">
                            This events does not have any{" "}
                            <span className="font-semibold">
                              attendees email
                            </span>
                            , hence this can not be synced!
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-base/6 font-medium text-primary">
                      {item.date}
                      <span className="font-normal">{item.time}</span>
                    </p>
                    <p className="text-base/6 text-primary">{item.email}</p>
                    <p className="text-base/6 text-primary">{item.frequency}</p>
                    <p className="text-base/6 text-primary font-medium">
                      {item.depression}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </SettingLayout>
  );
};

export default CalendarSetting;
