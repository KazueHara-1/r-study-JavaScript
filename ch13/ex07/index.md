## h1()

### 結果と説明

`await` により、wait1,2,3は同期的に処理されるので、以下の流れでコードは実行される。  
まず、3秒後にlogAが実行され、その2秒後にlogB、さらにその1秒後にlogCが実行される。try{}の中で例外はスローされないため、catch文の中身は実行されない。

### 図解

```
wait3
|---------|
          logA
          |-|
            wait2
            |------|
                   logB
                   |-|
                     wait1
                     |---|
                         logC
```

## h2()

### 結果と説明

Promiseが定義され、errXが実行される。その後errXが例外をスローするため、catchの中でlogによりエラーメッセージが出力される。

### 図解

```
errX
|-|
  log(e.message)
```

## h3()

### 結果と説明

Promiseの中でasync functionを実装しているため、このasync functionはPromiseで解決される。そのため、Promiseの定義とasync functionがエラーを返すことは非同期的に実行される。結果的にPromiseの中ではasync functionが返すエラーをキャッチできない。

※非同期処理はスタックに積まれて実行されるため、結果的にnew Promise()の外で実行されたような形になる。

### 図解

```
new Promise();

errX();
// 上記二つは非同期的に実行される
```

## h4()

### 結果と説明

await p1でp1が解決されるまで待つが、その前にp2が解決される。その時、p2は例外をスローするが、この例外はtryの中でキャッチされないためそのままエラーが出力される。（p1とp2のawaitの順番を入れ替えると、Yはlogで出力される。ただ、Xはcatchされず例外をスローする。）

### 図解

```
wait2
|------|
       errX
wait1
|---|
    errY
```
