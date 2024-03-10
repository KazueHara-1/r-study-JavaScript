const obj = { x: 1, y: 2 };
const obj2 = Object.create(obj);

console.log(Object.getPrototypeOf(obj2) === obj); // true
