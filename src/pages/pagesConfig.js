import page3 from "./page3.html";
import jiraSyncLanding from "./jiraSyncLanding.json";
import blog1 from "./blog1.md";

let config = {
  landing1: jiraSyncLanding,
  blog1: [
    {
      contentType: "md",
      content:
        "# Removing Technical Barriers: A Remarkable New Leadership Opportunity"
    },
    {
      contentType: "html",
      content:
        "<img src=https://blog.visor.us/content/images/2021/05/new-york-city.jpeg />"
    },
    {
      contentType: "md",
      content: blog1
    }
  ]
};

export default config;
