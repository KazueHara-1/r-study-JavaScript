import dotenv from "dotenv";
import { Octokit } from "@octokit/core";
const [, , cmd] = process.argv;

dotenv.config({ path: ".env" });

const TOKEN = process.env.GITHUB_TOKEN;
const OWNER = "KazueHara-1";
const REPO = "r-study-JavaScript";
let isVerbose = false;

if (!cmd) {
  console.error("Please pass one argument!!");
  process.exit(1);
}

export const createIssue = async (title, body) => {
  const octokit = new Octokit({
    auth: TOKEN,
  });
  try {
    const response = await octokit.request(
      "POST /repos/{owner}/{repo}/issues",
      {
        owner: OWNER,
        repo: REPO,
        title: title ? title : "",
        body: body ? body : "",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      },
    );
    if (isVerbose) {
      console.log(response);
    }
  } catch (error) {
    console.error("Request failed:", error);
  }
};

export const closeIssue = async (id) => {
  const octokit = new Octokit({
    auth: TOKEN,
  });
  try {
    const response = await octokit.request(
      "PATCH /repos/{owner}/{repo}/issues/{issue_number}",
      {
        owner: OWNER,
        repo: REPO,
        issue_number: id,
        state: "closed",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      },
    );
    if (isVerbose) {
      console.log(response);
    }
  } catch (error) {
    console.error("Request failed:", error);
  }
};

// オープンな Issue の Id と Title の一覧を表示できる
export const fetchIssue = async () => {
  const octokit = new Octokit({
    auth: TOKEN,
  });
  try {
    const response = await octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner: OWNER,
      repo: REPO,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    const issues = response.data;
    issues.forEach((issue, index) => {
      console.log(`issue:${index + 1}`);
      console.log(`\tid:${issue.id}`);
      console.log(`\ttitle:${issue.title}`);
    });
    if (isVerbose) {
      console.log(response);
    }
  } catch (error) {
    console.error("Request failed:", error);
  }
};

export const showUsage = (command) => {
  if (!command) {
    console.log(`
Usage:

-create <title> <body> create an issue
-close <number>        close specific issue
-list                  list open issue
-h
--help                 display usage info
-v
--verbose              show http logs
`);
    return;
  }
  switch (command) {
    case "-create":
    case "create":
      console.log("-create <title> <body> create an issue");
      break;
    case "-close":
    case "close":
      console.log("-close <number>        close specific issue");
      break;
    case "-list":
    case "list":
      console.log("-list                  list open issue");
      break;
    case "-h":
    case "--help":
      console.log(`-h
--help                 display usage info`);
      break;
    case "-v":
    case "--verbose":
      console.log(`-v
--verbose              show http logs`);
      break;
  }
};

switch (cmd) {
  case "-create":
    createIssue(process.argv[3], process.argv[4]);
    break;
  case "-close":
    closeIssue(process.argv[3]);
    break;
  case "-list":
    fetchIssue();
    break;
  case "-h":
  case "--help":
    showUsage(process.argv[3]);
    break;
  case "-v":
  case "--verbose":
    isVerbose = true;
    break;
}

// メモ:
// const createCommand = new Command();
// でもできる？
