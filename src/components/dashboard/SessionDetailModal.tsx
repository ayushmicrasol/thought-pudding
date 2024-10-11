import { X } from "@phosphor-icons/react";
import React, { useEffect } from "react";

interface SessionDetailModalProps {
  setIsClose: (value: boolean) => void; // Adjust the type as necessary
  className?: string; // Explicitly define className as optional string
  title: string;
  children: React.ReactNode;
  isClose: boolean;
}

const SessionDetailModal: React.FC<SessionDetailModalProps> = ({
  title,
  children,
  isClose,
  setIsClose,
  className,
}) => {
  useEffect(() => {
    document.body.style.overflow = isClose ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // Ensure this returns void
    };
  }, [isClose]);
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black/20 z-[999] flex items-center justify-center transition-all duration-300 ${
        isClose ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`max-w-[578px] w-full transition-all duration-500 ${className} ${
          isClose ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="p-6 bg-white rounded-[10px] w-full">
          <div className="">
            <div className="flex items-center justify-between">
              <h4 className="text-base/6 text-primary font-semibold">
                {title}
              </h4>
              <button onClick={() => setIsClose(!isClose)}>
                <X size={20} />
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionDetailModal;
