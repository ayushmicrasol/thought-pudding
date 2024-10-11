"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import SettingLayout from "@/layout/dashboard/SettingLayout";
import React from "react";

const PasswordSetting = () => {
  return (
    <SettingLayout>
      <div>
        <h1 className="text-xl_30 font-semibold text-primary">Password</h1>
        <div className="space-y-5 pt-6 max-w-[600px]">
          <div>
            <label className="text-base_18 font-medium text-primary">
              Current Password 
            </label>
            <Input
              value=""
              onChange={() => {}}
              name="currentPassword"
              type={`password`}
              placeholder={`Enter Your Current Password`}
            />
          </div>
          <div>
            <label className="text-base_18 font-medium text-primary">
              New Password *
            </label>
            <Input
              value=""
              onChange={() => {}}
              name="newPassword"
              type={`password`}
              placeholder={`Enter Your New Password`}
            />
          </div>
          <div>
            <label className="text-base_18 font-medium text-primary">
              Re-Enter new password
            </label>
            <Input
              value=""
              onChange={() => {}}
              name="reEnterPassword"
              type={`text`}
              placeholder={`Re-Enter Your new password`}
            />
          </div>
        </div>
        <div className="flex items-center w-[274px] gap-3.5 pt-8.5">
          <Button variant="filled" className={`w-full`}>
            Save
          </Button>
          <Button variant="default" className={`w-full`}>
            Cancel
          </Button>
        </div>
      </div>
    </SettingLayout>
  );
};

export default PasswordSetting;
