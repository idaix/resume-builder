"use client";

import clsx from "clsx";

interface ButtonProps {
  label: string;
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
  fullWidth?: boolean;
  bg?: "primary" | "secondary";
  size?: "large" | "medium";
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  onClick,
  fullWidth,
  bg,
  size,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
    return null;
  };
  return (
    <button
      onClick={handleClick}
      type={type}
      className={clsx(
        `
        rounded-xl
        border
        border-transparent
        outline-none
        duration-300
        font-semibold
        `,

        bg === "primary" && "bg-blue-700 text-white hover:bg-blue-800",
        bg === "secondary" && "bg-gray-200 text-gray-500 hover:bg-gray-300",
        !size && "py-1 px-3",
        size === "large" && "py-3 px-6 text-sm",
        fullWidth ? " w-full" : "w-fit"
      )}
    >
      {label}
    </button>
  );
};

export default Button;
