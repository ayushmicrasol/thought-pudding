"use client";
import { ArrowUpRight, List } from "@phosphor-icons/react";
import React, { Fragment, useEffect, useState } from "react";

const Header = () => {
  const [hasShadow, setHasShadow] = useState(false);

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
        className={`sm:py-6 py-4 px-4 bg-white shadow-[0px_4px_6.1px_0px_#E5E9FF80] transition-all duration-500 w-full z-[99] ${
          hasShadow ? "fixed top-0" : "static -top-40"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <h2 className="sm:text-2xl_30 text-base/5 font-semibold text-gray-400">
            Thought Pudding
          </h2>
          <div className="sm:flex items-center gap-12 hidden">
            <ul className="flex items-center gap-38px text-primary font-medium">
              <li>Blog</li>
              <li>Login</li>
            </ul>
            <button className="py-4 px-5 border border-primary rounded-full flex items-center justify-center gap-1.5 text-base_18 text-primary font-medium">
              Let’s Talk <ArrowUpRight size={20} />
            </button>
          </div>
          <button className="sm:hidden">
            <List size={24} className="text-[#24201F]" />
          </button>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
