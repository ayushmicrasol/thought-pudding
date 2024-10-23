import { X } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../common/Input";
import SelectDropdown from "../common/SelectDropdown";
import Button from "../common/Button";
import {
  getClientById,
  putclientById,
  useGetTimeZone,
} from "@/services/clients.service";
import TimeZoneDrop from "./common/TimeZoneDrop";
import endpoints from "@/utils/endpoints";
import { fetcher } from "@/utils/axios";
import { mutate } from "swr";
const genderOption = ["male", "female", "others"];

interface ClientData {
  client: {
    name: string;
    phone: string;
    age: number;
    gender: string;
    defaultTimezone: string;
    isActive: boolean;
  };
}
const EditClientSidebar: React.FC<{
  isEditClient: boolean;
  setIsEditClient: (value: boolean) => void;
  singleClientById: string;
  query: string;
  // singleClientsData: any;
}> = ({
  isEditClient,
  setIsEditClient,
  singleClientById,
  query,
  // singleClientsData,
}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [clientData, setClientData] = useState<ClientData | null>(null);

    const { timeZoneData } = useGetTimeZone();

    // Initialize form with fetched data
    const formik = useFormik({
      enableReinitialize: true,
      initialValues: {
        name: clientData?.client?.name || "",
        phone: clientData?.client?.phone || "",
        age: clientData?.client?.age?.toString() || "", // Ensure age is a string
        gender: clientData?.client?.gender || "",
        defaultTimezone: clientData?.client?.defaultTimezone || "",
        isActive: clientData?.client?.isActive || true,
      },
      validationSchema: Yup.object({
        name: Yup.string().required("First name is required"),
        phone: Yup.string()
          .matches(/^[0-9]+$/, "Mobile number must be a number")
          .required("Mobile number is required"),
        age: Yup.string()
          .matches(/^[0-9]+$/, "Age must be a valid number")
          .required("Age is required"),
        gender: Yup.string().required("Gender is required"),
        defaultTimezone: Yup.string().required("Time Zone is required"),
      }),
      onSubmit: async (values) => {
        setIsSubmitting(true);
        try {
          await putclientById(singleClientById, values);
          console.log("Client updated successfully");
          setIsEditClient(false);

          const url = `${endpoints.clients.clients}?${query}`;

          mutate(url, async () => {
            // This callback can be used to fetch updated data if needed
            await fetcher(url);
          });
        } catch (error) {
          console.error("Error updating client:", error);
        } finally {
          setIsSubmitting(false);
        }
      },
    });

    useEffect(() => {
      async function fetchClientData() {
        if (singleClientById) {
          const response = await getClientById(singleClientById);
          setClientData(response);
          console.log(response, "singleClientsData......................");
        }
      }
      fetchClientData();
    }, [singleClientById]);

    useEffect(() => {
      if (isEditClient) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "auto";

      return () => {
        document.body.style.overflow = "auto";
      };
    }, [isEditClient]);

    // if (clientsLoading) return <div>Loading...</div>;

    return (
      <div
        className={`fixed w-full h-full bg-black/20 top-0 left-0 z-[999] ${isEditClient ? "visible" : "invisible"
          }`}
        onClick={() => setIsEditClient(false)}
      >
        <div
          className={`max-w-[416px] w-full bg-white absolute top-0 right-0 h-full transition-all duration-300 ${isEditClient ? "translate-x-0" : "translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative h-screen flex flex-col">
            {/* side bar header */}
            <div className="px-5 py-3.5 shadow-[0px_4px_12px_0px_#0000000F] flex justify-between items-center">
              <h3 className="text-lg font-medium text-[#242424]">Edit Client</h3>
              <button onClick={() => setIsEditClient(false)}>
                <X size={20} />
              </button>
            </div>

            {/* content */}
            <div className="flex-1 p-5 overflow-y-auto">
              <form
                onSubmit={formik.handleSubmit}
                className="grid grid-cols-2 gap-5"
              >
                <div>
                  <label className="text-sm/5 text-primary font-medium">
                    First Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter First Name"
                    {...formik.getFieldProps("name")}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.name}
                    </div>
                  ) : null}
                </div>
                {/* <div>
                <label className="text-sm/5 text-primary font-medium">
                  Last Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter Last Name"
                  {...formik.getFieldProps("last_name")}
                />
                {formik.touched.last_name && formik.errors.last_name ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.last_name}
                  </div>
                ) : null}
              </div> */}
                <div className="col-span-2">
                  <label className="text-sm/5 text-primary font-medium">
                    Mobile Number
                  </label>
                  <Input
                    type="number"
                    placeholder="Enter Number"
                    {...formik.getFieldProps("phone")}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.phone}
                    </div>
                  ) : null}
                </div>
                <div>
                  <label className="text-sm/5 text-primary font-medium">
                    Age
                  </label>
                  <Input
                    type="text" // Change to text to keep it as a string
                    placeholder="Enter Age"
                    {...formik.getFieldProps("age")}
                  />
                  {formik.touched.age && formik.errors.age ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.age}
                    </div>
                  ) : null}
                </div>
                <div>
                  <label className="text-sm/5 text-primary font-medium">
                    Gender
                  </label>
                  <SelectDropdown
                    options={genderOption}
                    value={formik.values.gender}
                    onChange={(value: unknown) =>
                      formik.setFieldValue("gender", value as string)
                    }
                    placeholder="Select ..."
                  />
                  {formik.touched.gender && formik.errors.gender ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.gender}
                    </div>
                  ) : null}
                </div>
                {/* <div className="col-span-2">
                <label className="text-sm/5 text-primary font-medium">
                  Default Payment Amount
                </label>
                <Input
                  type="number"
                  placeholder="0"
                  icon="rup"
                  {...formik.getFieldProps("amount")}
                />
                {formik.touched.amount && formik.errors.amount ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.amount}
                  </div>
                ) : null}
              </div> */}
                <div className="col-span-2">
                  <label className="text-sm/5 text-primary font-medium">
                    Default Time Zone
                  </label>
                  <TimeZoneDrop
                    options={timeZoneData}
                    value={formik.values.defaultTimezone}
                    onChange={(value) =>
                      formik.setFieldValue("defaultTimezone", value.value)
                    }
                    placeholder="Select ..."
                  />
                  {formik.touched.defaultTimezone &&
                    formik.errors.defaultTimezone ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.defaultTimezone}
                    </div>
                  ) : null}
                </div>
                <div className="col-span-2">
                  <p className="text-sm/5 text-primary font-medium">
                    Client Status
                  </p>
                  <div className="flex items-center gap-5 pt-2">
                    <label className="flex items-center gap-1.5 text-xs text-primary">
                      <input
                        type="radio"
                        name="isActive"
                        value="true" // Set value to string "true"
                        checked={formik.values.isActive === true} // Check against boolean
                        onChange={() => formik.setFieldValue("isActive", true)} // Set as boolean
                        className="w-3.5 h-3.5"
                      />
                      Active
                    </label>
                    <label className="flex items-center gap-1.5 text-xs text-primary">
                      <input
                        type="radio"
                        name="isActive"
                        value="false" // Set value to string "false"
                        checked={!formik.values.isActive}
                        // Check against boolean
                        onChange={() => formik.setFieldValue("isActive", false)} // Set as boolean
                        className="w-3.5 h-3.5"
                      />
                      Inactive
                    </label>
                  </div>
                </div>
              </form>
            </div>

            {/* side bar footer */}
            <div className="bg-white shadow-[0px_4px_43.4px_0px_#0000001A] px-5 py-2.5 grid grid-cols-2 gap-5 z-10">
              <Button
                onClick={() => setIsEditClient(false)}
                variant="outlinedGreen"
              >
                Cancel
              </Button>
              <Button
                onClick={formik.handleSubmit}
                variant="filledGreen"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default EditClientSidebar;
