<template>
  <div id="root" ref="root"></div>
</template>

<script>
import config from "../pages/pagesConfig.js";
import ElementBuilder from "../ElementBuilder";

export default {
  name: "PageRender",
  metaInfo() {
    return {
      title: this.title,
      htmlAttrs: {
        lang: "en-US",
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content: this.description,
        },
      ],
    };
  },
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

      if (!this.pageConfig) {
        return this.getNotFoundElements();
      }

      this.pageContents.forEach((elementConfig) => {
        var elementBuilder = new ElementBuilder(elementConfig);
        elements.push(elementBuilder.getComponent());
      });

      return elements;
    },
    getNotFoundElements() {
      let elements = [];
      let notFoundContents = this.getContentsFromPage(config.NotFound);
      console.log(notFoundContents);
      notFoundContents.forEach((content) => {
        var elementBuilder = new ElementBuilder(content);
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
    getContentsFromPage(page) {
      var contents = page.filter((element) => {
        return element.content;
      });
      return contents;
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
    pageContents() {
      var contents = this.pageConfig?.filter((element) => {
        return element.content;
      });
      return contents;
    },
    title() {
      var title = this.pageConfig?.filter((element) => {
        return element.title;
      })[0]?.title;
      return title;
    },
    description() {
      var description = this.pageConfig?.filter((element) => {
        return element.description;
      })[0]?.description;

      return description;
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