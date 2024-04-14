const info = {
  userid: 1,
  name: 'Tanaka Taro',
};

function f(input) {
  const f = new Function(`return "Hello, " + ${input}`);
  console.log(f());
}

f('console.log(info.name)');
