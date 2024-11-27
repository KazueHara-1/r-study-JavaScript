// https://github.com/github/branch-deploy/issues/306
import { jest } from "@jest/globals";
import "@octokit/core";
jest.mock("@octokit/core");
import { createIssue } from "../index.js";

// jest がうまく動かないので scriptに --experimental-vm-modules を追加している
// https://jestjs.io/docs/ecmascript-modules

// うまくいかないのでoctokitを使わない？（fetchのみを使う）方が多かった

test("Test createIssue", async () => {
  const TITLE = "Issue title";
  const BODY = "Issue body";
  await createIssue(TITLE, BODY);
});
