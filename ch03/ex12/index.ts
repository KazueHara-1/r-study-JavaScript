type sampleObjType = {
  [key: string]: number;
};
const obj1: sampleObjType = { x: 1 };
obj1["y"] = 2;

const obj2 = { x: 1, y: 2 };

console.log(`obj1===obj2:${obj1 === obj2}`); // false

export const equals = (obj1: Object, obj2: Object): boolean => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const key of Object.keys(obj1)) {
    if (!(key in obj2)) {
      return false;
    }
    // TODO:objectのkeyがstringかnumberか不明のためエラーが出る
    // @ts-ignore
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};
