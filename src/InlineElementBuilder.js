import showdown from "showdown";

class InlineElementBuilder {
  constructor(inlineElementArray) {
    this.inlineElementArray = inlineElementArray;
    this.html = "";

    if (Array.isArray(inlineElementArray)) {
      this.inlineElementArray.forEach((element) => {
        this.html += this.getHtmlForElement(element);
      });
    } else {
      this.html = this.getHtmlForMarkdown(inlineElementArray);
    }
  }

  getHtmlForElement(element) {
    if (element.type === "btn") return this.getHtmlForButton(element);
    else if (element.type === "img") return this.getHtmlForImage(element);
    else return this.getHtmlForMarkdown();
  }

  getHtmlForButton(buttonElement) {
    return `<a href="/#/${buttonElement.href}"><button>${buttonElement.text}</button></a>`;
  }

  getHtmlForImage(imageElement) {
    let width = "";
    if (imageElement.width) width = `width=${imageElement.width}`;

    let height = "";
    if (imageElement.height) height = `height=${imageElement.height}`;

    return `<img src="${imageElement.src}" ${width} ${height}/>`;
  }

  getHtmlForMarkdown(element) {
    let converter = new showdown.Converter();
    return converter.makeHtml(element);
  }

  getHtml() {
    return this.html;
  }
}

export default InlineElementBuilder;
