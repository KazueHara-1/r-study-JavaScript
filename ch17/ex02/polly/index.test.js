// https://github.com/github/branch-deploy/issues/306
import { jest } from "@jest/globals";
import { createIssue } from "../index.js";

// jest がうまく動かないので scriptに --experimental-vm-modules を追加している
// https://jestjs.io/docs/ecmascript-modules

test("Test createIssue", async () => {
  const TITLE = "Issue title";
  const BODY = "Issue body";
  await createIssue(TITLE, BODY);
});
