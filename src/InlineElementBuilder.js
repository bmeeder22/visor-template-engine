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
      this.html = this.getHtmlForElement(inlineElementArray);
    }
  }

  getHtmlForElement(element) {
    if (element.type === "btn") return this.getHtmlForButton(element);
    else if (element.type === "img") return this.getHtmlForImage(element);
    else return this.getHtmlForMarkdown(element);
  }

  getHtmlForButton(buttonElement) {
    return `<a href="/${buttonElement.href}"><button>${buttonElement.text}</button></a>`;
  }

  getHtmlForImage(imageElement) {
    if (imageElement.src.endsWith(".mp4"))
      return this.getHtmlForMp4(imageElement);

    let width = "";
    if (imageElement.width) width = `width=${imageElement.width}`;

    let height = "";
    if (imageElement.height) height = `height=${imageElement.height}`;

    let alt = "";
    if (imageElement.alt) alt = `alt=${imageElement.alt}`;

    return `<img src="${imageElement.src}" ${alt} ${width} ${height}/>`;
  }

  getHtmlForMp4(videoElement) {
    return `<video autoplay loop muted playsinline src="${videoElement.src}"></video>`;
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
