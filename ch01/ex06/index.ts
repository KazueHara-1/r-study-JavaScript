// 無限和となりそうなので一旦マイナスの入力は考えないものとしました

import { sum } from "../ex05/index.ts";

export const fib = (inputNum: number): number => {
  if (inputNum <= 0) {
    throw new Error("input must be positive value.");
  } else if (!Number.isInteger(inputNum)) {
    throw new Error("input value must be integer.");
  } else if (inputNum === 1 || inputNum === 2) {
    return 1;
  }

  let nums = [0, 1];
  for (let i = 0; i < inputNum - 1; i++) {
    const nextNum = sum(nums[0], nums[1]);
    nums = [nums[1], nextNum];
  }
  return nums[1];
};
