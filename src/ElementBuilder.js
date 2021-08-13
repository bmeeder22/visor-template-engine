import Vue from "vue";
import TestElement from "./components/elements/TestElement";

class ElementBuilder {
  constructor(config) {
    this.config = config;
  }

  getComponent() {
    let ComponentClass = Vue.extend(TestElement);
    let instance = new ComponentClass({
      propsData: { message: this.config }
    });
    return instance;
  }
}

export default ElementBuilder;
