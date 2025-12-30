<script setup lang="ts">
import { useRoute } from "vue-router";
import Menu from "./menu/Menu.vue";

const route = useRoute();
const activeRoute = route.name;
console.info("activeRoute", activeRoute);
</script>

<template>
  <aside>
    <div class="logo">👻</div>
    <Menu />
  </aside>
</template>

<style scoped lang="scss">
aside {
  grid-area: aside;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #1c1f2b;
  color: #fff;
}

.logo {
  display: grid;
  place-items: center;
  height: 40px;
}
</style>
