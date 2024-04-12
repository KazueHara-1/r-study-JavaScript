```
const obj = {
  om: function () {
    const nest = {
      nm: function () {
        console.log(this === obj, this === nest);
      },
      arrow: () => {
        console.log(this === obj, this === nest);
      },
    };
    nest.nm();
    nest.arrow();
  },
};
obj.om();
```

出力予想：
```
false true
true false
```

`nest.nm()`→関数を定義したのはnestの中なので、thisはnestを指す。
`nest.arrow()`→関数を定義したのはnestの中だがarrowはアロー関数なのでnestの上の階層、omのfunction()を定義した場所であるobjを指す。

出力：
```
false true
true false
```
