import Vue from "vue";
import OneColumn from "./components/elements/OneColumn";
import TwoColumns from "./components/elements/TwoColumns";

class ElementBuilder {
  constructor(config) {
    console.log("ElementBuilder");
    console.log(config);
    this.config = config;
    this.content = config.content;
    this.align = config.align;
  }

  isTwoCol() {
    return this.content.left && this.content.right;
  }

  getComponent() {
    let ComponentClass;
    if (this.isTwoCol()) ComponentClass = Vue.extend(TwoColumns);
    else ComponentClass = Vue.extend(OneColumn);

    return new ComponentClass({
      propsData: {
        content: this.content,
        align: this.align
      }
    });
  }
}

export default ElementBuilder;
