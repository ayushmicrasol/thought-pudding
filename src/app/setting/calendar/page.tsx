"use client";
import Tabs from "@/components/common/Tabs";
import SettingLayout from "@/layout/dashboard/SettingLayout";
import { useGetResyncCalendarData } from "@/services/setting.service";
import { formatDate, formatTime } from "@/utils/axios";
import { Clock, EnvelopeSimple } from "@phosphor-icons/react";
import React, { useState } from "react";

const CalendarTab = [
  { label: "Syncable Events", value: "Syncable Events" },
  { label: "Non Syncable Events", value: "Non Syncable Events" },
];

interface Item {
  kind: string;
  originalStartTime: {
    dateTime: string;
  };
  creator: {
    email: string;
  };
  email: string;
  description: string;
  status: string;
  depression: string;
}

const CalendarSetting = () => {
  const [activeTab, setActiveTab] = useState(CalendarTab[0]);

  // get payment listing
  const { resyncCalendarData, resyncCalendarLoading } =
    useGetResyncCalendarData();

  console.log(resyncCalendarData, "resyncCalendarData......................");

  return (
    <SettingLayout>
      <div>
        <h1 className="text-xl_30 font-semibold text-primary">
          Calendar Setting
        </h1>
        <div className="pt-6">
          <Tabs
            tabs={CalendarTab}
            activeTab={activeTab?.label}
            setActiveTab={setActiveTab}
            sessionCount={
              activeTab?.label === "Syncable Events"
                ? resyncCalendarData?.syncable.length
                : resyncCalendarData?.not_syncable?.length
            }
          />
          {resyncCalendarLoading ? ( // Check if loading
            <div className="grid grid-cols-2 gap-4.5 pt-7.5">
              {/* Display skeletons for loading state */}
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="border border-green-600/20 rounded-base overflow-hidden animate-pulse"
                >
                  <div className="flex items-center justify-between p-5 bg-yellow-100">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      <div className="h-6 w-1/3 bg-gray-300 rounded"></div>
                    </div>
                    <div className="h-6 w-1/4 bg-gray-300 rounded"></div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
                        <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
                      </div>
                      <div className="relative group">
                        <div className="h-4 w-1/4 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                    <hr className="my-5" />
                    <p className="text-base/6 text-primary/90 font-semibold">
                      Description
                    </p>
                    <div className="h-4 w-full bg-gray-300 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {activeTab?.label === "Syncable Events" && (
                <div>
                  <div className="grid grid-cols-2 gap-4.5 pt-7.5">
                    {resyncCalendarData?.syncable?.map(
                      (item: Item, index: number) => (
                        <div
                          key={index}
                          className="border border-green-600/20 rounded-base overflow-hidden"
                        >
                          <div className="flex items-center justify-between p-5 bg-yellow-100">
                            <label className="flex items-center gap-3">
                              <input
                                type="checkbox"
                                className="w-4 h-4 accent-green-600 cursor-pointer"
                              />
                              <p className="text-base/6 text-green-600 font-semibold">
                                {item?.kind}
                              </p>
                            </label>
                            <p className="text-base/6 text-green-600/70 font-semibold">
                              Session : 05
                            </p>
                          </div>
                          <div className="p-5">
                            <div className="flex justify-between items-start">
                              <div className="space-y-2">
                                <p className="flex items-center gap-2 text-base/6 text-primary/90 font-semibold">
                                  <Clock size={24} className="text-[#44B7E5]" />{" "}
                                  {formatDate(
                                    item?.originalStartTime?.dateTime
                                  )}{" "}
                                  |{" "}
                                  {formatTime(
                                    item?.originalStartTime?.dateTime
                                  )}
                                </p>
                                <p className="flex items-center gap-2 text-base/6 text-primary/90">
                                  <EnvelopeSimple
                                    size={24}
                                    className="text-[#F6A002]"
                                  />
                                  {item?.creator?.email}
                                </p>
                              </div>
                              <div className="relative group">
                                <p className="text-sm/5 text-green-500 px-3 py-1.5 rounded-full inline-block bg-green-200">
                                  {item?.status} !
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
                            <hr className="my-5" />
                            <p className="text-base/6 text-primary/90 font-semibold">
                              Description
                            </p>
                            <p
                              className="pt-1 text-base/6 text-primary/90"
                              dangerouslySetInnerHTML={{
                                __html: item?.description,
                              }}
                            ></p>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
              {activeTab?.label === "Non Syncable Events" && (
                <div className="grid grid-cols-2 gap-4.5 pt-7.5">
                  {resyncCalendarData?.not_syncable?.map(
                    (item: Item, index: number) => (
                      <div
                        key={index}
                        className="border border-green-600/20 rounded-base overflow-hidden "
                      >
                        <div className="flex items-center justify-between p-5 bg-yellow-100 ">
                          <label className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              className="w-4 h-4 accent-green-600 cursor-pointer"
                            />
                            <p className="text-base/6 text-green-600 font-semibold">
                              {item?.kind}
                            </p>
                          </label>
                          <p className="text-base/6 text-green-600/70 font-semibold">
                            Session : 05
                          </p>
                        </div>
                        <div className="p-5">
                          <div className="flex justify-between items-start">
                            <div className="space-y-2">
                              <p className="flex items-center gap-2 text-base/6 text-primary/90 font-semibold">
                                <Clock size={24} className="text-[#44B7E5]" />{" "}
                                Jan 12
                                {formatDate(
                                  item?.originalStartTime?.dateTime
                                )}{" "}
                                |{" "}
                                {formatTime(item?.originalStartTime?.dateTime)}
                              </p>
                              <p className="flex items-center gap-2 text-base/6 text-primary/90">
                                <EnvelopeSimple
                                  size={24}
                                  className="text-[#F6A002]"
                                />
                                {item?.creator?.email}
                              </p>
                            </div>
                            <div className="relative group">
                              <p className="text-sm/5 text-green-500 px-3 py-1.5 rounded-full inline-block bg-green-200">
                                {item?.status} !
                              </p>
                              <div className="absolute right-0 top-4 p-2.5 bg-white w-[202px] rounded-base shadow-[0px_4px_20.9px_0px_#0000001A] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                                <p
                                  className="text-xs_18 text-primary"
                                  dangerouslySetInnerHTML={{
                                    __html: item?.description,
                                  }}
                                ></p>
                              </div>
                            </div>
                          </div>
                          <hr className="my-5" />
                          <p className="text-base/6 text-primary/90 font-semibold">
                            Description
                          </p>
                          <p className="pt-1 text-base/6 text-primary/90">
                            {item?.depression}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </SettingLayout>
  );
};

export default CalendarSetting;
