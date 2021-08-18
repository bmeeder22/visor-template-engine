<template>
  <div class="row container">
    <div class="column left">
      <div v-html="leftHtmlContent"></div>
    </div>
    <div class="column right">
      <div v-html="rightHtmlContent"></div>
    </div>
  </div>
</template>

<script>
import InlineElementBuilder from "../../InlineElementBuilder";

export default {
  props: ["content", "align"],
  computed: {
    rightHtmlContent() {
      let inlineElementBuilder = new InlineElementBuilder(this.content.right);
      return inlineElementBuilder.getHtml();
    },
    leftHtmlContent() {
      let inlineElementBuilder = new InlineElementBuilder(this.content.left);
      return inlineElementBuilder.getHtml();
    },
  },
};
</script>

<style scoped>
.row {
  text-align: left;
  display: flex;
  margin-bottom: 20px;
  /* max-width: 50vw; */
}

.column {
  flex: 50%;
  border: 5px solid black;
  display: flex;
  align-items: center;
}

.right {
  padding-left: 30px;
}

@media screen and (max-width: 1200px) {
  .column {
    flex: 100%;
  }

  .row {
    flex-flow: row wrap;
  }

  .right {
    padding-left: 0px;
  }
}
</style>