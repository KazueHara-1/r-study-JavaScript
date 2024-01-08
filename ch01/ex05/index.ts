export const abs = (inputNum: number): number => {
  if (inputNum >= 0) {
    return inputNum;
  }
  return inputNum * -1;
};

export const sum = (addNum_1: number, addNum_2: number): number => {
  return addNum_1 + addNum_2;
};

export const factorial = (inputNum: number): number => {
  if (inputNum < 0) {
    throw new Error("input must be positive value.");
  } else if (!Number.isInteger(inputNum)) {
    throw new Error("input value must be integer.");
  } else if (inputNum === 0 || inputNum === 1) {
    return 1;
  }
  return inputNum * factorial(inputNum - 1);
};
