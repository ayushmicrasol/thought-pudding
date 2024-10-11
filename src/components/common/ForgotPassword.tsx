import { X } from "@phosphor-icons/react";
import React from "react";
import Input from "./Input";
import Button from "./Button";
// import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

interface ForgotPasswordProps {
  forgotPasswordOpen: boolean;
  setForgotPasswordOpen: (open: boolean) => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({
  forgotPasswordOpen,
  setForgotPasswordOpen,
}) => {
  //   const { push } = useRouter();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Email:", values.email);
      // Implement your logic for sending reset link here
      alert("Reset link sent to your email address");
    },
  });

  return (
    <div
      className={`w-full h-full fixed top-0 left-0  z-[999] flex items-center justify-center ${
        forgotPasswordOpen ? "visible" : "invisible"
      }`}
    >
      <div
        className={`max-w-[578px] w-full bg-yellow-50 rounded-base p-6 overflow-hidden transition-all duration-500 ${
          forgotPasswordOpen
            ? "visible opacity-100 scale-100"
            : "invisible opacity-0 scale-75"
        }`}
      >
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-xl/6 text-primary font-medium ">
              Forgot your password
            </h2>
            <X
              className="text-primary text-2xl cursor-pointer"
              onClick={() => setForgotPasswordOpen(false)}
            />
          </div>
          <p className="text-base/6  text-gray-400 pt-7.5">
            Forgot your password? Simply enter your email address, and we’ll
            help you reset it
          </p>
          <form onSubmit={formik.handleSubmit} className="space-y-4.5 pt-7.5">
            <div>
              <label className="text-sm/5 text-primary">Email</label>
              <Input
                mainClass={`bg-white`}
                placeholder={`Enter Email Address`}
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.email}
                </div>
              )}
            </div>
            <div className="text-end">
              <Button
                type="submit"
                variant="filledGreen"
                className={`max-w-[219px] w-full`}
              >
                Send reset link
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
