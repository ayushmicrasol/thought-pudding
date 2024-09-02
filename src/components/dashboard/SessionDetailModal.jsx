import { X } from "@phosphor-icons/react";
import React from "react";

const SessionDetailModal = ({ title, children, onClose }) => {
  return (
    <div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[427px] w-full">
        <div className="p-30px bg-white rounded-[10px] w-full">
          <div className="text-right">
            <button onClick={onClose}>
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
