import jiraSyncLanding from "./jiraSyncLanding.json";
import jiraSyncLandingYaml from "./jiraSyncLanding.yaml";
import blog1 from "./blog1.md";
import yaml from "js-yaml";
import NotFound from "./404.yaml";

let config = {
  landing1: jiraSyncLanding,
  landing2: yaml.load(jiraSyncLandingYaml, "utf8"),
  NotFound: yaml.load(NotFound, "utf8")
};

export default config;
