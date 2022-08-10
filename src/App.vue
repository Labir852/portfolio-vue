<template>
  <NavHeader />
  <router-view />
</template>

<script>
import NavHeader from "./components/NavHeader.vue";

export default {
  name: "App",
  components: {
    NavHeader,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playball&family=Poppins:wght@300&display=swap");
@font-face {
  font-family: AnthoniSignature;
  src: url(./image/AnthoniSignature.ttf);
}
.logo {
  font-family: AnthoniSignature;
  font-weight: bold;
}
#app {
  font-family: SourceCodePro !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
}
body {
  background-color: #000000 !important;
}
</style>
