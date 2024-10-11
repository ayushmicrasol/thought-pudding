import { X } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import Input from "../common/Input";
import SelectDropdown from "../common/SelectDropdown";
import Button from "../common/Button";
import DatePicker from "../common/DatePicker";
import TimePicker from "../common/TimePicker";

const rescheduleOption = ["This Session", "This Week"];
const genderOption = ["Male", "Female", "Others"];

const EditSessionSidebar: React.FC<{
  isEditSession: boolean;
  setIsEditSession: (value: boolean) => void;
}> = ({ isEditSession, setIsEditSession }) => {
  const [isReschedule, setIsReschedule] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    if (isEditSession) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isEditSession]);
  return (
    <div
      className={`fixed w-full h-full bg-black/20 top-0 left-0 z-[999] ${
        isEditSession ? "visible" : "invisible"
      }`}
      onClick={() => setIsEditSession(false)}
    >
      <div
        className={`max-w-[416px] w-full  bg-white absolute top-0 right-0 h-full transition-all duration-300 ${
          isEditSession ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-screen flex flex-col">
          {/* side bar header */}
          <div className="px-5 py-3.5 shadow-[0px_4px_12px_0px_#0000000F] flex justify-between items-center">
            <h3 className="text-lg font-medium text-[#242424]">Edit Session</h3>
            <button onClick={() => setIsEditSession(false)}>
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
                <DatePicker placeholder={`DD/MM/YYYY`} />
              </div>
              <div>
                <label className="text-sm/5 text-primary font-medium">
                  Start Time
                </label>
                <TimePicker />
              </div>
              <div>
                <label className="text-sm/5 text-primary font-medium">
                  End Time
                </label>
                <TimePicker />
              </div>
              <div className="col-span-2">
                <label className="text-sm/5 text-primary font-medium">
                  Reschedule Option
                </label>
                <SelectDropdown
                  options={rescheduleOption}
                  value={isReschedule}
                  onChange={(value: unknown) =>
                    setIsReschedule(value as string)
                  }
                  placeholder="Select ..."
                />
              </div>
            </form>
            <hr className="border-divider my-5" />
            <div>
              <h4 className="text-sm/5 font-medium text-[#5E585A]">
                Customer Details
              </h4>
              <form className="grid grid-cols-2 gap-5 mt-[15px]">
                <div className="col-span-2">
                  <label className="text-sm/5 text-primary font-medium">
                    Mobile Number
                  </label>
                  <Input
                    type={"number"}
                    placeholder={"Enter Number"}
                    value=""
                    onChange={() => {}}
                    name="mobile"
                    // icon={`number`}
                  />
                </div>
                <div>
                  <label className="text-sm/5 text-primary font-medium">
                    First Name
                  </label>
                  <Input
                    type={"text"}
                    placeholder={"Enter First Name"}
                    value=""
                    onChange={() => {}}
                    name="first_name"
                  />
                </div>
                <div>
                  <label className="text-sm/5 text-primary font-medium">
                    Last Name
                  </label>
                  <Input
                    type={"text"}
                    placeholder={"Enter Last Name"}
                    value=""
                    onChange={() => {}}
                    name="last_name"
                  />
                </div>

                <div className="col-span-2">
                  <label className="text-sm/5 text-primary font-medium">
                    Email
                  </label>
                  <Input
                    type={"email"}
                    placeholder={"Enter Email"}
                    value=""
                    onChange={() => {}}
                    name="email"
                    // icon={`email`}
                  />
                </div>

                <div>
                  <label className="text-sm/5 text-primary font-medium">
                    Age
                  </label>
                  <Input
                    type={"text"}
                    placeholder={"Enter Age"}
                    value=""
                    onChange={() => {}}
                    name="age"
                  />
                </div>
                <div>
                  <label className="text-sm/5 text-primary font-medium">
                    Gender
                  </label>
                  <SelectDropdown
                    options={genderOption}
                    value={gender}
                    onChange={(value: unknown) => setGender(value as string)}
                    placeholder="Select ..."
                  />
                </div>
              </form>
            </div>
          </div>

          {/* side bar footer */}
          <div className="bg-white shadow-[0px_4px_43.4px_0px_#0000001A] px-5 py-2.5 grid grid-cols-2 gap-5 z-10">
            <Button
              onClick={() => setIsEditSession(false)}
              variant="outlinedGreen"
            >
              Cancel
            </Button>
            <Button
              onClick={() => setIsEditSession(false)}
              variant="filledGreen"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSessionSidebar;
