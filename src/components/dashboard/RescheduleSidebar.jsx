import { X } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import SelectDropdown from "../SelectDropdown";
import Input from "../Input";
import Button from "../Button";

const frequencyOption = ["This Session", "This Week"];

const RescheduleSidebar = ({ isRescheduleSession, setIsRescheduleSession }) => {
  const [isFrequency, setIsFrequency] = useState();
  useEffect(() => {
    if (isRescheduleSession) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isRescheduleSession]);
  return (
    <div
      className={`fixed w-full h-full bg-black/20 top-0 left-0 z-[999] ${
        isRescheduleSession ? "visible" : "invisible"
      }`}
    >
      <div
        className={`max-w-[416px] w-full  bg-white absolute top-0 right-0 h-full transition-all duration-300 ${
          isRescheduleSession ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative h-screen flex flex-col">
          {/* side bar header */}
          <div className="px-5 py-3.5 shadow-[0px_4px_12px_0px_#0000000F] flex justify-between items-center">
            <h3 className="text-lg font-medium text-[#242424]">
              Reschedule Session
            </h3>
            <button onClick={() => setIsRescheduleSession(false)}>
              <X size={20} />
            </button>
          </div>

          {/* content */}
          <div className="flex-1 p-5 overflow-y-auto">
            <form className="grid grid-cols-2 gap-5 ">
              <div className="col-span-2">
                <label className="text-sm/5 text-primary font-medium">
                  Appointment Date
                </label>
                <Input type={"date"} placeholder={""} />
              </div>
              <div>
                <label className="text-sm/5 text-primary font-medium">
                  Start Time
                </label>
                <Input type={"text"} placeholder={"00:00"} />
              </div>
              <div>
                <label className="text-sm/5 text-primary font-medium">
                  End Time
                </label>
                <Input type={"text"} placeholder={"00:00"} />
              </div>
              <div className="col-span-2">
                <label className="text-sm/5 text-primary font-medium">
                  Reschedule Option
                </label>
                <SelectDropdown
                  options={frequencyOption}
                  value={isFrequency}
                  onChange={setIsFrequency}
                  placeholder="Select ..."
                />
              </div>
            </form>
          </div>

          {/* side bar footer */}
          <div className="bg-white shadow-[0px_4px_43.4px_0px_#0000001A] px-5 py-2.5 grid grid-cols-2 gap-5 z-10">
            <Button
              onClick={() => setIsRescheduleSession(false)}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={() => setIsRescheduleSession(false)}
              variant="filled"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RescheduleSidebar;
