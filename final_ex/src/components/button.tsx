import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  type?: "normal" | "submit";
  children: ReactNode;
  className: string;
  onClick: () => void;
}

const Button = ({
  type = "normal",
  children,
  className,
  onClick,
}: ButtonProps) => {
  const mergedClassName = twMerge(
    className,
    type === "normal" && "bg-blue-500",
    type === "submit" && "bg-green-600",
    "text-white cursor-pointer text-sm px-4 py-2 rounded-md border-none"
  );
  return (
    <button className={mergedClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
