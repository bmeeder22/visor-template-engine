import page3 from "./page3.html";

let config = {
  landing1: [
    {
      type: "onecol",
      contentType: "html",
      content: "This is all the content"
    },
    {
      type: "twocol",
      contentType: "html",
      content: {
        left: page3,
        right: "THIS IS THE RIGHT CONTENT AND I HATE IT"
      }
    },
    {
      type: "onecol",
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
