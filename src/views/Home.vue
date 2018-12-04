<template>
  <div class="home">
    <div class="hero">
      <div class="bg-overlay"></div>
    </div>
    <div class="container">
      <div class="welcome">
        <h1>
          Hi, I'm
          <span class="name">Roberto Obando</span>
        </h1>
        <h3 class="wrapper-element">
          <span class="element"></span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Typed from "typed.js";

export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    let options = {
      strings: [
        "A Full-stack developer",
        "Working remotely from Osorno, Chile"
      ],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 1000,
      onComplete: self => {
        console.log(self);
      }
    };

    let typed = new Typed(".element", options);
  }
};
</script>
<style lang="scss">
.container {
  padding: 6rem;
}
.home {
  height: 100vh;
  width: 100%;
  color: white;
  position: relative;
}
.hero {
  background: url("/static/images/hero-bg.jpg") no-repeat;
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
  position: absolute;
  top: 39%;

  @include font-regular();
  .name {
    color: $blue;
  }
}
// typed.js things
.wrapper-element {
  display: inline-block;
  margin: 0.5rem 0;
  min-height: 52px;
}
.typed-cursor {
}
</style>
