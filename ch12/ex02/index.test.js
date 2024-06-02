import { fibonacciSequenceIterator } from ".";

function fibonacci(n) {
  for (const f of fibonacciSequenceIterator()) {
    if (n-- <= 0) return f;
  }
}

test.each`
  n     | expected
  ${1}  | ${1}
  ${2}  | ${2}
  ${3}  | ${3}
  ${4}  | ${5}
  ${5}  | ${8}
  ${10} | ${89}
`(`fibo($n) toBe $expected`, ({ n, expected }) => {
  expect(fibonacci(n)).toBe(expected);
});
