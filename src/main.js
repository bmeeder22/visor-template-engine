import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import PageRender from "./components/PageRender";
import HelloWorld from "./components/HelloWorld";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/page/:id", component: PageRender },
  { path: "/", component: HelloWorld },
  { path: "*", component: HelloWorld } // TODO 404 page
];

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
