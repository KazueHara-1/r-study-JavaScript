// 残余パラメータとして任意の数の関数を受け取り、いずれかの関数が true を返せば true を返す新たな関数を返すany 関数
export const any = (...func) => {
  // 新しい関数を返す。
  return function (...args) {
    let result = false;
    func.forEach((f) => {
      if (f.apply(this, args) === true) {
        result = true;
        return;
      }
    });
    return result;
  };
};

// 引数として 2 つの関数を受け取り、1 つ目の関数で発生した例外を 2 つ目の関数の引数として処理し結果を返す新たな関数を返すcatching 関数

export const catching = (func1, func2) => {
  // 新しい関数を返す。
  return function (...args) {
    try {
      return func1.apply(this, args);
    } catch (error) {
      return func2(error);
    }
  };
};
