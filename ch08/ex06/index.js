// 修正した関数は以下（引数に...を追加し残余パラメータとする）

const m1 = function (...arg) {
  console.log(arg[1]);
};
m1('a', 'b');

// アロー関数に書き直すと以下のようになる

const m2 = (...arg) => {
  console.log(arg[1]);
};
m2('a', 'b');
