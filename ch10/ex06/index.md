import文はどこで宣言されたものも、コードの一番上に巻き上げて実行される。
そのため、index.jsのようにimport→console.log→import...と、importの間にconsole.log等別のコードを書いた場合も、
先にすべてのimport処理を終わらせたのち、その他のコードが実行される。

今回の場合は、以下のような出力になると予想される。

```
file A is imported.
file B is imported.
file C is imported.
Start to import file A.
Start to import file B.
Start to import file C.
```

結果：上に同じ。
