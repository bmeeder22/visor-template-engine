<template>
  <div id="bottom_menu">
    <div class="logo-container">
      <p>© Copyright 2021 RocketVisor Corporation. All rights reserved.</p>
    </div>
    <div id="icons">
      <a
        href="https://twitter.com/visordotus"
        target="_blank"
        class="social-link-item w-inline-block"
        ><img
          src="https://uploads-ssl.webflow.com/60df66fdcda656433d794695/60df66fdcda65678b0794719_twitter.svg"
          alt=""
      /></a>
      <a
        href="https://www.instagram.com/visor.us/"
        target="_blank"
        class="social-link-item w-inline-block"
        ><img
          src="https://uploads-ssl.webflow.com/60df66fdcda656433d794695/60df66fdcda656bd8f7946e5_instagram.svg"
          alt=""
      /></a>
      <a
        href="https://www.facebook.com/visordotus"
        target="_blank"
        class="social-link-item w-inline-block"
        ><img
          src="https://uploads-ssl.webflow.com/60df66fdcda656433d794695/60df66fdcda6567b257946d0_facebook.svg"
          alt=""
      /></a>
      <a
        href="https://www.linkedin.com/company/10579801"
        target="_blank"
        class="social-link-item w-inline-block"
        ><img
          src="https://uploads-ssl.webflow.com/60df66fdcda656433d794695/60df66fdcda6565d2a794734_linkedin.svg"
          alt=""
      /></a>
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

#icons {
  float: right;
}

@media screen and (min-width: 1400px) {
  #top_menu {
    margin-left: 10%;
    margin-right: 10%;
    width: calc(100% - 20%);
  }
}

.social-link-item {
  margin: 10px;
}
</style>