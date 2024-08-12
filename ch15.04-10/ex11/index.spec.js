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
async function deleteToDo(page, index) {
  await page
    .getByRole("listitem")
    .nth(index)
    .getByRole("button", { name: "❌" })
    .click();
}

/**
 * @param {import("@playwright/test").Page} page
 */
async function countToDos(page) {
  // aタグx3が存在するのでそれを引く
  return (await page.getByRole("listitem").count()) - 3;
}

/**
 * @param {import("@playwright/test").Page} page
 * @param {number} index
 */
function queryToDo(page, index) {
  return page.getByRole("listitem").nth(index);
}

test.describe("simple todo app", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/ch15.04-10/ex11");
    // TODOを追加
    await addToDo(page, "質問表に質問を記載する");
    await addToDo(page, "練習問題を完了する");
    await addToDo(page, "研修の準備をする");
    // チェックを一つ入れる
    await checkToDo(page, 1);
    expect(await countToDos(page)).toBe(3);
  });

  test("Check 'All'", async ({ page }) => {
    await page.getByText("All").click();
    expect(await countToDos(page)).toBe(3);
  });

  test("Check 'Active'", async ({ page }) => {
    await page.getByText("Active").click();
    expect(await countToDos(page)).toBe(2);
  });
  test("Check 'Completed'", async ({ page }) => {
    await page.getByText("Completed").click();
    expect(await countToDos(page)).toBe(1);
  });
});
