<template>
  <div class="row">
    <div class="column" v-html="content.left"></div>
    <div class="column" v-html="content.right"></div>
  </div>
</template>

<script>
export default {
  props: {
    content: Object,
  },
};
</script>

<style scoped>
.row {
  display: flex;
  margin-bottom: 20px;
}

.column {
  flex: 50%;
  border: 5px solid black;
}

@media screen and (max-width: 1000px) {
  .column {
    flex: 100%;
  }

  .row {
    flex-flow: row wrap;
  }
}
</style>