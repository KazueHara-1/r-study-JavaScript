// 関数を引数に受け取り、 call 相当の動きをするプロパティ myCall を追加する関数 addMyCall(f)を実装しなさい。実装には bind を使い call や apply は使わないこと
export const addMyCall = (func) => {
  func.myCall = function (...args) {
    return func.bind(args.shift())(...args);
  };
};
