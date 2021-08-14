<template>
  <div id="bottom_menu">
    <div class="logo-container">
      <p>© Copyright 2021 RocketVisor Corporation. All rights reserved.</p>
    </div>
    <div id="try-for-free">
      <button>BOTTOM!!!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopMenu",
};
</script>

<style scoped>
#bottom_menu {
  width: calc(100% - 4%);
  background-color: rgb(18, 20, 29);
  padding-bottom: 100px;
}

.logo-container {
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