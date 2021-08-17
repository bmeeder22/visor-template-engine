import jiraSyncLanding from "./jiraSyncLanding.json";
import jiraSyncLandingYaml from "./jiraSyncLanding.yaml";
import blog1 from "./blog1.md";
import yaml from "js-yaml";

let config = {
  landing1: jiraSyncLanding,
  landing2: yaml.load(jiraSyncLandingYaml, "utf8"),
  blog1: [
    {
      contentType: "md",
      content:
        "# Removing Technical Barriers: </br>A Remarkable New Leadership Opportunity"
    },
    {
      contentType: "html",
      content:
        "<img src=https://blog.visor.us/content/images/2021/05/new-york-city.jpeg />"
    },
    {
      contentType: "md",
      content: blog1,
      align: "left"
    }
  ]
};

export default config;
