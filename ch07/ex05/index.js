const seq = [1, 2, 3, 4, 5];

export const pop = (array) => {
  const newArray = [...array];
  newArray.pop();
  return newArray;
};

export const push = (array, element) => {
  const newArray = [...array];
  newArray.push(element);
  return newArray;
};

export const shift = (array) => {
  const newArray = [...array];
  newArray.shift();
  return newArray;
};

export const unshift = (array, element) => {
  const newArray = [...array];
  newArray.unshift(element);
  return newArray;
};

export const sort = (array, callback) => {
  const newArray = [...array];
  newArray.sort(callback);
  return newArray;
};

console.log(pop(seq)); // [1, 2, 3, 4]
console.log(push(seq, 6)); // [1, 2, 3, 4, 5, 6]
console.log(shift(seq)); // [2, 3, 4, 5]
console.log(unshift(seq, 0)); // [0, 1, 2, 3, 4, 5]
console.log(sort(seq, (a, b) => b - a)); // [5, 4, 3, 2, 1]

// 元の配列は変更されていない
console.log(seq); // [1, 2, 3, 4, 5]
