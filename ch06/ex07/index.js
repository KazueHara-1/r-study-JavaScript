export const assign = (obj1, obj2) => {
  for (const prop in obj2) {
    obj1[prop] = obj2[prop];
  }
};
