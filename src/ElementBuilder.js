import Vue from "vue";
import OneColumn from "./components/elements/OneColumn";
import TwoColumns from "./components/elements/TwoColumns";

let types = {
  onecol: OneColumn,
  twocol: TwoColumns
};

class ElementBuilder {
  constructor(config) {
    this.config = config;
    this.content = config.content;
    this.contentType = config.contentType;
    this.type = config.type;
  }

  generateContent() {}

  getComponent() {
    let ComponentClass = Vue.extend(types[this.type]);
    let instance = new ComponentClass({
      propsData: { content: this.content }
    });
    return instance;
  }
}

export default ElementBuilder;
