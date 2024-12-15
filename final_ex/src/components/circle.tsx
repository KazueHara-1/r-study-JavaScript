import React, { ReactElement } from "react";

interface CircleProps {
  percent: number;
  children: ReactElement;
}

const Circle = ({ percent, children }: CircleProps) => {
  const deg = (percent / 100) * 360;
  return (
    <div
      id="dynamic-circle"
      className="relative w-[200px] h-[200px] rounded-[50%] before:absolute before:w-[140px] before:h-[140px] before:bg-white before:rounded-[50%] before:left-[30px] before:top-[30px] flex justify-center items-center"
      style={{
        backgroundImage: `conic-gradient(#00BFFF 0deg ${deg}deg, lightgray ${deg}deg 360deg)`,
      }}
    >
      <span className="z-10">{children}</span>
    </div>
  );
};

export default Circle;
