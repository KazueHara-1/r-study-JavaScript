let o = {}; // oはObject.prototypeからメソッドを継承し、
o.x = 1; // 独自プロパティxを持つ。
let p = Object.create(o); // pはoとObject.prototype からプロパティを継承し、
p.y = 2; // 独自プロパティyを持つ。
let q = Object.create(p); // qは、p、o、Object.prototypeからプロパティを継承し、
q.z = 3; // 独自プロパティzを持つ。
let f = q.toString(); // toStringはObject.prototypeから継承する。
q.x + q.y; // => 3; xとyはそれぞれoとpから継承する。

// -------------ここからコード

console.log(o.isPrototypeOf(p));
console.log(o.isPrototypeOf(q));
console.log(p.isPrototypeOf(q));

const array = [Object, Array, Date, Map];

for (const obj1 of array) {
  for (const obj2 of array) {
    console.log(`${obj1} is prototypeOf ${obj2} : ${obj1.isPrototypeOf(obj2)}`);
  }
}

// 👆みたいなコード書けちゃうのかな…とお試しで書いたら書けてしまって正直驚きでした…

// 結果：
// function Object() { [native code] } is prototypeOf function Object() { [native code] } : false
// function Object() { [native code] } is prototypeOf function Array() { [native code] } : false
// function Object() { [native code] } is prototypeOf function Date() { [native code] } : false
// function Object() { [native code] } is prototypeOf function Map() { [native code] } : false
// function Array() { [native code] } is prototypeOf function Object() { [native code] } : false
// function Array() { [native code] } is prototypeOf function Array() { [native code] } : false
// function Array() { [native code] } is prototypeOf function Date() { [native code] } : false
// function Array() { [native code] } is prototypeOf function Map() { [native code] } : false
// function Date() { [native code] } is prototypeOf function Object() { [native code] } : false
// function Date() { [native code] } is prototypeOf function Array() { [native code] } : false
// function Date() { [native code] } is prototypeOf function Date() { [native code] } : false
// function Date() { [native code] } is prototypeOf function Map() { [native code] } : false
// function Map() { [native code] } is prototypeOf function Object() { [native code] } : false
// function Map() { [native code] } is prototypeOf function Array() { [native code] } : false
// function Map() { [native code] } is prototypeOf function Date() { [native code] } : false
// function Map() { [native code] } is prototypeOf function Map() { [native code] } : false
