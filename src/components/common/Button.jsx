import React from "react";

const Button = ({ variant, children, className, ...props }) => {
  const baseStyles =
    "sm:py-[15px] py-3.5 px-5 rounded-full text-sm/4 font-medium capitalize transition-all duration-300 hover:-translate-y-[2px]";

  const variants = {
    default: `${baseStyles} border border-blue-600 bg-white text-blue-600 hover:bg-blue-600 hover:text-white`,
    outlined: `${baseStyles} border border-blue-600 bg-blue-600/5 text-blue-600 hover:bg-blue-600 hover:text-white`,
    filled: `${baseStyles} border border-blue-600 bg-blue-600 text-white hover:shadow-[0px_2px_4px_0px_#2C58BB66]`,
    whiteLined: `${baseStyles} border border-white bg-transparent text-white hover:bg-white hover:text-blue-600`,
    whiteOutLined: `${baseStyles} border border-white bg-white text-blue-600 hover:shadow-[0px_2px_4px_0px_#FFFFFF66]`,
  };

  return (
    <button className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
