"use client";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";

import { CaretDown } from "@phosphor-icons/react";
import {
  DashboardIcon,
  NotificationIcon,
  PatientIcon,
  PaymentIcon,
  SessionIcon,
  SettingIcon,
} from "../../../public/assets/Svgs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();
  return (
    <Fragment>
      <header className=" sticky top-0 backdrop-blur-sm pt-3 z-[99]">
        <div
          className={`bg-white p-5 flex items-center justify-between  transition-shadow duration-300 ${
            pathname !== "/dashboard"
              ? "rounded-t-base !shadow-none"
              : "rounded-base"
          } ${hasShadow ? "shadow-[0px_4px_6.1px_0px_#E5E9FF80]" : ""}`}
        >
          {/* logo  */}
          <div className="max-w-[172px]">
            <Image
              src="/assets/images/logo.webp"
              alt="logo"
              width={300}
              height={300}
              className="w-full"
            />
          </div>

          {/* navigation manu */}

          <nav className="md:block hidden">
            <ul className="flex gap-3">
              <li
                className={`py-[18px] px-6 text-base/4 ${
                  pathname === "/dashboard"
                    ? "text-yellow-600 font-semibold bg-yellow-100"
                    : "text-gray-500 font-medium"
                } flex items-center gap-3 rounded-full cursor-pointer`}
              >
                <Link href="/dashboard" className="flex items-center gap-3">
                  <DashboardIcon
                    className="w-6 h-6"
                    pathFillColor={
                      pathname === "/dashboard" ? "#c58843" : "#5E585A"
                    }
                  />
                  Dashboard
                </Link>
              </li>
              <li
                className={`py-[18px] px-6 text-base/4 ${
                  pathname === "/session"
                    ? "text-yellow-600 font-semibold bg-yellow-100"
                    : "text-gray-500 font-medium"
                } flex items-center gap-3 rounded-full cursor-pointer`}
              >
                <Link href="/session" className="flex items-center gap-3">
                  <SessionIcon
                    className="w-6 h-6"
                    pathFillColor={
                      pathname === "/session" ? "#c58843" : "#5E585A"
                    }
                  />
                  Session
                </Link>
              </li>
              <li
                className={`py-[18px] px-6 text-base/4 ${
                  pathname === "/payment"
                    ? "text-yellow-600 font-semibold bg-yellow-100"
                    : "text-gray-500 font-medium"
                } flex items-center gap-3 rounded-full cursor-pointer`}
              >
                <Link href="/payment" className="flex items-center gap-3">
                  <PaymentIcon
                    className="w-6 h-6"
                    pathFillColor={
                      pathname === "/payment" ? "#c58843" : "#5E585A"
                    }
                  />
                  Payment
                </Link>
              </li>
              <li
                className={`py-[18px] px-6 text-base/4 ${
                  pathname === "/patient"
                    ? "text-yellow-600 font-semibold bg-yellow-100"
                    : "text-gray-500 font-medium"
                } flex items-center gap-3 rounded-full cursor-pointer`}
              >
                <Link href="/patient" className="flex items-center gap-3">
                  <PatientIcon
                    className="w-6 h-6"
                    pathFillColor={
                      pathname === "/patient" ? "#c58843" : "#5E585A"
                    }
                  />
                  Patient
                </Link>
              </li>
            </ul>
          </nav>

          {/* profile area */}
          <div className="md:flex hidden items-center gap-6">
            <button className="w-[30px] h-[30px]">
              <SettingIcon className="w-full h-full" />
            </button>
            <button className="w-[30px] h-[30px]">
              <NotificationIcon className="w-full h-full" />
            </button>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="rounded-full overflow-hidden p-[3px] border border-[#545454]">
                <Image
                  src="/assets/images/avatar.webp"
                  alt="logo"
                  width={300}
                  height={300}
                  className="w-10 h-10 object-cover"
                />
              </div>
              <CaretDown className="w-4 text-[#6F6F6F]" />
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
