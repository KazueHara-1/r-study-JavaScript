import { checkEntry } from "./index.js";

test("directory", async () => {
  const result = await checkEntry("ch16");
  expect(result).toBe("directory");
});

test("file", async () => {
  const result = await checkEntry("ch16/ex07/index.js");
  expect(result).toBe("file");
});
