import { createIssue } from "./index.js";
jest.mock("@octokit/core");

test("Test createIssue", async () => {
  const TITLE = "Issue title";
  const BODY = "Issue body";
  await createIssue(TITLE, BODY);
});
