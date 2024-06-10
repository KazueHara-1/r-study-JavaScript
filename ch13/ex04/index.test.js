import { fetchFirstFileSize, fetchSumOfFileSizes } from "./index.js";
import {
  fetchFirstFileSizeBefore,
  fetchSumOfFileSizesBefore,
} from "./index_before.js";

test("正常系", async () => {
  let result;
  fetchFirstFileSize("ch13/ex03", (err, size) => {
    let expect;
    fetchFirstFileSizeBefore("ch13/ex03", (err, size) => {
      expect = size;
    });
    result = size;
    expect(result).toBe(expect);
  });
});

test("正常系", async () => {
  let result;
  fetchSumOfFileSizes("ch13/ex03", (err, size) => {
    let expect;
    fetchSumOfFileSizesBefore("ch13/ex03", (err, size) => {
      expect = size;
    });
    result = size;
    expect(result).toBe(expect);
  });
});
