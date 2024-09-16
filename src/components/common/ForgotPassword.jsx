import { X } from "@phosphor-icons/react";
import React from "react";
import Input from "./Input";
import Button from "./Button";
import { useRouter } from "next/navigation";

const ForgotPassword = ({ forgotPasswordOpen, setForgotPasswordOpen }) => {
  const { push } = useRouter();
  return (
    <div
      className={`w-full h-full fixed top-0 left-0  z-[999] flex items-center justify-center ${
        forgotPasswordOpen ? "visible" : "invisible"
      }`}
    >
      <div
        className={`max-w-[420px] w-full bg-white rounded-base p-30px overflow-hidden transition-all duration-500 ${
          forgotPasswordOpen
            ? "visible opacity-100 scale-100"
            : "invisible opacity-0 scale-75"
        }`}
      >
        <X
          className="ml-auto text-pretty text-xl cursor-pointer"
          onClick={() => setForgotPasswordOpen(false)}
        />
        <div>
          <h2 className="text-base/6 text-primary font-semibold capitalize pt-3">
            Forgot your password
          </h2>
          <p className="text-xs/4 text-gray-400 font-medium pt-3">
            Forgot your password? Simply enter your email address, and we’ll
            help you reset it
          </p>
          <div className="space-y-4.5 pt-3">
            <div>
              <lable className="text-sm/5 text-primary">Email</lable>
              <Input
                mainClass={`bg-white border-[#CADAFF]`}
                placeholder={`Enter Email Address`}
              />
            </div>
            <Button variant="filled" className={`w-full`}>
              send reset link
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
