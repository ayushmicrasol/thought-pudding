import React from "react";

const Button = ({ variant, children, className, ...props }) => {
  const baseStyles =
    "sm:py-[15px] py-3.5 px-5 rounded-full text-sm/4 font-medium capitalize transition-all duration-300 hover:-translate-y-[2px]";

  const variants = {
    default: `${baseStyles} border border-yellow-600 bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white`,
    outlined: `${baseStyles} border border-yellow-600 bg-yellow-600/5 text-yellow-600 hover:bg-yellow-600 hover:text-white`,
    filled: `${baseStyles} bg-yellow-600 text-white hover:bg-green-600 hover:shadow-[0px_2px_4px_0px_#2A5F6166]`,
    filledGreen: `${baseStyles} bg-green-600 text-white hover:bg-yellow-600 hover:shadow-[0px_2px_4px_0px_#C5884366]`,
    whiteLined: `${baseStyles} border border-white bg-transparent text-white hover:bg-white hover:text-green-600`,
    whiteOutLined: `${baseStyles} border border-white bg-white text-green-600 hover:shadow-[0px_2px_4px_0px_#FFFFFF66]`,
  };

  return (
    <button className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
