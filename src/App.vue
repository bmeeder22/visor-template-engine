<template>
  <div id="app">
    <TopMenu></TopMenu>
    <router-view></router-view>
  </div>
</template>

<script>
import TopMenu from "./components/TopMenu";

export default {
  name: "App",
  components: {
    TopMenu,
  },
  mounted() {
    console.log(this.$router.url);
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  padding-top: 60px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(18, 20, 29);
}
</style>
