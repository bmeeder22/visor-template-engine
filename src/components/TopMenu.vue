<template>
  <div id="top_menu">
    <div class="logo-container">
      <img src="../assets/visor-logo.svg" />
    </div>
    <div id="try-for-free">
      <button>Try For Free</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopMenu",
};
</script>

<style>
#top_menu {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: rgb(18, 20, 29);
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

button {
  margin-top: 10px;
  margin-right: 10px;
  background-color: rgb(69, 206, 147);
  padding: 4px;
  border: none;
  color: rgb(18, 20, 29);
  border-radius: 4px;
}
</style>