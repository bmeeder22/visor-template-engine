<template>
  <div v-html="content"></div>
</template>

<script>
export default {
  props: {
    content: String,
  },
};
</script>

<style scoped>
div {
  border: 5px solid black;
  margin-bottom: 20px;
  min-height: 80vh;
}
</style>