const obj = { a: 1, b: 2, c: 3 };

const t0 = performance.now();
console.log(`${obj.a}, ${obj.b}, ${obj.c}`);
const t1 = performance.now();
console.log(`with未使用:${t1 - t0}s`);

const t2 = performance.now();
// eslint-disable-next-line no-with
with (obj) {
  console.log(`${a}, ${b}, ${c}`);
}

const t3 = performance.now();
console.log(`with使用:${t3 - t2}s`);
