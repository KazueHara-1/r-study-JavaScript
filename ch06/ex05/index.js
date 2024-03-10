const prot = { 100: 100, three: '3' };
Object.defineProperty(prot, 'prop', {
  value: 3,
  enumerable: true,
});
const obj = Object.create(prot);
obj[1] = 1;
obj['two'] = '2';
Object.defineProperty(obj, 'prop', {
  value: 3,
  enumerable: false,
});

for (const prop in obj) {
  console.log(prop);
}

// 1
// two
// 100
// three
