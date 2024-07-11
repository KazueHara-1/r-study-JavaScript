import { returnType } from "./index.js";

test("returnType", () => {
  expect(returnType`12${"A"}32${{ a: 1 }}4`).toBe("12string32object4");
  expect(returnType`12345`).toBe("12345");
  expect(returnType`${"A"}`).toBe("string");
  expect(returnType`${123}`).toBe("number");
});
