import React, { useEffect, useRef } from "react";

interface DropdownProps {
  className?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  className,
  children,
  isOpen,
  setIsOpen,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <div
      ref={dropdownRef}
      className={`absolute top-14 right-0  rounded-base shadow-[0px_0px_6px_0px_#00000033] bg-white transition-all duration-200 ${className} ${
        isOpen
          ? "visible opacity-100 translate-y-0"
          : "invisible opacity-0 -translate-y-5"
      }`}
    >
      {children}
    </div>
  );
};

export default Dropdown;
