<template>
  <div id="app">
    <div id="test">
      <TopMenu></TopMenu>
      <router-view></router-view>
    </div>
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
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(18, 20, 29);
}

#test {
  padding-left: 2%;
  padding-right: 2%;
}

@media screen and (min-width: 1400px) {
  #test {
    padding-left: 10%;
    padding-right: 10%;
  }
}

button {
  margin-top: 10px;
  margin-right: 10px;
  background-color: rgb(69, 206, 147);
  padding: 20px 30px 20px 30px;
  border: none;
  color: rgb(18, 20, 29);
  border-radius: 4px;
  font-size: medium;
  font-weight: bold;
}
</style>
