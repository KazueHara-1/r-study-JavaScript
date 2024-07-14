import { expect, test } from "@playwright/test";

test.describe("test page", () => {
  test("食品", async ({ page }) => {
    await page.goto("/ch15.01-03/ex14/index.html");
    await page.locator("select").selectOption("food");

    await expect(page.locator('li[data-testid="food1"]')).toBeVisible();
    await expect(page.locator('li[data-testid="stationery1"]')).toBeHidden();
    await expect(page.locator('li[data-testid="stationery2"]')).toBeHidden();
  });
  test("文房具", async ({ page }) => {
    await page.goto("/ch15.01-03/ex14/index.html");
    await page.locator("select").selectOption("stationery");

    await expect(page.locator('li[data-testid="food1"]')).toBeHidden();
    await expect(page.locator('li[data-testid="stationery1"]')).toBeVisible();
    await expect(page.locator('li[data-testid="stationery2"]')).toBeVisible();
  });
  test("食品→すべて", async ({ page }) => {
    await page.goto("/ch15.01-03/ex14/index.html");
    await page.locator("select").selectOption("food");

    await expect(page.locator('li[data-testid="food1"]')).toBeVisible();
    await expect(page.locator('li[data-testid="stationery1"]')).toBeHidden();
    await expect(page.locator('li[data-testid="stationery2"]')).toBeHidden();

    await page.locator("select").selectOption("all");

    await expect(page.locator('li[data-testid="food1"]')).toBeVisible();
    await expect(page.locator('li[data-testid="stationery1"]')).toBeVisible();
    await expect(page.locator('li[data-testid="stationery2"]')).toBeVisible();
  });
  test("文房具→すべて", async ({ page }) => {
    await page.goto("/ch15.01-03/ex14/index.html");
    await page.locator("select").selectOption("stationery");

    await expect(page.locator('li[data-testid="food1"]')).toBeHidden();
    await expect(page.locator('li[data-testid="stationery1"]')).toBeVisible();
    await expect(page.locator('li[data-testid="stationery2"]')).toBeVisible();

    await page.locator("select").selectOption("all");

    await expect(page.locator('li[data-testid="food1"]')).toBeVisible();
    await expect(page.locator('li[data-testid="stationery1"]')).toBeVisible();
    await expect(page.locator('li[data-testid="stationery2"]')).toBeVisible();
  });
});
