import { abs } from "../../ch01/ex05/index.ts";

export const checkNumberEquivalence = (
  num_1: number,
  num_2: number
): boolean => {
  return abs(num_1 - num_2) < 10e-10;
};
