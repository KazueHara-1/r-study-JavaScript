import React, { ReactElement } from "react";

interface CircleProps {
  isBreak: boolean;
  percent: number;
  children: ReactElement;
}

const Circle = ({ isBreak, percent, children }: CircleProps) => {
  const deg = percent * 360;
  if (isBreak) {
    return (
      <div
        id="dynamic-circle"
        className="relative w-[200px] h-[200px] rounded-[50%] before:absolute before:w-[140px] before:h-[140px] before:bg-white before:rounded-[50%] before:left-[30px] before:top-[30px] flex justify-center items-center"
        style={{
          backgroundImage: `conic-gradient(#F08080 0deg ${deg}deg, lightgray ${deg}deg 360deg)`,
        }}
      >
        <span className="z-10">{children}</span>
      </div>
    );
  }
  if (percent < 1) {
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
  }
  return (
    <div
      id="dynamic-circle"
      className="relative w-[200px] h-[200px] rounded-[50%] before:absolute before:w-[140px] before:h-[140px] before:bg-white before:rounded-[50%] before:left-[30px] before:top-[30px] flex justify-center items-center"
      style={{
        backgroundImage: `conic-gradient(#28a745 0deg 360deg)`,
      }}
    >
      <span className="z-10">{children}</span>
    </div>
  );
};

export default Circle;
