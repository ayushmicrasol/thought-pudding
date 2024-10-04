"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import SettingLayout from "@/layout/dashboard/SettingLayout";
import { UserCircle } from "@phosphor-icons/react";
import Image from "next/image";
import React, { useState } from "react";

const ProfileInfo = () => {
  const [profileimage, setProfileImage] = useState(null);

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file)); // Create a URL for the image preview
    }
  };
  return (
    <SettingLayout>
      <div>
        <h1 className="text-xl_30 font-semibold text-primary">
          Personal Information
        </h1>
        <div className="grid grid-cols-7 gap-[62px] pt-6">
          <div className="col-span-4">
            <div className="space-y-5">
              <div>
                <label className="text-base_18 font-medium text-primary">
                  Name
                </label>
                <Input type={`text`} placeholder={`Enter Your Name`} />
              </div>
              <div>
                <label className="text-base_18 font-medium text-primary">
                  Email Address
                </label>
                <Input
                  type={`email`}
                  placeholder={`Enter Your Email Address`}
                />
              </div>
              <div>
                <label className="text-base_18 font-medium text-primary">
                  Phone Number
                </label>
                <Input type={`text`} placeholder={`Enter Your Phone Number`} />
              </div>
              <div>
                <label className="text-base_18 font-medium text-primary">
                  Address
                </label>
                <Input type={`text`} placeholder={`Enter Your Address`} />
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="max-w-[285px] w-full bg-green-600/10 py-6 rounded-base border border-green-600/20 flex flex-col items-center gap-4">
              <div className="w-[128px] h-[128px] bg-white rounded-full border-2 border-green-600/50 border-dashed flex items-center justify-center text-green-600">
                {/* Display the uploaded image or the UserCircle icon */}
                {profileimage ? (
                  <Image
                    src={profileimage}
                    width={400}
                    height={400}
                    alt="Profile Preview"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <div className="text-green-600">
                    <UserCircle size={50} weight="light" />
                  </div>
                )}
              </div>

              <div className="text-center text-xs_18 text-primary/50">
                <p>File types: .jpg, .png</p>
                <p className="pt-2">Image at least: 200px*200px</p>
              </div>

              {/* File input for uploading image */}
              <input
                type="file"
                accept=".jpg,.png"
                onChange={handleFileChange}
                id="fileUpload"
                style={{ display: "none" }}
              />

              {/* Button to trigger the file input */}
              {profileimage ? (
                <Button
                  onClick={() => document.getElementById("fileUpload").click()}
                  className="text-sm text-green-600 border border-green-600 py-2.5 px-5 bg-white rounded-full"
                >
                  Edit Profile
                </Button>
              ) : (
                <Button
                  onClick={() => document.getElementById("fileUpload").click()}
                  className="text-sm text-green-600 border border-green-600 py-2.5 px-5 bg-white rounded-full"
                >
                  Upload Profile
                </Button>
              )}
            </div>
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

export default ProfileInfo;
