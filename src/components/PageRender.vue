<template>
  <div>
    <div>{{ pageConfig }}</div>
  </div>
</template>

<script>
import test from "../pages/test.json";

export default {
  name: "PageRender",
  mounted() {
    console.log(this.pathName);
  },
  data() {
    return {};
  },
  methods: {
    getPageConfig() {
      return;
    },
  },
  computed: {
    pathName() {
      return this.$route.path;
    },
    pageName() {
      return this.pathName.replace("/page/", "");
    },
    pageConfig() {
      return test[this.pageName];
    },
  },
};
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
  background-color: red;
}
</style>