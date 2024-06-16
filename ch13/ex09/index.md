## i1()

### 結果と説明

wait1の方が先に解決されるので、プログラム実行から1秒後に42が出力される。その1秒後にwait2が解決され、100が出力される。

### 図解

```
wait1
|---|
    return 42
    |
    log(v) // 42
wait2
|------|
    v = 100
    |-|
      return 0
      |-|
        log(v) // 100


```

## i2()

### 結果と説明

プログラム実行1秒後にC, 2秒後にB, 3秒後にAが出力され、その後配列[ 'A', 'B', 'C' ]が出力される。  
これは、wait1, 2, 3が同時にトリガされるためである。awaitによりPromise.all()が解決されたとき、すなわちwait1, 2, 3すべてが解決された時、log(v)に処理が移るため、プログラム実行から3秒後に配列が出力される。

### 図解

```
wait3
|---------|
          logA
wait2
|------|
       logB
wait1
|---|
    logC
          |
          log(v) // [ 'A', 'B', 'C' ]
```

## i3()

### 結果と説明

まず、1秒後にwait1が解決され、例外がスローされる。これによりcatchに移り、log(e.message)によりYが、log(v)により42が出力される。その後await wait3によりwait3が解決されるまで待つ。この間にwait2も解決され、logBが実行されBが出力される。

### 図解

```
wait1
|---|
    errY
    |-|
      log(e.message)
      log(v) // 42
      await wait3
wait2
|------|
       logB
       |-|
wait3
|---------|
          v=0
          errX
          |-|
            log(v) // 0
```

## i4()

### 結果と説明

pはすぐに解決され、その後wait(5-i)が実行される。5-i秒後にlog(i)が実行される。これをi=0から4まで実行後にCOMPLETEDが出力される。

### 図解

```
wait(5)
|----------|
           log(0)
           |-|
             wait(4)
             |--------|
                      log(1)
                      |-|
                        wait(3)
                        |------|
                               log(2)
                               |-|
                                 wait(2)
                                 |----|
                                      log(3)
                                      |-|
                                        wait(1)
                                        |--|
                                           log(4)
                                           |-|
                                             log("COMPLETED")
```

## i5()

### 結果と説明

wait()がp.then()の中に直接渡されているため、i4()とは違い、p.then()の中でwaitを即時実行していることになる（i4ではwaitをthenのコールバックとして渡しているだけ）。そのため、以下のようにCOMPLETED→43210の順で実行される。

### 図解

```
log("COMPLETED") // output: COMPLETED
wait(1)
|--|
   log(4)  // output: 4
   |-|
wait(2)
|----|
     log(3)  // output: 3
     |-|
wait(3)
|------|
       log(2)  // output: 2
       |-|
wait(4)
|--------|
         log(1)  // output: 1
         |-|
wait(5)
|----------|
           log(0)  // output: 0
           |-|

```

## i6()

### 結果と説明

wait(5-i)がi=0~4でほぼ同時にPromise.all()のコールバックとして登録される。その後それぞれが実行されるので、解決されるのが早い順に43210の順番で出力される。これらすべてが出力されるとPromise.all()のthenに移り、COMPLETEDが出力される。

### 図解

```
wait(1)
|--|
   log(4)  // output: 4
   |-|
wait(2)
|----|
     log(3)  // output: 3
     |-|
wait(3)
|------|
       log(2)  // output: 2
       |-|
wait(4)
|--------|
         log(1)  // output: 1
         |-|
wait(5)
|----------|
           log(0)  // output: 0
           |-|
    　       log("COMPLETED") // output: COMPLETED
```

## i7()

### 結果と説明

1秒ごとにp2→p1→p2→…と実行されていく。その中でvの値が0→1→…と加算されていき、最後には10となる。そのため、最後のlog(v)では10が出力される。

### 図解

```
// p1()
wait1
|--|
   v = 2
   wait2
   |----|
        v = 4
        wait2
        |----|
             v = 6
             wait2
             |----|
                  v = 8
                  wait2
                  |----|
                       v = 10
                       wait2
                       |----|
// p2()
v = 1
wait2
|----|
    v = 3
    wait2
    |----|
         v = 5
         wait2
         |----|
              v = 7
              wait2
              |----|
                   v = 9
                   wait2
                   |----|
                            log(v) // output: 10
```

## i8()

### 結果と説明

値の読み出しと書き出しの間にawaitが挟まるため、図解の通りにv の値に1を加算する処理は10回行われるが、実際には古い値を参照して加算が行われるため、5までしか加算されない。

### 図解

```
next = 1 // p2()
wait2 // p2()
|----|
wait1 // p1()
|--|
   next = 1 // p1()
   wait2 // p1()
   |----|
      v = next // 1, p2()
      next = 2 // p2()
      wait2 // p2()
      |----|
         v = next // 1,  p1()
         next = 2 // p1()
         wait2 // p1()
         |----|
            v = next // 2, p2()
            next = 3 // p2()
            wait2 // p2()
            |----|
              v = next // 2,  p1()
              next = 3 // p1()
              wait2 // p1()
              |----|
                 v = next // 3, p2()
                 next = 4 // p2()
                 wait2 // p2()
                 |----|
                   v = next // 3,  p1()
                   next = 4 // p1()
                   wait2 // p1()
                   |----|
                      v = next // 4, p2()
                      next = 5 // p2()
                      wait2 // p2()
                      |----|
                        v = next // 4,  p1()
                        next = 5 // p1()
                        wait2 // p1()
                        |----|
                             log(v) // output: 5

```
