通常の配列は、型の制限も要素数の制限もなく、自由に扱える半面、アクセス速度が遅くなる。
型付き配列は、扱える方に制限をつけることでより速くデータにアクセスできる。
そのため、typedArrayMultiplyの方が速くなると考えられる。

```
arrayMultiply: 2527.3077000007033
typedArrayMultiply: 2476.113899998367
```