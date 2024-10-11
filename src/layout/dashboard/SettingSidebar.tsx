"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { Fragment } from "react";

const SettingSidebar = () => {
  const { push } = useRouter();
  const pathName = usePathname();
  const sidebarOptions = [
    {
      name: "Profile Information",
      route: "/setting",
      isActive: pathName === "/setting" ? true : false,
    },
    {
      name: "Password",
      route: "/setting/password",
      isActive: pathName === "/setting/password" ? true : false,
    },
    {
      name: "Payment",
      route: "/setting/payment",
      isActive: pathName === "/setting/payment" ? true : false,
    },
    {
      name: "Help & Support",
      route: "/setting/help-and-support",
      isActive: pathName === "/setting/help-and-support" ? true : false,
    },
    {
      name: "Subscription",
      route: "/setting/subscription",
      isActive: pathName === "/setting/subscription" ? true : false,
    },
    {
      name: "Calendar Setting",
      route: "/setting/calendar",
      isActive: pathName === "/setting/calendar" ? true : false,
    },
  ];
  return (
    <Fragment>
      <div className="px-4 py-5 h-full shadow-[0px_3px_11px_0px_#2C58BB1F]">
        <ul className={`text-base/6 font-medium`}>
          {sidebarOptions?.map((items, index) => (
            <li
              key={index}
              onClick={() => {
                push(items?.route);
              }}
              className={`p-4 rounded-md cursor-pointer ${
                items?.isActive
                  ? "bg-green-600/10 text-green-600"
                  : "text-primary"
              }`}
            >
              {items.name}
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default SettingSidebar;
