import page3 from "./page3.html";
import multiJiraIssues from "./multiJiraIssues.md";

let config = {
  landing1: [
    {
      contentType: "md",
      content: "# This is all the content"
    },
    {
      contentType: "md",
      content: {
        left: page3,
        right: multiJiraIssues
      }
    },
    {
      contentType: "html",
      content: "This is all the content"
    }
  ],
  landing2: ["test1"],
  landing3: ["test2"],
  test3: [page3, page3],
  test4: ["test4"],
  test5: ["test5"],
  test6: ["test6"],
  test7: ["test7"]
};

export default config;
