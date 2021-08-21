import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";
import PageRender from "./components/PageRender";
import HelloWorld from "./components/HelloWorld";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueMeta);

const routes = [
  { path: "/page/:id", component: PageRender },
  { path: "/", component: HelloWorld }, // TODO redirect to some default landing page
  { path: "*", redirect: "/page/NotFound" }
];

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
