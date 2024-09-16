import { expect, test } from "@playwright/test";

/**
 * @param {import("@playwright/test").Page} page
 * @param {string} todo
 */
async function addToDo(page, todo) {
  await page.getByRole("textbox").fill(todo);
  await page.getByRole("button", { name: "Add" }).click();
}

/**
 * @param {import("@playwright/test").Page} page
 * @param {number} index
 */
async function checkToDo(page, index) {
  await page.getByRole("listitem").nth(index).getByRole("checkbox").check();
}

/**
 * @param {import("@playwright/test").Page} page
 * @param {number} index
 */
async function deleteTodDo(page, index) {
  await page.getByRole("listitem").nth(index).getByRole("button").click();
}

/**
 * @param {import("@playwright/test").Page} page
 */
async function countToDos(page) {
  return await page.getByRole("listitem").count();
}

test.describe("simple todo app", () => {
  test.beforeEach(async ({ page }) => {
    expect(await countToDos(page)).toBe(0);
    await page.goto("/ch15.11-15/ex04/contents");
    // TODOを追加
    await addToDo(page, "質問表に質問を記載する");
    await addToDo(page, "練習問題を完了する");
    await addToDo(page, "研修の準備をする");
    // チェックを一つ入れる
    await checkToDo(page, 1);
    expect(await countToDos(page)).toBe(3);
  });

  test("Add", async ({ page }) => {
    await addToDo(page, "追加分");
    expect(await countToDos(page)).toBe(4);
  });

  test("Delete", async ({ page }) => {
    await deleteTodDo(page, 0);
    expect(await countToDos(page)).toBe(2);
    await deleteTodDo(page, 0);
    expect(await countToDos(page)).toBe(1);
    await deleteTodDo(page, 0);
    expect(await countToDos(page)).toBe(0);
  });

  test("Reload", async ({ page }) => {
    expect(await countToDos(page)).toBe(3);
    await page.goto("/ch15.11-15/ex04/contents");
    expect(await countToDos(page)).toBe(3);
  });
});
