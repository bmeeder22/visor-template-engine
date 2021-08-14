<template>
  <div class="container" v-html="content"></div>
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
  /* border: 5px solid black; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
</style>