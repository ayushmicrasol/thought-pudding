"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import SettingLayout from "@/layout/dashboard/SettingLayout";
import {
  paymentMenuUpdate,
  therapistVpaUpdate,
  useGetSettingData,
} from "@/services/setting.service";
import React, { useEffect, useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";

const PaymentSetting = () => {
  const [vpa, setVpa] = useState(""); // State for VPA input
  const [agreed, setAgreed] = useState(false); // State for checkbox
  const [paymentGateway, setPaymentGateway] = useState(false); // State for Payment Link checkbox
  const [paymentTracker, setPaymentTracker] = useState(false); // State for Payment 2.0 checkbox

  // get payment activity data
  const { therapistData } = useGetSettingData();

  console.log(therapistData, "therapistData");

  console.log(vpa, "vpa.............");
  console.log(agreed, "agreed.............");

  type PaymentMenuFormData = {
    get(key: string): string | null;
    append(key: string, value: string): void;
  };

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setAgreed((prev) => !prev); // Toggle the checkbox state
  };

  // Function to handle payment setup
  const setupPaymentMethod = async () => {
    const formData = new FormData();
    formData.append("vpa", vpa); // Append VPA to FormData

    try {

      // Replace the URL with your actual API endpoint
      const response = await therapistVpaUpdate(formData as PaymentMenuFormData);
      console.log(response.data);
    } catch (error) {
      console.error("Error setting up payment method:", error);
    }
  };

  // Function to handle saving settings
  const setUpPaymentsSecond = async () => {
    try {
      const formData = new FormData();
      formData.append("paymentGateway", paymentGateway.toString()); // Append payment link status
      formData.append("paymentTracker", paymentTracker.toString()); // Append payment tracker status

      // Replace with your actual API endpoint
      const response = await paymentMenuUpdate(formData as PaymentMenuFormData);

      console.log(response.data);
    } catch (error) {
      console.log(error, "error...............");
    }
  };

  useEffect(() => {
    if (therapistData) {
      setVpa(therapistData?.bankDetails?.upiId);
      setPaymentGateway(therapistData?.menus?.paymentGateway);
      setPaymentTracker(therapistData?.menus?.paymentTracker);
    }
  }, [therapistData]);

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
                value={vpa}
                onChange={(e) => setVpa(e.target.value)}
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
                  className="w-4 h-4 accent-green-600"
                  checked={agreed}
                  onChange={handleCheckboxChange}
                />
                <p className="text-sm/5 text-primary">
                  Agree to terms & conditions
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
              <Button
                disabled={!(agreed && vpa)}
                variant="filled"
                className={`w-[144px]`}
                onClick={setupPaymentMethod}
              >
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
                  checked={paymentGateway}
                  onChange={(e) => setPaymentGateway(e.target.checked)} // Handle checkbox change
                  disabled={true}
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
                  checked={paymentTracker}
                  onChange={(e) => setPaymentTracker(e.target.checked)} // Handle checkbox change
                  disabled={therapistData?.menus?.paymentTracker}
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
              <Button
                variant="filled"
                className={`w-[144px]`}
                onClick={setUpPaymentsSecond}
              >
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
