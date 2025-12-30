<script setup lang="ts">
import Menu from "./modules/menu/Menu.vue";
import Header from "./modules/header/Header.vue";
import Footer from "./modules/footer/Footer.vue";
</script>

<template>
  <section>
    <Header />
    <Menu />
    <!-- <router-view />  -->
     <main>
      <RouterView />
   </main>
   <Footer />
  </section>
</template>

<style scoped lang="scss">
    section {
        margin: 0;
        padding: 0;
        display: grid;
        width: 100%;
        max-height: 100vh;
        grid-template-columns: 12rem 1fr;
        grid-template-rows: repeat(3, minmax(40px, auto));
        grid-template-areas:
            "header header"
            "menu main"
            "footer footer";
    }

    main {
        padding: 24px;
        height: calc(100vh - 80px);
    }
  </style>
