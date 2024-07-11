export function returnType(strings, ...values) {
  // 関数に引数を渡す方法がわかりませんでした…
  let result = strings[0];
  for (let i = 0; i < values.length; i++) {
    result += typeof values[i] + strings[i + 1];
  }
  return result;
}
