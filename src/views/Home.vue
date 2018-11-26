<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>{{ message }}</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      message: "Welcome to my vue portfolio"
    };
  }
};
</script>
