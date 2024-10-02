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
          <div className="space-y-4.5 pt-7.5">
            <div>
              <lable className="text-sm/5 text-primary">Email</lable>
              <Input
                mainClass={`bg-white`}
                placeholder={`Enter Email Address`}
              />
            </div>
            <div className="text-end">
              <Button variant="filledGreen" className={`max-w-[219px] w-full`}>
                send reset link
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
