import {
  Bell,
  EnvelopeSimpleOpen,
  PencilSimple,
  Phone,
  Trash,
  UserCircle,
  X,
} from "@phosphor-icons/react";
import React, { useEffect } from "react";
import Button from "../Button";

const SessionDetailSidebar = ({ isSessionDetails, setIsSessionDetails }) => {
  useEffect(() => {
    if (isSessionDetails) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSessionDetails]);
  return (
    <div
      className={`fixed w-full h-full bg-black/20 top-0 left-0  ${
        isSessionDetails ? "visible" : "invisible"
      }`}
    >
      <div
        className={`max-w-[416px] w-full  bg-white absolute top-0 right-0 h-full transition-all duration-300 ${
          isSessionDetails ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative h-screen flex flex-col">
          {/* sidebar header */}
          <div className="px-5 py-3.5 shadow-[0px_4px_12px_0px_#0000000F] flex justify-between items-center">
            <h3 className="text-lg font-medium text-[#242424]">
              Session Details
            </h3>
            <div className="flex items-center gap-5">
              <button>
                <PencilSimple size={20} />
              </button>
              <button>
                <Bell size={20} />
              </button>
              <button>
                <Trash size={20} />
              </button>
              <button onClick={() => setIsSessionDetails(false)}>
                <X size={20} />
              </button>
            </div>
          </div>

          {/* sidebar content */}
          <div className="flex-1 overflow-y-auto px-5 py-2.5">
            <h4 class="text-sm/5 font-medium text-gray-400">Patient Name</h4>
            <ul className="space-y-15px pt-2 text-sm/5">
              <li className="flex gap-3 items-center text-primary">
                <UserCircle size={20} />
                Abhi Sojitra (Age-43)
              </li>
              <li className="flex gap-3 items-center text-primary">
                <EnvelopeSimpleOpen size={20} />
                abhi@gmail.com
              </li>
              <li className="flex gap-3 items-center text-primary">
                <Phone size={20} />
                +91 25222 125236
              </li>
              <li className="flex gap-3 items-center text-primary">
                <Bell size={20} />
                20 Minutes before
              </li>
              <li className="text-gray-400">
                Payment: <span className="text-primary">Paid on Time</span>
              </li>
              <li className="text-gray-400">
                Session Time:{" "}
                <span className="text-primary">2.00PM, 10Min</span>
              </li>
            </ul>
            <hr className="border-gray-200 my-15px" />
            <h4 class="text-sm/5 font-medium text-gray-400">
              Unpaid Session Payment
            </h4>
            <ul className="space-y-15px pt-2 text-sm/5">
              <li className="flex items-center justify-between text-primary">
                <p>10th July,2024</p>
                <span className="py-[2px] px-[9px] inline-block bg-red-200 text-red-500 rounded-[5px] text-sm/5">
                  Unpaid
                </span>
              </li>
              <li className="flex items-center justify-between text-primary">
                <p>7th July,2024</p>
                <span className="py-[2px] px-[9px] inline-block bg-red-200 text-red-500 rounded-[5px] text-sm/5">
                  Unpaid
                </span>
              </li>
            </ul>
          </div>

          {/* sidebar footer */}
          <div className="bg-white shadow-[0px_4px_43.4px_0px_#0000001A] px-5 py-2.5 grid grid-cols-2 gap-5 z-10">
            <Button
              onClick={() => setIsSessionDetails(false)}
              variant="outlined"
            >
              reschedule
            </Button>
            <Button variant="filled">Start session</Button>
          </div>
        </div>
      </div>

      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[389px] w-full">
        <div className="p-30px bg-white rounded-[10px] w-full">
          <div className="text-right">
            <p>
              <X size={20} />
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SessionDetailSidebar;
