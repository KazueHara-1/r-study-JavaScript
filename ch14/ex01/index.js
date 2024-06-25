export const nestedUnwritableObj = () => {
  const obj = { c: { d: { e: 3 } } };
  Object.seal(obj.c.d.e);
  Object.seal(obj.c.d);
  Object.seal(obj.c);
  Object.seal(obj);
  return obj;
};
export const unwritableAndUnconfigurableObj = () => {
  const obj = { a: 1 };
  Object.freeze(obj);
  return obj;
};
export const writableAndUnconfigurableObj = () => {
  const obj = { b: 2 };
  Object.seal(obj);
  return obj;
};
