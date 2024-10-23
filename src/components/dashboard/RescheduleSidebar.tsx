import { X } from "@phosphor-icons/react";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../common/Button";
import DatePicker from "../common/DatePicker";
import SelectDropdown from "../common/SelectDropdown";
import TimePicker from "../common/TimePicker";
import { rescheduleSession } from "@/services/session.service";
import moment from "moment";
import endpoints from "@/utils/endpoints";
import { mutate } from "swr";
import { fetcher } from "@/utils/axios";

const frequencyOption = ["This Session", "This Week"];

interface RescheduleSidebarProps {
  isRescheduleSession: boolean;
  setIsRescheduleSession: (value: boolean) => void;
  singleSessionID: string;
  query?: string;
}

const RescheduleSidebar: React.FC<RescheduleSidebarProps> = ({
  isRescheduleSession,
  setIsRescheduleSession,
  singleSessionID,
  query,
}) => {
  // Helper methods for conversion
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

  const [isLoading, setIsLoading] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      appointmentDate: "",
      startTime: "",
      endTime: "",
      rescheduleOption: "",
    },
    validationSchema: Yup.object({
      appointmentDate: Yup.string().required("Appointment date is required"),
      startTime: Yup.string().required("Start time is required"),
      endTime: Yup.string().required("End time is required"),
      rescheduleOption: Yup.string().required("Reschedule option is required"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      const appointmentDateIST = MomentHelper.getDateIST(
        values?.appointmentDate
      );
      const fromDate = MomentHelper.convertToIST(
        appointmentDateIST,
        values?.startTime
      );
      const toDate = MomentHelper.convertToIST(
        appointmentDateIST,
        values?.endTime
      );

      const formData = {
        fromDate,
        toDate,
        rescheduleOption: values.rescheduleOption,
      };

      await rescheduledSessionData(formData);

      setIsLoading(false);
      setIsRescheduleSession(false);
    },
  });

  const rescheduledSessionData = async (formData: {
    fromDate: string;
    toDate: string;
    rescheduleOption: string;
  }) => {
    try {
      const rescheduleRes = await rescheduleSession(singleSessionID, formData);

      console.log(rescheduleRes, "rescheduleRes");

      const url = `${endpoints.sessions.schedules}?${query}`;

      // Log the URL to verify it's correct
      console.log(url, "mutate URL");

      mutate(url, async () => {
        // This callback can be used to fetch updated data if needed
        await fetcher(url);
      });

      formik.resetForm(); // Call the resetForm function here

      // This will give you the current cached data without revalidating
    } catch (error) {
      console.error("Failed to reschedule session.", error);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isRescheduleSession ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isRescheduleSession]);

  return (
    <div
      className={`fixed w-full h-full bg-black/20 top-0 left-0 z-[999] ${isRescheduleSession ? "visible" : "invisible"
        }`}
      onClick={() => setIsRescheduleSession(false)}
    >
      <div
        className={`max-w-[416px] w-full bg-white absolute top-0 right-0 h-full transition-all duration-300 ${isRescheduleSession ? "translate-x-0" : "translate-x-full"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-screen flex flex-col">
          <div className="px-5 py-3.5 shadow-[0px_4px_12px_0px_#0000000F] flex justify-between items-center">
            <h3 className="text-lg font-medium text-[#242424]">
              Reschedule Session
            </h3>
            <button onClick={() => setIsRescheduleSession(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 p-5 overflow-y-auto">
            <form
              onSubmit={formik.handleSubmit}
              className="grid grid-cols-2 gap-5"
            >
              <div className="col-span-2">
                <label className="text-sm/5 text-primary font-medium">
                  Appointment Date
                </label>
                <DatePicker
                  placeholder="DD/MM/YYYY"
                  value={formik.values.appointmentDate}
                  onChange={(date) =>
                    formik.setFieldValue("appointmentDate", date)
                  }
                />
                {formik.touched.appointmentDate &&
                  formik.errors.appointmentDate && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.appointmentDate}
                    </p>
                  )}
              </div>

              <div>
                <label className="text-sm/5 text-primary font-medium">
                  Start Time
                </label>
                <TimePicker
                  value={formik.values.startTime}
                  onChange={(time) => formik.setFieldValue("startTime", time)}
                />
                {formik.touched.startTime && formik.errors.startTime && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.startTime}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm/5 text-primary font-medium">
                  End Time
                </label>
                <TimePicker
                  value={formik.values.endTime}
                  onChange={(time) => formik.setFieldValue("endTime", time)}
                />
                {formik.touched.endTime && formik.errors.endTime && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.endTime}
                  </p>
                )}
              </div>

              <div className="col-span-2">
                <label className="text-sm/5 text-primary font-medium">
                  Reschedule Option
                </label>
                <SelectDropdown
                  options={frequencyOption}
                  value={formik.values.rescheduleOption}
                  onChange={(value) =>
                    formik.setFieldValue("rescheduleOption", value)
                  }
                  placeholder="Select ..."
                />
                {formik.touched.rescheduleOption &&
                  formik.errors.rescheduleOption && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.rescheduleOption}
                    </p>
                  )}
              </div>
            </form>
          </div>

          <div className="bg-white shadow-[0px_4px_43.4px_0px_#0000001A] px-5 py-2.5 grid grid-cols-2 gap-5 z-10">
            <Button
              onClick={() => setIsRescheduleSession(false)}
              variant="outlinedGreen"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={() => {
                void formik.handleSubmit();
              }}
              variant="filledGreen"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RescheduleSidebar;
