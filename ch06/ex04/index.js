const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 1,
  writable: false,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(object1, 'property2', {
  value: 2,
  writable: true,
  enumerable: false,
  configurable: true,
});

Object.defineProperty(object1, 'property3', {
  value: 3,
  writable: true,
  enumerable: true,
  configurable: false,
});

// プロパティの変更
object1.property1 = 11;
console.log(object1.property1); // 1
object1.property2 = 22;
console.log(object1.property2); // 22
object1.property3 = 33;
console.log(object1.property3); // 33

console.log(object1.hasOwnProperty('property1')); // true
console.log(object1.hasOwnProperty('property2')); // true
console.log(object1.hasOwnProperty('property3')); // true

console.log(object1.propertyIsEnumerable('property1')); // true
console.log(object1.propertyIsEnumerable('property2')); // false
console.log(object1.propertyIsEnumerable('property3')); // true

// プロパティの削除
delete object1.property1;
delete object1.property2;
delete object1.property3;
console.log(object1.property1); //
console.log(object1.property2); //
console.log(object1.property3); // 33

console.log(object1.hasOwnProperty('property1')); // false
console.log(object1.hasOwnProperty('property2')); // false
console.log(object1.hasOwnProperty('property3')); // true
