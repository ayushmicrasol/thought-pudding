import { X } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import SelectDropdown from "../SelectDropdown";

const frequencyOption = [
  "Every Week On Monday",
  "Every Week On Daily",
  "Every Week On Weekly",
  "Every Week On Monthly",
];
const genderOption = ["Male", "Female", "Others"];
const reminderOption = ["10-Minutes", "20-Minutes", "30-Minutes"];

const ScheduleSessionSidebar = ({
  isScheduleSessionModal,
  setIsScheduleSessionModal,
}) => {
  const [isFrequency, setIsFrequency] = useState();
  const [gender, setGender] = useState("");
  const [isReminder, setIsReminder] = useState("");

  useEffect(() => {
    if (isScheduleSessionModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isScheduleSessionModal]);

  return (
    <div
      className={`fixed w-full h-full bg-black/20 top-0 left-0  ${
        isScheduleSessionModal ? "visible" : "invisible"
      }`}
    >
      <div
        className={`max-w-[416px] w-full  bg-white absolute top-0 right-0 h-full transition-all duration-300 ${
          isScheduleSessionModal ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative h-screen flex flex-col">
          {/* side bar header */}
          <div className="px-5 py-3.5 shadow-[0px_4px_12px_0px_#0000000F] flex justify-between items-center">
            <h3 className="text-lg font-medium text-[#242424]">
              Schedule Session
            </h3>
            <button onClick={() => setIsScheduleSessionModal(false)}>
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
                  Frequency
                </label>
                <SelectDropdown
                  options={frequencyOption}
                  value={isFrequency}
                  onChange={setIsFrequency}
                  placeholder="Select ..."
                />
              </div>
              <div className="col-span-2">
                <label className="text-sm/5 text-primary font-medium">
                  End Date
                </label>
                <Input type={"date"} placeholder={""} />
              </div>
            </form>
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
                <div>
                  <label className="text-sm/5 text-primary font-medium">
                    Payment
                  </label>
                  <Input type={"text"} placeholder={"Payment"} icon={`rup`} />
                </div>
                <div>
                  <label className="text-sm/5 text-primary font-medium">
                    Reminder
                  </label>
                  <SelectDropdown
                    options={reminderOption}
                    value={isReminder}
                    onChange={setIsReminder}
                    placeholder="Select ..."
                    icon={`bell`}
                  />
                </div>
              </form>
            </div>
          </div>

          {/* side bar footer */}
          <div className="bg-white shadow-[0px_4px_43.4px_0px_#0000001A] px-5 py-2.5 grid grid-cols-2 gap-5 z-10">
            <Button
              onClick={() => setIsScheduleSessionModal(false)}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={() => setIsScheduleSessionModal(false)}
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

export default ScheduleSessionSidebar;
