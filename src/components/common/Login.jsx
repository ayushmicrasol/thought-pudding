"use client";
import React, { useEffect, useState } from "react";
import { GoogleIcon } from "../../../public/assets/Svgs";
import Input from "./Input";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/navigation";
import ForgotPassword from "./ForgotPassword";
import { X } from "@phosphor-icons/react";

const Login = ({ loginOpen, setLoginOpen }) => {
  const { push } = useRouter();
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);

  useEffect(() => {
    if (loginOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loginOpen]);

  return (
    <div
      className={`w-full h-full fixed top-0 left-0 bg-black/20 z-[999] flex items-center justify-center ${
        loginOpen ? "visible" : "invisible"
      }`}
    >
      {/* Show login form only if forgotPasswordOpen is false */}
      {!forgotPasswordOpen && (
        <div
          className={`max-w-[772px] w-full bg-white rounded-base grid grid-cols-7 overflow-hidden transition-all duration-300 ${
            loginOpen
              ? "visible opacity-100 scale-100"
              : "invisible opacity-0 scale-95"
          }`}
        >
          <div className="col-span-3">
            <div className="pl-5 pr-38px py-30px">
              <h2 className="text-lg/7 text-blue-600 font-semibold">
                Unlock Thought Pudding
              </h2>
              <p className="text-xs_18 text-gray-400 pt-3">
                Log in to streamline sessions, enhance client care, and elevate
                your professional journey with ease.
              </p>
            </div>
          </div>
          <div className="col-span-4 bg-[#F8FAFF]">
            <div className="px-10 py-30px ">
              <div>
                <X
                  className="ml-auto text-pretty text-xl cursor-pointer"
                  onClick={() => setLoginOpen(false)}
                />
                <p className="text-sm/5 text-primary font-semibold mt-2">
                  Log in <span className="font-normal">with</span>
                </p>
                <button className="p-3 bg-white border border-blue-600 w-full rounded mt-2 flex items-center justify-center gap-2.5 text-sm/5 text-primary">
                  <GoogleIcon className={`w-5 h-5`} /> Continue with Google
                </button>
                <div className="py-3 flex items-center text-sm text-[#D9D9D9] before:flex-1 before:border-t before:border-[#D9D9D9] before:me-6 after:flex-1 after:border-t after:border-[#D9D9D9] after:ms-6">
                  or
                </div>
                <div className="space-y-4.5">
                  <div>
                    <label className="text-sm/5 text-primary">Email</label>
                    <Input
                      mainClass={`bg-white border-[#CADAFF]`}
                      placeholder={`Enter Email Address`}
                    />
                  </div>
                  <div>
                    <label className="text-sm/5 text-primary">Password</label>
                    <Input
                      type="password"
                      mainClass={`bg-white border-[#CADAFF]`}
                      placeholder={`Enter Password`}
                    />
                  </div>
                  <div className="flex items-center justify-between !mt-3">
                    <label htmlFor="" className="flex gap-2">
                      <input type="checkbox" />
                      <p className="text-xs_18 text-blue-600">Remember Me</p>
                    </label>
                    <p
                      className="text-xs_18 text-blue-600 underline cursor-pointer"
                      onClick={() => setForgotPasswordOpen(true)}
                    >
                      Forgot Password?
                    </p>
                  </div>
                  <Button
                    variant="filled"
                    className={`w-full`}
                    onClick={() => push("/dashboard")}
                  >
                    Login
                  </Button>
                  <p className="text-center text-xs_18">
                    By continuing you agree to our 
                    <Link href={`/`} className="text-blue-600 underline">
                      Terms & Conditions
                    </Link>
                    <Link href={`/`} className="block text-blue-600">
                      Contact Us
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Forgot Password form */}
      <ForgotPassword
        forgotPasswordOpen={forgotPasswordOpen}
        setForgotPasswordOpen={setForgotPasswordOpen}
      />
    </div>
  );
};

export default Login;
