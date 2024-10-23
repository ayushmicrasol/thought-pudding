"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import SettingLayout from "@/layout/dashboard/SettingLayout";
import { UserCircle } from "@phosphor-icons/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  updateSettingData,
  uploadProfileImage,
  useGetSettingData,
} from "@/services/setting.service";

const ProfileInfo = () => {
  const [profileimage, setProfileImage] = useState<string | null>(null);

  // Handle file input change
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files; // Store files in a variable
    if (files && files.length > 0) {
      // Check if files is not null and has at least one file
      const file = files[0];
      setProfileImage(URL.createObjectURL(file)); // Create a URL for the image preview

      console.log(file, "file............................");

      const formData = new FormData();

      formData.append("upload", file);

      // Send the formData to the API
      try {
        const res = await uploadProfileImage(formData);
        console.log(res, "res.............................");
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  // get payment activity data
  const { therapistData } = useGetSettingData();

  console.log(therapistData, "therapistData");

  // Define formik for form handling
  const formik = useFormik({
    initialValues: {
      name: therapistData?.name || "",
      email: therapistData?.email || "",
      phone: therapistData?.phone || "",
      address: therapistData?.address || "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      address: Yup.string().required("Address is required"),
    }),
    onSubmit: async (values) => {
      console.log("Form Data:", values);
      try {
        const response = await updateSettingData(values); // Use the updated function
        console.log("API Response:", response);
      } catch (error) {
        console.error("Error updating settings:", error);
      }
    },
  });

  // Update form values when therapistData is available
  useEffect(() => {
    if (therapistData) {
      formik.setValues({
        name: therapistData.name || "",
        email: therapistData.email || "",
        phone: therapistData.phone || "",
        address: therapistData.address || "",
      });

      setProfileImage(therapistData?.profilePhoto);
    }
  }, [therapistData]);

  return (
    <SettingLayout>
      <div>
        <h1 className="text-xl_30 font-semibold text-primary">
          Personal Information
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-7 gap-[62px] pt-6">
            <div className="col-span-4">
              <div className="space-y-5">
                <div>
                  <label className="text-base_18 font-medium text-primary">
                    Name
                  </label>
                  <Input
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    name="name"
                    type="text"
                    placeholder="Enter Your Name"
                  />
                  {formik.errors.name && formik.touched.name && (
                    <p className="text-red-500">
                      {formik.errors.name.toString()}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-base_18 font-medium text-primary">
                    Email Address
                  </label>
                  <Input
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    name="email"
                    type="email"
                    placeholder="Enter Your Email Address"
                  />
                  {formik.errors.email && formik.touched.email && (
                    <p className="text-red-500">
                      {formik.errors.email.toString()}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-base_18 font-medium text-primary">
                    Phone Number
                  </label>
                  <Input
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    name="phone"
                    type="text"
                    placeholder="Enter Your Phone Number"
                  />
                  {formik.errors.phone && formik.touched.phone && (
                    <p className="text-red-500">
                      {formik.errors.phone.toString()}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-base_18 font-medium text-primary">
                    Address
                  </label>
                  <Input
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    name="address"
                    type="text"
                    placeholder="Enter Your Address"
                  />
                  {formik.errors.address && formik.touched.address && (
                    <p className="text-red-500">
                      {formik.errors.address.toString()}
                    </p>
                  )}
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
                    onClick={() => {
                      const fileUpload = document.getElementById("fileUpload");
                      if (fileUpload) fileUpload.click();
                    }}
                    className="text-sm text-green-600 border border-green-600 py-2.5 px-5 bg-white rounded-full"
                  >
                    Edit Profile
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      const fileUpload = document.getElementById("fileUpload");
                      if (fileUpload) fileUpload.click();
                    }}
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
        </form>
      </div>
    </SettingLayout>
  );
};

export default ProfileInfo;
