// ex10から引用
const obj = { a: 1, b: 2, c: 3 };
// eslint-disable-next-line no-with
with (obj) {
  // eslint-disable-next-line no-undef
  console.log(`${a}, ${b}, ${c}`);
}
// eslint-disable-next-line no-dupe-keys
const o = { p: 1, p: 2 };
console.log(o);

const private = "private";
console.log(private);
