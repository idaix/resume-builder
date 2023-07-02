"use client";

import clsx from "clsx";
import { url } from "inspector";
import { useRouter } from "next/navigation";

interface ButtonProps {
  label: string;
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
  fullWidth?: boolean;
  bg?: "primary" | "secondary" | "gradient";
  size?: "large" | "medium";
  asLink?: boolean;
  href?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  onClick,
  fullWidth,
  bg,
  size,
  asLink,
  href,
  className,
}) => {
  const router = useRouter();
  const handleClick = () => {
    if (asLink && href) {
      router.push(href);
    }
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
        transition
        active:scale-95
        focus:scale-95
        `,

        bg === "primary" && "bg-blue-700 text-white hover:bg-blue-800",
        bg === "secondary" && "bg-gray-200 text-gray-500 hover:bg-gray-300",
        bg === "gradient" &&
          "bg-gradient-to-tr from-fuchsia-500 to-orange-400 text-white hover:bg-gradient-to-t",
        !size && "py-1 px-3",
        size === "large" && "py-3 px-6 text-sm",
        fullWidth ? " w-full" : "w-fit",
        className
      )}
    >
      {label}
    </button>
  );
};

export default Button;
