import { X } from "@phosphor-icons/react";
import React, { useEffect } from "react";

const SessionDetailModal = ({ title, children, isClose, setIsClose }) => {
  // stop body scrollig
  useEffect(() => {
    document.body.style.overflow = isClose ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isClose]);
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black/20 z-[999] flex items-center justify-center transition-all duration-300 ${
        isClose ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`max-w-[427px] w-full transition-all duration-500 ${
          isClose ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="p-30px bg-white rounded-[10px] w-full">
          <div className="text-right">
            <button onClick={() => setIsClose(false)}>
              <X size={20} />
            </button>
          </div>
          <div className="text-center pt-3">
            <h4 className="text-base/6 text-primary font-semibold">{title}</h4>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionDetailModal;
