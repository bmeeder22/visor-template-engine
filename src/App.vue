<template>
  <div id="app">
    <div id="side-margin">
      <div id="max">
        <TopMenu></TopMenu>
        <router-view></router-view>
        <BottomMenu></BottomMenu>
      </div>
    </div>
  </div>
</template>

<script>
import TopMenu from "./components/TopMenu";
import BottomMenu from "./components/BottomMenu";

export default {
  name: "App",
  components: {
    TopMenu,
    BottomMenu,
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

#max {
  max-width: 1500px;
}

#side-margin {
  padding-left: 2%;
  padding-right: 2%;
}

@media screen and (min-width: 1400px) {
  #side-margin {
    padding-left: calc(50vw - 600px);
    padding-right: calc(50vw - 600px);
    max-width: 1200px;
  }
}

button {
  margin-top: 10px;
  margin-right: 10px;
  background-color: rgb(69, 206, 147);
  padding: 15px 30px 15px 30px;
  border: none;
  color: rgb(18, 20, 29);
  border-radius: 4px;
  font-size: medium;
  font-weight: bold;
  cursor: pointer;
}

p {
  color: grey;
}

li {
  color: grey;
}

img {
  max-width: 100%;
  max-height: 100%;
}

video {
  max-width: 100%;
  max-height: 100%;
}
</style>
