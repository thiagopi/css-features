<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const routes = router.options.routes;

const formatName = (name: string | symbol | undefined) => {
  if (!name) return '';
  
  return String(name)
    .split('-')
    .join(' ');
};
</script>

<template>
  <nav>
    <RouterLink
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
      class="menu-item"
      active-class="active"
    >
      {{ formatName(route.name) }}
    </RouterLink>
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
    &::first-letter {
      text-transform: uppercase;
    }

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
}
</style>
