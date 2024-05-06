// f はオブジェクトを1つ引数に取る関数
export function cache(f) {
  // この関数を実装する
  const cachedFunc = function (arg) {
    const cache = new WeakMap();
    if (cache.has(arg)) {
      return cache.get(arg);
    } else {
      const result = f(arg);
      cache.set(arg, result);
      return result;
    }
  };
  return cachedFunc;
}

// async function slowFn(obj) {
//   await setTimeout(() => {}, 5000);
//   return obj.x + obj.y;
// }

// cachedSlowFnを同じ引数で複数回呼び出すと、2回目以降はキャッシュが返る
// const cachedSlowFn = cache(slowFn);

// cachedSlowFn({ x: 1, y: 2 }).then((result) => console.log(result));
// cachedSlowFn({ x: 1, y: 2 }).then((result) => console.log(result));
