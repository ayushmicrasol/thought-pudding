import Link from "next/link";
import { PencilSimple } from "@phosphor-icons/react";

const PatientTBody = ({ TableData, setIsEditSession, isEditSession }) => {
  return (
    <tbody className="divide-y divide-primary/10">
      {TableData?.map((item, index) => {
        return (
          <tr key={index}>
            <td className="p-15px">
              <div className="flex items-center gap-3 ">
                <div className="w-[34px] h-[34px] rounded-full border border-primary/20 bg-[#F5F5F7] overflow-hidden flex items-center justify-center">
                  {item.img ? (
                    <img src={item.img} alt="" className="w-full h-full" />
                  ) : (
                    <span className="text-xs_18 text-[#72748D] font-medium">
                      {item.name
                        .split(" ")
                        .map((n) => n.charAt(0))
                        .join("")}
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-sm/5 font-semibold text-primary">
                    {item.name}
                  </p>
                  <p className="text-xs_18 text-primary/70 font-medium">
                    {item.email}
                  </p>
                </div>
              </div>
            </td>
            <td className="p-15px text-primary/70 text-sm/5 font-medium">
              +{item.number}
            </td>
            <td className="p-15px text-primary text-sm/5 font-semibold">
              {item.session} Session
            </td>
            <td className="p-15px">
              <span
                className={`inline-block py-1.5 px-3  rounded-full text-sm/5 ${
                  item.status.trim() === "Completed"
                    ? "bg-green-200 text-green-500"
                    : item.status.trim() === "Upcoming"
                    ? "bg-orange-200 text-orange-600"
                    : item.status.trim() === "Cancelled"
                    ? "bg-[#FFEDED] text-[#FF5959]"
                    : ""
                }`}
              >
                {item.status}
              </span>
            </td>

            <td className="p-15px">
              <div className="flex items-center gap-6 text-sm/6 font-medium">
                <Link href={`/payment`} className="text-green-600 underline">
                  View Payment
                </Link>
                <Link href={`/session`} className="text-green-600 underline">
                  View Session
                </Link>
              </div>
            </td>
            <td className="p-15px">
              <div className="flex items-center gap-5">
                <PencilSimple
                  className="w-5 h-5 cursor-pointer"
                  pathFillColor="#242424"
                  onClick={() => setIsEditSession(!isEditSession)}
                />
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default PatientTBody;
