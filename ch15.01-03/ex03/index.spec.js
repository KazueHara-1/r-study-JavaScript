import { expect, test } from "@playwright/test";

test.describe("test page", () => {
  test("JS読み込み成功", async ({ page }) => {
    await page.goto("/ch15.01-03/ex03/index.html");
    await expect(page.getByText("a")).toBeVisible();
  });
  test("JS読み込み失敗", async ({ page }) => {
    await page.goto("/ch15.01-03/ex03/index2.html");
    await expect(page.getByText("b")).not.toBeVisible();
  });
});
