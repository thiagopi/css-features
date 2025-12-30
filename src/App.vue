<script setup lang="ts">
import Header from "./modules/header/Header.vue";
import SideBar from "./modules/side-bar/SideBar.vue";
</script>

<template>
  <section id="main-wrapper">
    <Header />
    <SideBar />
     <main>
      <RouterView />
   </main>
  </section>
</template>

<style scoped lang="scss">
    #main-wrapper {
        margin: 0;
        padding: 0;
        display: grid;
        width: 100%;
        max-height: 100vh;
        grid-template-columns: 12rem 1fr;
        grid-template-rows: repeat(2, minmax(40px, auto));
        grid-template-areas:
            "aside header"
            "aside main"
    }

    main {
      display: grid;
        place-items: center;
        grid-area: main;
        padding: 24px;
        height: calc(100vh - 40px);
    }
  </style>
