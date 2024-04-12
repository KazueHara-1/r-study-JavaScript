修正した関数は以下（引数に...を追加し残余パラメータとする）
```
const m = function (...arg) {
  console.log(arg[1]);
};
m("a", "b");
```

アロー関数に書き直すと以下のようになる
```
const m = (...arg) => {
  console.log(arg[1]);
};
m("a", "b");
```