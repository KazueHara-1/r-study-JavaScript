import { getFileRowGen } from "./index.js";

test("getFileRowGen テスト", () => {
  const getFileRow = getFileRowGen("./ch12/ex05/test.txt");
  expect(getFileRow.next().value).toBe("12345");
  expect(getFileRow.next().value).toBe("abcde");
  expect(getFileRow.next().value).toBe("1a2b3c4d5e");
});
