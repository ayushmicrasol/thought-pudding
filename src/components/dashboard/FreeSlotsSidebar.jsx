"use client";
import { X } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import Input from "../Input";
import SelectDropdown from "../SelectDropdown";
import Button from "../Button";

const recommendedWeek = [
  { date: "Fri, 1st April", time: "4:00 PM 20min" },
  { date: "Sat, 2nd April", time: "4:00 PM  20min" },
  { date: "Tue, 5th April", time: "4:00 PM  20min" },
  { date: "Wed, 6th April", time: "8:00 AM  50min" },
];

const timeZoneOption = ["Asia/Kolkata", "Asia/Gujrat", "Goa", "Dehradun"];
const genderOption = ["Male", "Female", "Others"];

const FreeSlotsSidebar = ({ freeSlote, setFreeSlote }) => {
  const [timeZone, setTimeZone] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    if (freeSlote) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [freeSlote]);

  return (
    <div
      className={`fixed w-full h-full bg-black/20 top-0 left-0  ${
        freeSlote ? "visible" : "invisible"
      }`}
    >
      <div
        className={`max-w-[416px] w-full  bg-white absolute top-0 right-0 h-full transition-all duration-300 ${
          freeSlote ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative h-screen flex flex-col">
          {/* sidebar header */}
          <div className="px-5 py-3.5 shadow-[0px_4px_12px_0px_#0000000F] flex justify-between items-center">
            <h3 className="text-lg font-medium text-[#242424]">Free Slots</h3>
            <button onClick={() => setFreeSlote(false)}>
              <X size={20} />
            </button>
          </div>

          {/* content */}
          <div className="flex-1 p-5 overflow-y-auto">
            <div>
              <h4 className="text-sm/5 font-medium text-[#242424]">
                Recommended This Week
              </h4>
              <div className="grid grid-cols-2 gap-5 pt-[15px]">
                {recommendedWeek?.map((item, index) => (
                  <button
                    key={index}
                    className="text-center p-3 rounded  text-sm/5 border border-[#D9D9D9] focus:border-blue-600 focus:bg-blue-600/5"
                  >
                    <p className="font-medium text-primary">{item.date}</p>
                    <p className="text-gray-500">{item.time}</p>
                  </button>
                ))}
              </div>
            </div>
            <hr className="border-divider my-5" />
            <div>
              <h4 className="text-sm/5 font-medium text-[#5E585A]">
                Customer Details
              </h4>
              <form className="grid grid-cols-2 gap-5 mt-[15px]">
                <div>
                  <label className="text-sm/5 text-primary font-medium">
                    First Name
                  </label>
                  <Input type={"text"} placeholder={"Enter First Name"} />
                </div>
                <div>
                  <label className="text-sm/5 text-primary font-medium">
                    Last Name
                  </label>
                  <Input type={"text"} placeholder={"Enter Last Name"} />
                </div>
                <div className="col-span-2">
                  <label className="text-sm/5 text-primary font-medium">
                    Mobile Number
                  </label>
                  <Input
                    type={"number"}
                    placeholder={"Enter Number"}
                    icon={`number`}
                  />
                </div>
                <div className="col-span-2">
                  <label className="text-sm/5 text-primary font-medium">
                    Email
                  </label>
                  <Input
                    type={"email"}
                    placeholder={"Enter Email"}
                    icon={`email`}
                  />
                </div>
                <div className="col-span-2">
                  <label className="text-sm/5 text-primary font-medium">
                    Client Time Zone
                  </label>
                  <SelectDropdown
                    options={timeZoneOption}
                    value={timeZone}
                    onChange={setTimeZone}
                    placeholder="Select ..."
                  />
                </div>
                <div>
                  <label className="text-sm/5 text-primary font-medium">
                    Age
                  </label>
                  <Input type={"text"} placeholder={"Enter Age"} />
                </div>
                <div>
                  <label className="text-sm/5 text-primary font-medium">
                    Gender
                  </label>
                  <SelectDropdown
                    options={genderOption}
                    value={gender}
                    onChange={setGender}
                    placeholder="Select ..."
                  />
                </div>
              </form>
            </div>
          </div>

          {/* sidebar footer */}
          <div className="bg-white shadow-[0px_4px_43.4px_0px_#0000001A] px-5 py-2.5 grid grid-cols-2 gap-5 z-10">
            <Button onClick={() => setFreeSlote(false)} variant="outlined">
              Cancel
            </Button>
            <Button variant="filled">Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeSlotsSidebar;
