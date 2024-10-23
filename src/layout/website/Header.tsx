"use client";

import Button from "@/components/common/Button";
import Login from "@/components/common/Login";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useMemo, useState } from "react";

const Header = () => {
  const [hasShadow, setHasShadow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);


  const queryParams = new URLSearchParams(window.location.search);

  const newUser = queryParams.get("newUser");

  const verified = queryParams.get("verified");

  console.log("newUser", newUser);
  console.log("verified", typeof (verified));

  useEffect(() => {
    if (verified === "false" || newUser) {
      setLoginOpen(true);
    }
  }, [verified, newUser]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
  return (
    <Fragment>
      <header
        className={`bg-white shadow-[0px_4px_6.1px_0px_#E5E9FF80] transition-all duration-500 w-full z-[99] ${hasShadow ? "sticky top-0" : "static -top-40"
          }`}
      >
        <div className="sm:py-6 py-4 px-4 relative z-[99]">
          <div className="container mx-auto flex justify-between items-center">
            <Link href={`/`}>
              <Image
                src="/assets/images/logo.webp"
                alt="banner"
                width={200}
                height={200}
                className="sm:h-[47px] h-8  w-auto"
              />
            </Link>
            <div
              className={`flex flex-col sm:flex-row sm:items-center sm:gap-12 gap-7 sm:static absolute top-full  bg-white w-full sm:w-auto px-4 sm:px-0 py-30px sm:py-0 z-30 transition-all duration-500 ${menuOpen ? "left-0" : "-left-full"
                }`}
            >
              <ul className="flex flex-col sm:flex-row sm:items-center sm:gap-38px gap-2.5 text-primary font-medium sm:text-lg/5 text-base/6">
                <li className="py-2.5 px-1.5 sm:p-0  cursor-pointer hover:text-green-600 transition-all duration-500 relative">
                  Blog
                </li>
                <li
                  className="py-2.5 px-1.5 sm:p-0 cursor-pointer hover:text-green-600 transition-all duration-500 relative"
                  onClick={() => setLoginOpen(!loginOpen)}
                >
                  Login
                </li>
              </ul>
              <Button variant="filled" className={`flex items-center gap-2 `}>
                Schedule a Demo
                <ArrowUpRight className="text-xl" />
              </Button>
            </div>
            <button
              className="sm:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X size={24} className="text-blue-600 font-semibold" />
              ) : (
                <List size={24} className="text-primary" />
              )}
            </button>
          </div>
        </div>
      </header>

      <Login setLoginOpen={setLoginOpen} loginOpen={loginOpen} newUser={newUser} verified={verified} />
    </Fragment>
  );
};

export default Header;
