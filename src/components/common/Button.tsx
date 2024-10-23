import React from "react";

const Button: React.FC<{
  variant?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  [key: string]: unknown;
}> = ({ variant = "default", children, className, disabled, ...props }) => {
  const baseStyles =
    "sm:py-[15px] py-3.5 px-5 rounded-full text-sm/4 font-medium capitalize transition-all duration-300 hover:-translate-y-[2px]";

  // Styles for when the button is disabled
  const disabledStyles = "opacity-50 cursor-not-allowed";

  const variants: { [key: string]: string } = {
    default: `${baseStyles} border border-yellow-600 bg-white text-yellow-600 ${
      disabled ? disabledStyles : "hover:bg-yellow-600 hover:text-white"
    }`,
    outlined: `${baseStyles} border border-yellow-600 bg-yellow-600/5 text-yellow-600 ${
      disabled ? disabledStyles : "hover:bg-yellow-600 hover:text-white"
    }`,
    outlinedGreen: `${baseStyles} border border-green-600 bg-green-600/5 text-green-600 ${
      disabled ? disabledStyles : "hover:bg-green-600 hover:text-white"
    }`,
    lightGreen: `${baseStyles} bg-green-600/10 text-green-600 ${
      disabled
        ? disabledStyles
        : "hover:bg-yellow-600/10 hover:shadow-[0px_2px_4px_0px_#C5884366]"
    }`,
    filled: `${baseStyles} bg-yellow-600 text-white ${
      disabled
        ? disabledStyles
        : "hover:bg-green-600 hover:shadow-[0px_2px_4px_0px_#2A5F6166]"
    }`,
    filledGreen: `${baseStyles} bg-green-600 text-white ${
      disabled
        ? disabledStyles
        : "hover:bg-yellow-600 hover:shadow-[0px_2px_4px_0px_#C5884366]"
    }`,
    whiteLined: `${baseStyles} border border-white bg-transparent text-white ${
      disabled ? disabledStyles : "hover:bg-white hover:text-green-600"
    }`,
    whiteOutLined: `${baseStyles} border border-white bg-white text-green-600 ${
      disabled ? disabledStyles : "hover:shadow-[0px_2px_4px_0px_#FFFFFF66]"
    }`,
  };

  return (
    <button className={` ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
