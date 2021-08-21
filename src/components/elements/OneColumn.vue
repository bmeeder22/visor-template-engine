<template>
  <div v-bind:class="[container, alignClass]" v-html="htmlContent"></div>
</template>

<script>
import InlineElementBuilder from "../../InlineElementBuilder";

export default {
  data() {
    return {
      container: "container",
    };
  },
  props: ["content", "align"],
  computed: {
    alignClass() {
      if (this.align === "left") return "align-left";
      else return "align-center";
    },
    htmlContent() {
      console.log("htmlContent");
      console.log(this.content);
      let inlineElementBuilder = new InlineElementBuilder(this.content);
      return inlineElementBuilder.getHtml();
    },
  },
};
</script>

<style>
.align-left {
  text-align: left;
}

.align-center {
  text-align: center;
}

img {
  margin-right: 20px;
}
</style>