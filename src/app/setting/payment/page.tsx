"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import SettingLayout from "@/layout/dashboard/SettingLayout";
import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";

const PaymentSetting = () => {
  return (
    <SettingLayout>
      <div>
        <h1 className="text-xl_30 font-semibold text-primary">Payment</h1>
        <div className="space-y-5 pt-6 max-w-[600px]">
          <div className="p-5 bg-yellow-100 rounded-base">
            <h2 className="text-base/6 font-semibold text-primary">
              Setup Payment Method
            </h2>
            <div className="pt-2">
              <label className="text-sm/5 font-medium text-primary">
                Enter VPA
              </label>
              <Input
                value=""
                onChange={() => {}}
                name="vpa"
                type={`text`}
                placeholder={`Enter Your Current Password`}
                mainClass={`bg-white`}
              />
            </div>
            <div className="inline-block">
              <label
                form="remender"
                className="flex items-center gap-2 cursor-pointer pt-5"
              >
                <input
                  type="checkbox"
                  name="remender"
                  className="w-4 h-4 accent-green-600 "
                />
                <p className="text-sm/5 text-primary">
                  Agree to term & conditions
                </p>
              </label>
            </div>
            <p className="flex items-strat gap-2 text-xs_18 text-primary pt-7">
              <RiErrorWarningLine className="min-w-4 h-4" />
              To confirm that your payment mode is all setup for upcoming money
              transfer, we will send Rs. 1 on the given VPA. Confirm once you
              receive. Thanks!
            </p>
            <div className="text-end pt-5">
              <Button variant="filled" className={`w-[144px]`}>
                Setup method
              </Button>
            </div>
          </div>
          <div className="p-5 bg-yellow-100 rounded-base">
            <h2 className="text-base/6 font-semibold text-primary">
              Setup Payments 2.0
            </h2>
            <div className="inline-block">
              <label
                form="payment"
                className="flex items-center gap-2 cursor-pointer pt-5"
              >
                <input
                  type="checkbox"
                  name="payment"
                  className="w-4 h-4 accent-green-600 "
                />
                <p className="text-sm/5 text-primary">Payment Link</p>
              </label>
              <p className="text-sm/5 text-primary pt-2">
                Phasing Out Soon. ⚠️Can&apos;t be enabled once Disabled
              </p>
            </div>
            <div className="inline-block">
              <label
                form="payment2"
                className="flex items-center gap-2 cursor-pointer pt-5"
              >
                <input
                  type="checkbox"
                  name="payment2"
                  className="w-4 h-4 accent-green-600 "
                />
                <p className="text-sm/5 text-primary">
                  Payment 2.0 (Payment Tracker)
                </p>
              </label>
              <p className="text-sm/5 text-primary pt-2">
                Check this box to track all your payments. Can&apos;t be
                disabled once Enabled Save
              </p>
            </div>
            <div className="text-end pt-5 ">
              <Button variant="filled" className={`w-[144px]`}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SettingLayout>
  );
};

export default PaymentSetting;
