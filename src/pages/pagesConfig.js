import jiraSyncLandingYaml from "./jiraSyncLanding.yaml";
import yaml from "js-yaml";
import NotFound from "./404.yaml";
import Salesforce from "./salesforce.yml";
import barriers from "./barriers.yml";

let config = {
  landing1: yaml.load(jiraSyncLandingYaml, "utf8"),
  NotFound: yaml.load(NotFound, "utf8"),
  salesforce: yaml.load(Salesforce, "utf8"),
  barriers: yaml.load(barriers, "utf8")
};

export default config;
