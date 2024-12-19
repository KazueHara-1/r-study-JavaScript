import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  type?: "normal" | "submit";
  children: ReactNode;
  className?: string;
  onClick: () => void;
  startIcon?: ReactNode;
}

const Button = ({
  type = "normal",
  children,
  className,
  onClick,
  startIcon,
}: ButtonProps) => {
  const mergedClassName = twMerge(
    className,
    type === "normal" && "bg-blue-500",
    type === "submit" && "bg-green-600",
    startIcon && "flex items-center",
    "text-white text-sm px-4 py-2 rounded-md border-none gap-2"
  );
  return (
    <button className={mergedClassName} onClick={onClick}>
      {startIcon}
      <p>{children}</p>
    </button>
  );
};

export default Button;
