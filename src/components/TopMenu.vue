<template>
  <div id="top_menu">
    <div class="logo-container">
      <img src="../assets/visor-logo.svg" alt="Visor Logo" />
    </div>
    <div id="try-for-free">
      <router-link to="/page/blog1"><button>Try For Free</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopMenu",
};
</script>

<style scoped>
#top_menu {
  position: fixed;
  left: 0;
  top: 0;
  width: calc(100% - 4%);
  background-color: rgb(18, 20, 29);
  margin-left: 2%;
  margin-right: 2%;
  padding-bottom: 100px;
}

.logo-container {
  padding-top: 10px;
  padding-left: 10px;
  width: 30%;
  max-width: 200px;
  max-height: 50px;
  float: left;
}

#try-for-free {
  float: right;
}

@media screen and (min-width: 1400px) {
  #top_menu {
    margin-left: 10%;
    margin-right: 10%;
    width: calc(100% - 20%);
  }
}
</style>