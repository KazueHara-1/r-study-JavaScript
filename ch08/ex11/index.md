```
// 組み込み関数
console.log(Array.prototype.map.toString()) // function map() { [native code] }

// 自作関数
const func = () => {
    connst obj = {a:1,b:2}
    console.log(a+b)
    console.log("自作関数")
}

console.log(func.toString()) // () => { const obj = {a:1,b:2} console.log(a+b) console.log("自作関数") }
```