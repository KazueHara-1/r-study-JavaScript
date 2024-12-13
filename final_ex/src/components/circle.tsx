import React, { ReactElement } from "react";

interface CircleProps {
  children: ReactElement;
}

const Circle = ({ children }: CircleProps) => {
  return (
    <div className="relative w-[200px] h-[200px] bg-[conic-gradient(#FFE013_0deg_135deg,#91D4E1_135deg_180deg,#0B62D4_180deg_360deg)] rounded-[50%] before:absolute before:w-[140px] before:h-[140px] before:bg-white before:rounded-[50%] before:left-[30px] before:top-[30px] flex justify-center items-center">
      <span className="z-10">{children}</span>
    </div>
  );
};

export default Circle;
