<template>
  <div id="root" ref="root"></div>
</template>

<script>
import config from "../pages/pagesConfig.js";
import ElementBuilder from "../ElementBuilder";

export default {
  name: "PageRender",
  data() {
    return {
      elements: null,
    };
  },
  mounted() {
    this.elements = this.getElements();
    this.renderElements(this.elements);
  },
  updated() {
    this.$refs.root.removeChild(this.elements.$el);
    this.elements = this.getElements();
    this.renderElements(this.elements);
  },
  methods: {
    getElements() {
      let elements = [];
      // TODO default handling in case this is undefined
      this.pageConfig.forEach((elementConfig) => {
        var elementBuilder = new ElementBuilder(elementConfig);
        elements.push(elementBuilder.getComponent());
      });

      return elements;
    },
    renderElements(instances) {
      instances.forEach((instance) => {
        instance.$mount();
        this.$refs.root.appendChild(instance.$el);
      });
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
      return config[this.pageName];
    },
  },
};
</script>

<style>
#root {
  min-height: 100vh;
  margin-top: 100px;
}

.container {
  padding: 10px;
}
</style>