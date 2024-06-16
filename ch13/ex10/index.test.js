import { fetchSumOfFileSizes } from "./index.js";

test("正常系", async () => {
  let result;
  await fetchSumOfFileSizes("ch13/ex03", (err, size) => {
    result = size;
  });
  expect(result).toBe(1190);
});
