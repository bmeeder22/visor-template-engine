import Vue from "vue";
import OneColumn from "./components/elements/OneColumn";
import TwoColumns from "./components/elements/TwoColumns";
import showdown from "showdown";

class ElementBuilder {
  constructor(config) {
    this.config = config;
    this.content = config.content;
    this.contentType = config.contentType;
    this.type = config.type;

    if (this.contentType === "md") {
      let converter = new showdown.Converter();

      if (this.isTwoCol()) {
        this.content.left = converter.makeHtml(this.content.left);
        this.content.right = converter.makeHtml(this.content.right);
      } else {
        this.content = converter.makeHtml(this.content);
      }
    }
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
        align: "left"
      }
    });
  }
}

export default ElementBuilder;
