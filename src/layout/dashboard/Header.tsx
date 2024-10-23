"use client";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";

import { CaretDown, User } from "@phosphor-icons/react";
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
import Dropdown from "@/components/common/Dropdown";
import { useGetSettingData } from "@/services/setting.service";
import { useAllNotifications } from "@/services/notification.service";

interface NotificationItem {
  message: string;
  updatedAt?: string;
  createdAt: string;
}

const Header = () => {
  const pathname = usePathname();

  const [hasShadow, setHasShadow] = useState(false);
  const [profileDrop, setProfileDrop] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profileImage, setProfileImage] = useState(false);

  const { therapistData } = useGetSettingData();

  const { notificationData, notificationLoading } = useAllNotifications();

  // Set hasShadow state based on scroll position
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

  // Update form values when therapistData is available
  useEffect(() => {
    if (therapistData) {
      setProfileImage(therapistData?.profilePhoto);
    }
  }, [therapistData]);

  return (
    <Fragment>
      <header className=" sticky top-0 backdrop-blur-sm pt-3 z-[99]">
        <div
          className={`bg-white p-5 flex items-center justify-between rounded-base  transition-shadow duration-300 ${pathname !== "/dashboard" ? "rounded-t-base" : "rounded-base"
            } ${hasShadow ? "shadow-[0px_4px_6.1px_0px_#E5E9FF80]" : ""}`}
        >
          {/* logo  */}
          <Link href="/" className="max-w-[172px]">
            <Image
              src="/assets/images/logo.webp"
              alt="logo"
              width={300}
              height={300}
              className="w-full"
            />
          </Link>

          {/* navigation manu */}

          <nav className="md:block hidden">
            <ul className="flex gap-3">
              <li
                className={`py-[18px] px-6 text-base/4 font-medium ${pathname === "/dashboard"
                  ? "text-yellow-600 bg-yellow-100"
                  : "text-gray-500"
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
                className={`py-[18px] px-6 text-base/4 font-medium ${pathname === "/session"
                  ? "text-yellow-600 bg-yellow-100"
                  : "text-gray-500"
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
                className={`py-[18px] px-6 text-base/4 font-medium ${pathname === "/payment"
                  ? "text-yellow-600 bg-yellow-100"
                  : "text-gray-500"
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
                className={`py-[18px] px-6 text-base/4 font-medium ${pathname === "/patient"
                  ? "text-yellow-600 bg-yellow-100"
                  : "text-gray-500"
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
            <Link href={"/setting"}>
              <SettingIcon className="w-7.5 h-7.5" />
            </Link>
            <div className="relative">
              <button onClick={() => setNotification(!notification)}>
                <NotificationIcon className="w-7.5 h-7.5" />
              </button>
              <Dropdown
                className={`w-[400px]`}
                isOpen={notification}
                setIsOpen={setNotification}
              >
                <h4 className="p-5 text-base/6 text-primary font-semibold shadow-[0px_2px_4px_0px_#2C58BB1F]">
                  Notification
                </h4>
                <ul className="px-5 divide-y divide-primary/10">
                  {notificationLoading
                    ? // Render Skeletons when loading
                    Array.from({ length: 5 }).map((_, index) => (
                      <li key={index} className="flex items-start gap-4 py-5">
                        <div className="min-w-10 h-10 rounded-full bg-green-600/10 text-green-600 flex items-center justify-center">
                          <div className="w-6 h-6 bg-green-300 animate-pulse rounded-full"></div>
                        </div>
                        <div className="max-w-[290px]">
                          <p className="h-4 bg-primary/10 animate-pulse rounded w-3/4 mb-2"></p>
                          <p className="h-4 bg-primary/10 animate-pulse rounded w-1/2"></p>
                        </div>
                      </li>
                    ))
                    : // Render Notification Data when not loading
                    (notificationData as NotificationItem[])?.map((item, index) => (
                      <li key={index} className="flex items-start gap-4 py-5">
                        <div className="min-w-10 h-10 rounded-full bg-green-600/10 text-green-600 flex items-center justify-center">
                          <User size={24} />
                        </div>
                        <div className="max-w-[290px]">
                          <p className="text-sm/5 text-primary font-medium line-clamp-2">
                            {(item as { message: string }).message}
                          </p>
                          <p className="pt-2 text-xs_18 text-primary/50">
                            {item.updatedAt
                              ? `Updated at: ${new Date(
                                item.updatedAt
                              ).toLocaleDateString([], {
                                month: "short",
                                day: "2-digit",
                                year: "numeric",
                              })} 
                                  ,
                                  ${new Date(item.updatedAt).toLocaleTimeString(
                                [],
                                {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  hour12: true,
                                }
                              )}`
                              : `Created at: ${new Date(
                                item.createdAt
                              ).toLocaleDateString([], {
                                month: "short",
                                day: "2-digit",
                                year: "numeric",
                              })} 
                                  ,
                                  ${new Date(item.createdAt).toLocaleTimeString(
                                [],
                                {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  hour12: true,
                                }
                              )}`}
                          </p>
                        </div>
                      </li>
                    ))}
                </ul>
              </Dropdown>
            </div>
            <div className="relative">
              <div
                onClick={() => setProfileDrop(!profileDrop)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className="rounded-full overflow-hidden p-[3px] border w-10 h-10 border-primary/50">
                  <Image
                    src={
                      typeof profileImage === "string"
                        ? profileImage
                        : "/assets/images/avatar.webp"
                    }
                    alt="logo"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <CaretDown size={16} className=" text-primary" />
              </div>
              <Dropdown
                className={`w-[233px] py-4.5 px-15px`}
                isOpen={profileDrop}
                setIsOpen={setProfileDrop}
              >
                <ul className="text-primary font-medium text-base/6">
                  <li className="hover:text-green-600 hover:translate-x-2 transition-all duration-300">
                    <Link href={`/setting`}>My Profile</Link>
                  </li>
                  <hr className="my-[13px] border-green-600/15" />
                  <li className="hover:text-green-600 hover:translate-x-2 transition-all duration-300">
                    <Link href={`/`}>Log Out</Link>
                  </li>
                </ul>
              </Dropdown>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
