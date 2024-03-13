// 任意のオブジェクトを受け取り、そのオブジェクトのすべての独自プロパティ（列挙不可、プロパティ名が Symbolのものを含む）
// および列挙可能な継承プロパティのプロパティ名の配列を返す関数を作成しなさい。

export const getPropertyName = (obj: object) => {
  const array = Reflect.ownKeys(obj);
  let protoObj = Object.getPrototypeOf(obj);
  while (protoObj) {
    array.push(...Object.keys(protoObj));
    protoObj = Object.getPrototypeOf(protoObj);
  }
  return array;
};
