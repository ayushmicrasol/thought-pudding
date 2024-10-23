import { X } from "@phosphor-icons/react";
import React, { useEffect } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import SelectDropdown from "../common/SelectDropdown";
import DatePicker from "../common/DatePicker";
import TimePicker from "../common/TimePicker";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createSchedule } from "@/services/dashboard.service";
import moment from "moment";

const frequencyOption = [
  "Every Week On Monday",
  "Every Week On Daily",
  "Every Week On Weekly",
  "Every Week On Monthly",
];
const genderOption = ["male", "female", "others"];
const reminderOption = ["10-Minutes", "20-Minutes", "30-Minutes"];
// Validation Schema using Yup

const validationSchema = Yup.object({
  fromDate: Yup.date().required("Appointment date is required"),
  startTime: Yup.string().required("Start time is required"),
  endTime: Yup.string().required("End time is required"),
  recurrence: Yup.string().required("Frequency is required"),
  toDate: Yup.date().required("End date is required"),
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Only digits are allowed")
    .min(10, "Mobile number must be at least 10 digits")
    .required("Mobile number is required"),
  emails: Yup.array().of(Yup.string().email("Invalid email address")).min(1, "At least one email is required"),
  age: Yup.number()
    .positive("Age must be a positive number")
    .required("Age is required"),
  gender: Yup.string().required("Gender is required"),
  amount: Yup.number()
    .positive("Payment must be a positive number")
    .required("Payment is required"),
  reminder: Yup.string().required("Reminder is required"),
});

const MomentHelper = {
  getDateIST(date: string) {
    return moment(date).format("YYYY-MM-DD");
  },

  getTimeIST(time: string) {
    return moment(time).format("HH:mm");
  },

  convertToIST(date: string, time: string) {
    const [year, month, day] = date.split("-");
    const [hours, minutes] = time.split(":");
    const isoDate = new Date(
      Number(year),
      Number(month) - 1,
      Number(day),
      Number(hours),
      Number(minutes),
      0
    ).toISOString();
    return isoDate;
  },
};

const ScheduleSessionSidebar: React.FC<{
  isScheduleSessionModal: boolean;
  setIsScheduleSessionModal: (value: boolean) => void;
}> = ({ isScheduleSessionModal, setIsScheduleSessionModal }) => {

  const formik = useFormik({
    initialValues: {
      fromDate: "",
      startTime: "",
      endTime: "",
      recurrence: "",
      toDate: "",
      first_name: "",
      last_name: "",
      phone: "",
      emails: [], // Set as an array
      age: "",
      gender: "",
      amount: "",
      reminder: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const {
        startTime,
        endTime,
        first_name,
        last_name,
        reminder,
        ...restValues
      } = values; // Destructure to exclude startTime and endTime

      console.log({ startTime, endTime, first_name, last_name, reminder }, "valuessssssss.........................");


      const fullName = `${values.first_name} ${values.last_name}`; // Combine names

      const startDate = MomentHelper.getDateIST(values?.fromDate);
      const endDate = MomentHelper.getDateIST(values?.toDate);
      const fromDates = MomentHelper.convertToIST(startDate, values?.startTime);
      const toDates = MomentHelper.convertToIST(endDate, values?.endTime);

      const formData = {
        ...restValues,
        name: fullName, // Add fullName to the submitted values if needed
        clientCountry: "India",
        sessionDate: values?.fromDate,
        description: "new session",
        location: "offline",
        summary: "new session",
        isBefore: false,
        fromDate: fromDates,
        toDate: toDates,
      };
      console.log("Form values:", formData);
      // Add your form submit logic here
      createSchedule(formData);
    },
  });

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
      className={`fixed w-full h-full bg-black/20 top-0 left-0 z-[999] ${isScheduleSessionModal ? "visible" : "invisible"
        }`}
      onClick={() => setIsScheduleSessionModal(false)}
    >
      <div
        className={`max-w-[416px] w-full  bg-white absolute top-0 right-0 h-full transition-all duration-300 ${isScheduleSessionModal ? "translate-x-0" : "translate-x-full"
          }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the sidebar
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
          <form
            onSubmit={formik.handleSubmit}
            className="flex-1 p-5 overflow-y-auto"
          >
            <div className="grid grid-cols-2 gap-5">
              <div className="col-span-2">
                <label className="text-sm/5 text-primary font-medium">
                  Appointment Date
                </label>
                <DatePicker
                  placeholder="DD/MM/YYYY"
                  value={formik.values.fromDate}
                  onChange={(val) => formik.setFieldValue("fromDate", val)}
                />
                {formik.touched.fromDate && formik.errors.fromDate ? (
                  <div className="text-red-600">{formik.errors.fromDate}</div>
                ) : null}
              </div>

              <div>
                <label className="text-sm/5 text-primary font-medium">
                  Start Time
                </label>
                <TimePicker
                  value={formik.values.startTime}
                  onChange={(val) =>
                    formik.setFieldValue("startTime", val)
                  }
                />
                {formik.touched.startTime && formik.errors.startTime ? (
                  <div className="text-red-600">{formik.errors.startTime}</div>
                ) : null}
              </div>

              <div>
                <label className="text-sm/5 text-primary font-medium">
                  End Time
                </label>
                <TimePicker
                  value={formik.values.endTime}
                  onChange={(val) => formik.setFieldValue("endTime", val)}
                />
                {formik.touched.endTime && formik.errors.endTime ? (
                  <div className="text-red-600">{formik.errors.endTime}</div>
                ) : null}
              </div>

              <div className="col-span-2">
                <label className="text-sm/5 text-primary font-medium">
                  Frequency
                </label>
                <SelectDropdown
                  options={frequencyOption}
                  value={formik.values.recurrence}
                  onChange={(val) =>
                    formik.setFieldValue("recurrence", val)
                  }
                  placeholder="Select ..."
                />
                {formik.touched.recurrence && formik.errors.recurrence ? (
                  <div className="text-red-600">{formik.errors.recurrence}</div>
                ) : null}
              </div>

              <div className="col-span-2">
                <label className="text-sm/5 text-primary font-medium">
                  End Date
                </label>
                <DatePicker
                  placeholder="DD/MM/YYYY"
                  value={formik.values.toDate}
                  onChange={(val) => formik.setFieldValue("toDate", val)}
                />
                {formik.touched.toDate && formik.errors.toDate ? (
                  <div className="text-red-600">{formik.errors.toDate}</div>
                ) : null}
              </div>
            </div>

            <hr className="border-divider my-5" />

            <div>
              <h4 className="text-sm/5 font-medium text-[#5E585A]">
                Customer Details
              </h4>
              <div className="grid grid-cols-2 gap-5 mt-[15px]">
                <div>
                  <label className="text-sm/5 text-primary font-medium">
                    First Name
                  </label>
                  <Input
                    name="first_name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter First Name"
                  />
                  {formik.touched.first_name && formik.errors.first_name ? (
                    <div className="text-red-600">
                      {formik.errors.first_name}
                    </div>
                  ) : null}
                </div>
                <div>
                  <label className="text-sm/5 text-primary font-medium">
                    Last Name
                  </label>
                  <Input
                    name="last_name"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter Last Name"
                  />
                  {formik.touched.last_name && formik.errors.last_name ? (
                    <div className="text-red-600">
                      {formik.errors.last_name}
                    </div>
                  ) : null}
                </div>
                <div className="col-span-2">
                  <label className="text-sm/5 text-primary font-medium">
                    Mobile Number
                  </label>
                  <Input
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter Number"
                    type="number"
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="text-red-600">{formik.errors.phone}</div>
                  ) : null}
                </div>
                <div className="col-span-2">
                  <label className="text-sm/5 text-primary font-medium">
                    Email
                  </label>
                  <Input
                    name="emails"
                    value={formik.values.emails.join(', ')}
                    onChange={(e) => formik.setFieldValue('emails', e.target.value.split(',').map(email => email.trim()))}
                    onBlur={formik.handleBlur}
                    placeholder="Enter Email"
                    type="email"
                  />
                  {formik.touched.emails && formik.errors.emails ? (
                    <div className="text-red-600">{formik.errors.emails}</div>
                  ) : null}
                </div>
                <div>
                  <label className="text-sm/5 text-primary font-medium">
                    Age
                  </label>
                  <Input
                    name="age"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter Age"
                    type="text"
                  />
                  {formik.touched.age && formik.errors.age ? (
                    <div className="text-red-600">{formik.errors.age}</div>
                  ) : null}
                </div>
                {/* nakul@yopmail.com */}
                <div>
                  <label className="text-sm/5 text-primary font-medium">
                    Gender
                  </label>
                  <SelectDropdown
                    options={genderOption}
                    value={formik.values.gender}
                    onChange={(val) => formik.setFieldValue("gender", val)}
                    placeholder="Select ..."
                  />
                  {formik.touched.gender && formik.errors.gender ? (
                    <div className="text-red-600">{formik.errors.gender}</div>
                  ) : null}
                </div>
                <div>
                  <label className="text-sm/5 text-primary font-medium">
                    amount
                  </label>
                  <Input
                    name="amount"
                    value={formik.values.amount}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter amount"
                    type="number"
                  />
                  {formik.touched.amount && formik.errors.amount ? (
                    <div className="text-red-600">{formik.errors.amount}</div>
                  ) : null}
                </div>
                <div>
                  <label className="text-sm/5 text-primary font-medium">
                    Reminder
                  </label>
                  <SelectDropdown
                    options={reminderOption}
                    value={formik.values.reminder}
                    onChange={(val) =>
                      formik.setFieldValue("reminder", val)
                    }
                    placeholder="Select ..."
                  />
                  {formik.touched.reminder && formik.errors.reminder ? (
                    <div className="text-red-600">{formik.errors.reminder}</div>
                  ) : null}
                </div>
              </div>
            </div>
          </form>

          {/* side bar footer */}
          <div className="bg-white shadow-[0px_4px_43.4px_0px_#0000001A] px-5 py-2.5 grid grid-cols-2 gap-5 z-10">
            <Button
              onClick={() => setIsScheduleSessionModal(false)}
              variant="outlinedGreen"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={() => {
                void formik.handleSubmit();
                setIsScheduleSessionModal(false);
              }}
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

export default ScheduleSessionSidebar;
