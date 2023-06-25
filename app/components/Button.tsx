"use client";

import clsx from "clsx";

interface ButtonProps {
  label: string;
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  onClick,
  fullWidth,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick;
    }
    return null;
  };
  return (
    <button
      onClick={handleClick}
      type={type}
      className={clsx(
        `
        rounded-lg
        border
        border-transparent
        outline-none
        duration-300
        py-3 
        px-6
        font-semibold
        bg-blue-700
        text-white

        hover:bg-blue-800
        
        `,
        fullWidth ? " w-full" : "w-fit"
      )}
    >
      {label}
    </button>
  );
};

export default Button;
