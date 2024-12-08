"use client";

import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: ReactNode;
  className: string;
  onClick: () => void;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  const mergedClassName = twMerge(
    className,
    "bg-blue-500 text-white cursor-pointer text-sm px-4 py-2 rounded-md border-none"
  );
  return (
    <button className={mergedClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
