import React from "react";

const Button = ({ variant, children, className, ...props }) => {
  const baseStyles =
    "py-[15px] px-5 border border-blue-600 rounded-full text-sm/4 capitalize transition-all duration-300";

  const variants = {
    default: `${baseStyles} bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white`,
    outlined: `${baseStyles} bg-blue-600/5 text-blue-600 hover:bg-blue-600 hover:text-white`,
    filled: `${baseStyles} bg-blue-600 text-white`,
  };

  return (
    <button
      className={`${variants[variant]} ${className}`} // Ensure className is correctly merged
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
