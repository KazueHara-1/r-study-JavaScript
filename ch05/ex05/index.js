export const returnEven = (obj) => {
  const returnObj = {};
  for (const prop in obj) {
    if (obj[prop] % 2 === 0) {
      returnObj[prop] = obj[prop];
    }
  }
  return returnObj;
};
