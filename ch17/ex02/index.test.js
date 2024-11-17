// https://github.com/github/branch-deploy/issues/306
import "@octokit/core";
jest.mock("@octokit/core");
import { createIssue } from "./index.js";

test("Test createIssue", async () => {
  const TITLE = "Issue title";
  const BODY = "Issue body";
  await createIssue(TITLE, BODY);
});
