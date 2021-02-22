<template>
  <Game />
</template>

<script lang="ts">
import Game from "@/components/Game.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: { Game }
});
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
