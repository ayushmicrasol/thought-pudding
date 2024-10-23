import React, { useEffect, useMemo, useState } from "react";
import { GoogleIcon } from "../../../public/assets/Svgs";
import Link from "next/link";
import { X } from "@phosphor-icons/react";
import Image from "next/image";
import Input from "./Input";
import Button from "./Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthService } from "@/services/auth.service";

interface LoginProps {
  loginOpen: boolean;
  setLoginOpen: (open: boolean) => void;
  newUser: string | null;
  verified: string | null;
}

const Login: React.FC<LoginProps> = ({ loginOpen, setLoginOpen, newUser, verified }) => {
  const [step, setStep] = useState(1); // Manage steps 1 (Google), 2 (Form), 3 (Verification) 
  const [isFormLoading, setIsFormLoading] = useState(false);


  useEffect(() => {
    document.body.style.overflow = loginOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loginOpen]);

  const handleGoogleLogin = async () => {
    const response = await AuthService.signInWithGoogle();
    console.log("response", response);
    window.location.href = response.data;
    // setStep(2);
  };
  const handleFormSubmit = async () => {
    setIsFormLoading(true);
    const formData = new FormData();

    Object.entries(formik.values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await AuthService.addPractice(formData);
      console.log("response", response);
      if (response.status === 200) {
        setStep(3);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (e.g., show error message to user)
    } finally {
      setIsFormLoading(false);
    }
  }

  const stepsText = {
    1: {
      title: "Welcome to Thought Pudding!",
      description: "Start your journey to insightful sessions",
    },
    2: {
      title: "Share details about your practice",
      description:
        "Including your areas of specialization, therapeutic approaches",
    },
    3: {
      title: "Almost There!",
      description: "Submit info, get confirmation email.",
    },
  };

  // Form validation schema
  const validationSchema = Yup.object({
    therapist_name: Yup.string()
      .min(2, "Therapist Name must be at least 2 characters")
      .required("Therapist Name is required"),
    practice_name: Yup.string()
      .min(2, "Practice Name must be at least 2 characters")
      .required("Practice Name is required"),
    linkedin_URL: Yup.string()
      .url("Must be a valid URL")
      .matches(
        /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/,
        "Must be a valid LinkedIn URL"
      )
      .required("LinkedIn URL is required"),
  });

  // Formik setup
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      therapist_name: "",
      practice_name: "",
      linkedin_URL: "",
    },
    validationSchema,
    onSubmit: (values) => {
      handleFormSubmit();
      console.log("Form values: ", values);
    },
  });

  useMemo(() => {
    if (newUser) {
      setStep(2);
    }
    else if (verified === "false") {
      console.log("verified.................", verified);
      setStep(3);
    }
  }, [newUser, verified]);

  return (
    <div
      className={`fixed inset-0 bg-black/20 z-[999] flex items-center justify-center ${loginOpen ? "visible" : "invisible"
        }`}
    >
      <div
        className={`max-w-[887px] w-full h-[608px] bg-white rounded-base flex overflow-hidden transition-all duration-300 ${loginOpen
          ? "visible opacity-100 scale-100"
          : "invisible opacity-0 scale-95"
          }`}
      >
        {/* Sidebar */}
        <div className="max-w-[311px] bg-yellow-50 pl-7.5 pr-[9px] pt-8 pb-[59px] flex flex-col justify-between">
          <div>
            <Image
              src="/assets/images/logo.webp"
              alt="logo"
              width={100}
              height={100}
              className="w-auto h-7"
            />
            <h2 className="text-lg font-bold max-w-[187px] text-green-600 pt-6">
              {stepsText[step as keyof typeof stepsText].title}
            </h2>
            <p className="text-sm font-medium text-primary pt-4">
              {stepsText[step as keyof typeof stepsText].description}
            </p>
          </div>
          <Image
            src="/assets/images/login-banner.webp"
            alt="Your Practice"
            width={1000}
            height={1000}
            className="w-full h-auto mt-20"
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 px-10 py-8 relative">
          <div className="flex justify-between">
            <div>
              <h3 className="text-sm font-semibold text-primary">
                {step === 1
                  ? "Log in Info"
                  : step === 2
                    ? "Set Up My Practice"
                    : "Verify"}{" "}
                <span className="text-xs font-normal text-primary/40 ml-2">
                  {step} of 3
                </span>
              </h3>
              <p className="text-xs text-primary/60 pt-1">
                {step === 1
                  ? "Log in to continue your journey with us"
                  : step === 2
                    ? "Provide information about your practice"
                    : "Verify Your Identity"}
              </p>
              {/* Progress Bar */}
              <div className="flex items-center gap-3.5 pt-5">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-[90px] h-[2px] bg-[#EEEEEE] rounded-full"
                  >
                    <div
                      className={`h-full bg-green-600 transition-all ${step >= i ? "w-full" : "w-0"
                        }`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <X
              className="text-primary text-xl cursor-pointer"
              onClick={() => setLoginOpen(false)}
            />
          </div>

          {/* Google Login Step */}
          {step === 1 && (
            <div className="max-w-[443px] pt-7">
              <p className="text-sm font-semibold text-primary">Log in with</p>
              <button
                onClick={handleGoogleLogin}
                className="p-3 bg-white border border-green-600 w-full rounded mt-2 flex items-center justify-center gap-2 text-sm text-primary"
              >
                <GoogleIcon className="w-5 h-5" /> Continue with Google
              </button>
              <p className="text-center text-xs text-primary pt-9">
                By continuing you agree to our{" "}
                <Link href="#" className="text-green-600 underline">
                  Terms & Conditions
                </Link>{" "}
                <br />
                <Link href="#" className="text-green-600 underline">
                  Contact Us
                </Link>
              </p>
            </div>
          )}

          {/* Form Step */}
          {step === 2 && (
            <form
              onSubmit={formik.handleSubmit}
              className="max-w-[443px] pt-7 space-y-4"
            >
              {[
                {
                  label: "Therapist Name",
                  placeholder: "Enter Therapist Name",
                  name: "therapist_name",
                },
                {
                  label: "Practice Name",
                  placeholder: "Enter Practice Name",
                  name: "practice_name",
                },
                {
                  label: "Linkedin URL",
                  placeholder: "Enter Linkedin URL",
                  name: "linkedin_URL",
                },
              ].map((field) => (
                <div key={field.name}>
                  <label className="text-sm text-primary">{field.label}</label>
                  <Input
                    type="text"
                    placeholder={field.placeholder}
                    {...formik.getFieldProps(field.name)}
                  />
                  {formik.touched[field.name as keyof typeof formik.values] &&
                    formik.errors[field.name as keyof typeof formik.values] ? (
                    <div className="text-red-600 text-xs">
                      {formik.errors[field.name as keyof typeof formik.values]}
                    </div>
                  ) : null}
                </div>
              ))}
              <Button type="submit" variant="filledGreen" className="!mt-8" disabled={isFormLoading}>
                Set Up My Practice
              </Button>
            </form>
          )}

          {/* Verification Step */}
          {step === 3 && (
            <div className="flex flex-col items-center justify-center h-full">
              <svg
                width="46"
                height="45"
                viewBox="0 0 46 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5625"
                  y="-0.5625"
                  width="43.875"
                  height="43.875"
                  rx="21.9375"
                  transform="matrix(1 0 0 -1 0.777344 43.875)"
                  stroke="#2A5F61"
                  strokeWidth="1.125"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.2774 33.75C24.4071 33.75 25.3228 32.834 25.3228 31.7045V23.5227C25.3228 22.3932 24.4071 21.4773 23.2774 21.4773C22.1477 21.4773 21.2319 22.3932 21.2319 23.5227V31.7045C21.2319 32.834 22.1477 33.75 23.2774 33.75ZM23.2774 17.3864C24.4071 17.3864 25.3228 16.4704 25.3228 15.3409V13.2955C25.3228 12.166 24.4071 11.25 23.2774 11.25C22.1477 11.25 21.2319 12.166 21.2319 13.2955V15.3409C21.2319 16.4704 22.1477 17.3864 23.2774 17.3864Z"
                  fill="#2A5F61"
                />
              </svg>
              <p className="text-base font-semibold text-primary pt-2">
                Verification Pending
              </p>
              <p className="text-sm text-primary/70 text-center pt-4">
                You’re almost done! Our team is in the process of verifying your
                account. We will reach out to you shortly!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
