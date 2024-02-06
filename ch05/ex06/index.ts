// 通常
console.log("エラーなし");
try {
  console.log("try");
} catch (e) {
  console.log(`catch ${e}`);
} finally {
  console.log("finally");
}

// エラー有
console.log("エラーあり");
try {
  console.log("try1");
  throw new Error();
  console.log("try2");
} catch (e) {
  console.log(`catch ${e}`);
} finally {
  console.log("finally");
}
