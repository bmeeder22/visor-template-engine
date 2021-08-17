<template>
  <div v-bind:class="[container, alignClass]" v-html="content"></div>
</template>

<script>
export default {
  data() {
    return {
      container: "container"
    }
  },
  props: {
    content: String,
    align: String,
  },
  computed: {
    alignClass() {
      if (this.align === "left") return "align-left";
      else return "align-center";
    },
  },
};
</script>

<style scoped>
.align-left {
  text-align: left;
}

.align-center {
  text-align: center;
}
</style>