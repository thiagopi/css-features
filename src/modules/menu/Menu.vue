<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const activeRoute = route.name;
</script>

<template>
  <nav>
    <RouterLink to="/" class="menu-item" :class="activeRoute === 'home' ? 'active' : ''"
      >Home</RouterLink
    >
    <RouterLink
      to="/border-animations"
      class="menu-item"
      :class="activeRoute === 'border-animations' ? 'active' : ''"
      >Border animations</RouterLink
    >
    <RouterLink
      to="/infinity-carousel"
      class="menu-item"
      :class="activeRoute === 'infinity-carousel' ? 'active' : ''"
      >Infinity carousel</RouterLink
    >
  </nav>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin: 0;
  list-style: none;
  gap: 8px;
  grid-area: menu;
  width: 100%;
  background-color: #1c1f2b;
  color: #fff;

  .menu-item {
    all: unset;
    padding: 16px 12px;
    margin: 0;
    width: 100%;
    height: max-content;
    cursor: pointer;
    line-height: 0%;
    border-radius: 16px;
    box-sizing: border-box;

    &.active {
      background-color: rgba(25, 140, 168, 1);

      &:hover {
        background-color: rgba(25, 140, 168, 1);
      }
    }
    &:hover {
      background-color: rgba(25, 140, 168, 0.5);
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    list-style: none;
    gap: 8px;

    li {
      padding: 16px 12px;
      margin: 0;
      width: 100%;
      height: max-content;
      cursor: pointer;
      line-height: 0%;
      border-radius: 16px;

      &.active {
        background-color: rgba(25, 140, 168, 1);
      }
      &:hover {
        background-color: rgba(25, 140, 168, 0.5);
      }
    }
  }
}
</style>
