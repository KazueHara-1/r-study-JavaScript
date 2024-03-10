import { returnEven } from "./index.js";

test.each`
  testObj                 | expected
  ${{ a: 1, b: 2, c: 3 }} | ${{ b: 2 }}
  ${{ a: 2, b: 4, c: 6 }} | ${{ a: 2, b: 4, c: 6 }}
  ${{ a: 1, c: 3 }}       | ${{}}
`("$testObj -> $expected", ({ testObj, expected }) => {
  expect(returnEven(testObj)).toStrictEqual(expected);
});
