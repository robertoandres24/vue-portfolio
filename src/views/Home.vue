<template>
  <div class="home">
    <div class="hero">
      <div class="bg-overlay"></div>
    </div>
    <div class="welcome">
      <h1>
        Hi, I'm
        <span class="name">Roberto Obando</span>
      </h1>
    </div>
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
<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
}
.hero {
  background: url("/images/hero-bg.jpg") no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  background-position: center;
  position: absolute;
}
.bg-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
.welcome {
  padding: 2rem;
  position: relative;
  @include font-black();
  .name {
    color: $green;
  }
}
</style>
