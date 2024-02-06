```
let x = 0;

for(let i = 1; i <= 5; i++) {
    x = i;
    try {
        throw Error(); // catchへ移動
    } catch {
        break; // finallyへ移動
    } finally {
        continue; // continueなのでfor文の先頭に戻る
    }
}

console.log(x); // 5
```

出力予想：5

実際の出力：5
