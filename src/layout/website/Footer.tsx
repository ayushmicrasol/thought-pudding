"use client";

import Button from "@/components/common/Button";
import {
  ArrowUpRight,
  EnvelopeSimple,
  InstagramLogo,
  MapPin,
  Phone,
  XLogo,
} from "@phosphor-icons/react";
import { RiFacebookCircleFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="sm:pt-[100px] sm:pb-26px py-30px px-4 bg-green-600 sm:mt-100px mt-50px">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-30px">
          <div>
            <h2 className="text-xl_26 text-white font-semibold">
              Thought Pudding
            </h2>
            <p className="sm:pt-30px pt-4 text-white/80 sm:text-base/7 text-sm/5  max-w-[638px]">
              Our job is to support you because we know, you support a thousand
              clients. Join our community
            </p>
          </div>
          <div className="flex items-center sm:gap-5 gap-3">
            <Button
              variant={"whiteLined"}
              className={`sm:!text-base/5 !text-xs/4 w-full whitespace-nowrap`}
            >
              Join our community
            </Button>
            <Button
              variant={"whiteOutLined"}
              className={`sm:!text-base/5 !text-xs/4 sm:min-w-[173px] w-full`}
            >
              Let’s Talk
            </Button>
          </div>
        </div>
        <hr className="border-[#ECECEC]/50 sm:mt-[50px] sm:mb-12 my-5" />
        <div className="grid sm:grid-cols-3 gap-30px">
          <div className="order-2 sm:order-1">
            <h3 className="sm:text-xl_30 text-base/6 text-white font-semibold">
              Get in touch
            </h3>
            <ul className="sm:pt-6 pt-5 space-y-6 capitalize">
              <li className="flex items-center gap-2.5 group hover:text-white hover:translate-x-1.5 transition-all duration-300 cursor-pointer">
                <EnvelopeSimple
                  weight="fill"
                  className="sm:text-2xl text-base text-white"
                />
                <p className="sm:text-base/5 text-sm/4 text-white/80 group-hover:text-white transition-all duration-300">
                  help@thoughtpudding.com
                </p>
              </li>
              <li className="flex items-center gap-2.5 group hover:text-white hover:translate-x-1.5 transition-all duration-300 cursor-pointer">
                <Phone
                  weight="fill"
                  className="sm:text-2xl text-base text-white"
                />
                <p className="sm:text-base/5 text-sm/4 text-white/80 group-hover:text-white transition-all duration-300">
                  +91 2525 3636 96
                </p>
              </li>
              <li className="flex items-center gap-2.5 group hover:text-white hover:translate-x-1.5 transition-all duration-300 cursor-pointer">
                <MapPin
                  weight="fill"
                  className="sm:text-2xl text-base text-white"
                />
                <p className="sm:text-base/5 text-sm/4 max-w-[300px] text-white/80 group-hover:text-white transition-all duration-300">
                  84, 5th main road, Domlur, 56007184,{" "}
                </p>
              </li>
            </ul>
          </div>
          <div className="order-1 sm:order-2">
            <h3 className="sm:text-xl_30 text-base/6 text-white font-semibold">
              Company
            </h3>
            <ul className="sm:pt-6 pt-5 space-y-6 capitalize">
              <li className="flex items-center gap-2.5 text-white/80 sm:text-base/5 text-sm/4 cursor-pointer hover:text-white hover:translate-x-1.5 transition-all duration-300">
                Terms of use
              </li>
              <li className="flex items-center gap-2.5 text-white/80 sm:text-base/5 text-sm/4 cursor-pointer hover:text-white hover:translate-x-1.5 transition-all duration-300">
                Refund and cancellation policy
              </li>
              <li className="flex items-center gap-2.5 text-white/80 sm:text-base/5 text-sm/4 cursor-pointer hover:text-white hover:translate-x-1.5 transition-all duration-300">
                help and support
              </li>
              <li className="flex items-center gap-2.5 text-white/80 sm:text-base/5 text-sm/4 cursor-pointer hover:text-white hover:translate-x-1.5 transition-all duration-300">
                privacy policy
              </li>
            </ul>
          </div>
          <div className="order-3 flex flex-col items-center sm:block">
            <h3 className="sm:text-xl_30 text-base/6 text-white font-semibold">
              Follow us
            </h3>
            <div className="flex items-center gap-26px sm:pt-6 pt-4">
              <button className="sm:w-[42px] sm:h-[42px] w-[30px] sm:rounded-full sm:border border-white flex items-center justify-center text-white text-[22px] group relative overflow-hidden">
                <span className="group-hover:hidden">
                  <InstagramLogo weight="fill" />
                </span>
                <ArrowUpRight className="group-hover:visible invisible absolute translate-y-5 -translate-x-5 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:transition-all group-hover:duration-500" />
              </button>
              <button className="sm:w-[42px] sm:h-[42px] w-[30px] sm:rounded-full sm:border border-white flex items-center justify-center text-white text-[22px] group relative overflow-hidden">
                <span className="group-hover:hidden">
                  <RiFacebookCircleFill />
                </span>
                <ArrowUpRight className="group-hover:visible invisible absolute translate-y-5 -translate-x-5 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:transition-all group-hover:duration-500" />
              </button>
              <button className="sm:w-[42px] sm:h-[42px] w-[30px] sm:rounded-full sm:border border-white flex items-center justify-center text-white text-[22px] group relative overflow-hidden">
                <span className="group-hover:hidden">
                  <XLogo weight="fill" />
                </span>
                <ArrowUpRight className="group-hover:visible invisible absolute translate-y-5 -translate-x-5 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:transition-all group-hover:duration-500" />
              </button>
            </div>
          </div>
        </div>
        <p className="sm:text-base_30 text-xs/6 text-white/65 text-center sm:pt-[90px] pt-16 capitalize">
          Copyright © 2024 Thought Pudding. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
