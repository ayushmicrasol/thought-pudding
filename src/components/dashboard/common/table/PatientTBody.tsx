import Link from "next/link";
import { PencilSimple } from "@phosphor-icons/react";
import React from "react";
import Image from "next/image";

interface PatientTBodyProps {
  TableData: Array<unknown>;
  clientsLoading: boolean;
  setIsEditClient: (value: boolean) => void;
  isEditClient: boolean;
  setSingleClientById: (id: string) => void;
}

interface Item {
  img?: string;
  name?: string;
  email?: string;
  phone?: string;
  completedSchedules?: number;
  time?: string;
  isActive?: boolean;
  _id?: string;
}

const PatientTBody: React.FC<PatientTBodyProps> = ({
  TableData,
  clientsLoading,
  setIsEditClient,
  isEditClient,
  setSingleClientById,
}) => {
  const renderSkeletonRow = (key: number) => (
    <tr key={key}>
      <td className="p-15px">
        <div className="flex items-center gap-3 animate-pulse">
          <div className="w-[34px] h-[34px] rounded-full bg-gray-200"></div>
          <div>
            <div className="h-4 bg-gray-200 rounded w-24 mb-1"></div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>
        </div>
      </td>
      {Array(4)
        .fill("")
        .map((_, idx) => (
          <td key={idx} className="p-15px">
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
          </td>
        ))}
      <td className="p-15px">
        <div className="flex gap-5">
          <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
        </div>
      </td>
    </tr>
  );

  return (
    <tbody className="divide-y divide-primary/10">
      {clientsLoading ? (
        Array(5)
          .fill("")
          .map((_, index) => renderSkeletonRow(index)) // Render 5 skeleton rows
      ) : TableData.length > 0 ? (
        (TableData as Item[]).map((item, index) => (
          <tr key={item._id || index}>
            <td className="p-15px">
              <div className="flex items-center gap-3">
                <div className="w-[34px] h-[34px] rounded-full border border-primary/20 bg-[#F5F5F7] overflow-hidden flex items-center justify-center">
                  <span className="text-xs_18 text-[#72748D] font-medium uppercase">
                    {item?.name &&
                      item.name
                        .split(" ")
                        .map((n) => n.charAt(0))
                        .join("")}
                  </span>
                </div>
                <div>
                  <p className="text-sm/5 font-semibold text-primary capitalize">
                    {item.name}
                  </p>
                  <p className="text-xs_18 text-primary/70 font-medium">
                    {item.email}
                  </p>
                </div>
              </div>
            </td>
            <td className="p-15px text-primary/70 text-sm/5 font-medium">
              {item.phone ? `+${item.phone}` : "-"}
            </td>
            <td className="p-15px text-primary text-sm/5 font-semibold">
              {item.completedSchedules} Session
            </td>
            <td className="p-15px">
              <span
                className={`inline-block py-1.5 px-3 rounded-full text-sm/5 ${
                  item.isActive === false
                    ? "bg-[#FFEDED] text-[#FF5959]"
                    : "bg-green-200 text-green-500"
                }`}
              >
                {item.isActive === false ? "Inactive" : "Active"}
              </span>
            </td>
            <td className="p-15px">
              <div className="flex items-center gap-6 text-sm/6 font-medium">
                <Link
                  href={`/payment?client=${item?._id}`}
                  className="text-green-600 underline"
                >
                  View Payment
                </Link>
                <Link
                  href={`/session?client=${item?._id}`}
                  className="text-green-600 underline"
                >
                  View Session
                </Link>
              </div>
            </td>
            <td className="p-15px">
              <div className="flex items-center gap-5">
                <PencilSimple
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => {
                    setIsEditClient(!isEditClient);
                    if (item?._id) {
                      setSingleClientById?.(item._id);
                    }
                  }}
                />
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={6} className="p-15px text-center text-primary/70">
            <div className="flex flex-col items-center justify-center pt-16 pb-20">
              <Image
                width={1000}
                height={1000}
                src="/assets/images/dashboard/not-found-client--list.webp"
                alt="no-data"
                className="w-[221px] h-auto"
              />
              <p className="text-xl/6 font-bold pt-7.5 text-primary">
                No Clients Yet! Start <br /> Connecting
              </p>
            </div>
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default PatientTBody;
