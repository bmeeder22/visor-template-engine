<template>
  <div class="row container">
    <div class="column left">
      <div v-html="content.left"></div>
    </div>
    <div class="column right">
      <div v-html="content.right"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: Object,
    align: String,
  },
};
</script>

<style scoped>
.row {
  text-align: left;
  display: flex;
  margin-bottom: 20px;
}

.column {
  flex: 50%;
  /* border: 5px solid black; */
  display: flex;
  align-items: center;
}

@media screen and (max-width: 1000px) {
  .column {
    flex: 100%;
  }

  .row {
    flex-flow: row wrap;
  }
}

.right {
  margin-left: 20px;
}
</style>