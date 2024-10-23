"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import SettingLayout from "@/layout/dashboard/SettingLayout";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateSettingData } from "@/services/setting.service";

// Validation schema
const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Current password is required"),
  password: Yup.string()
    .required("New password is required")
    .min(8, "Password must be at least 8 characters"),
  reEnterPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Re-entering the new password is required"),
});

const PasswordSetting = () => {
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      password: "",
      reEnterPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const { reEnterPassword, ...restValues } = values; // Destructure to exclude startTime and
      console.log(reEnterPassword, "reEnterPassword.........................");
      const formData = {
        ...restValues,
      };
      try {
        const response = await updateSettingData(formData); // Use the updated function
        console.log("API Response:", response);
      } catch (error) {
        console.error("Error updating settings:", error);
      }
    },
  });

  console.log(formik.errors, "formik.errors.........................");

  return (
    <SettingLayout>
      <div>
        <h1 className="text-xl_30 font-semibold text-primary">Password</h1>
        <form
          onSubmit={formik.handleSubmit}
          className="space-y-5 pt-6 max-w-[600px]"
        >
          <div>
            <label className="text-base_18 font-medium text-primary">
              Current Password
            </label>
            <Input
              type="password"
              name="oldPassword"
              placeholder="Enter Your Current Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.oldPassword}
            />

            {formik.errors.oldPassword && formik.touched.oldPassword && (
              <p className="text-sm text-red-500">
                {formik.errors.oldPassword}
              </p>
            )}
          </div>
          <div>
            <label className="text-base_18 font-medium text-primary">
              New Password *
            </label>
            <Input
              type="password"
              name="password"
              placeholder="Enter Your New Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password && (
              <p className="text-sm text-red-500">{formik.errors.password}</p>
            )}
          </div>
          <div>
            <label className="text-base_18 font-medium text-primary">
              Re-Enter new password
            </label>
            <Input
              type="password"
              name="reEnterPassword"
              placeholder="Re-Enter Your New Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.reEnterPassword}
            />
            {formik.errors.reEnterPassword &&
              formik.touched.reEnterPassword && (
                <p className="text-sm text-red-500">
                  {formik.errors.reEnterPassword}
                </p>
              )}
          </div>
          <div className="flex items-center w-[274px] gap-3.5 pt-8.5">
            <Button type="submit" variant="filled" className="w-full">
              Save
            </Button>
            <Button type="button" variant="default" className="w-full">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </SettingLayout>
  );
};

export default PasswordSetting;
