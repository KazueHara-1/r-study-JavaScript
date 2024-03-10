// 文ブロックを使って同じ関数内に同じ変数名の const を複数宣言する関数を書きなさい。

const func = () => {
  const a = 1;
  const func1 = () => {
    const a = 1;
  };
  const func2 = () => {
    const a = 1;
  };
};
