<template>
  <div class="home">
    <div class="hero"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {};
  }
};
</script>
<style>
.hero {
  background: url("/images/hero-bg.jpg") no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
}
</style>
