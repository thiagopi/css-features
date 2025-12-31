<script setup lang="ts">
    import { faker } from '@faker-js/faker';

    const images = Array.from({ length: 10 }, () => faker.image.url({ width: 300, height: 300 }));
</script>

<template>
    <section class="wrapper">
        
        <h1>Carousel</h1>
        <p>Properties: anchor position, scroll-snapping and scroll-button</p>

        <p>Until 2025-12-31, this features are only supported by Chrome and Edge</p>>

        <div class="carousel">
            <img class="card" v-for="image in images" :key="image" :src="image" alt="">
        </div>


    </section>
</template>

<style scoped lang="scss">

.carousel {
    // position: relative;
    display: flex;
    gap: 1rem;
    max-width: 600px;
    // height: max-content;
    margin: 0 auto;
    overflow-x: auto;
    scroll-behavior: smooth;
    anchor-name: --carousel;
    scroll-snap-type: x mandatory;
    scroll-marker-group: after;

    &::scroll-marker-group {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        z-index: 10;
    }

    &::-webkit-scrollbar {
        display: none;
    }

    &::scroll-button(right), &::scroll-button(left) {
        content: '⮕';
        position: fixed;
        transform: translateY(-50%);
        border: none;
        background-color: #2e58fd;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        padding-bottom: .1rem;
        color: #fff;
        font-family: Consolas, monospace;
        font-size: 2rem;
        cursor: pointer;
        position-anchor: --carousel;
        position-area: center right;
        transform: translateX(-50%) translateY(0);
    }

    &::scroll-button(left) {

        position-area: left center;
        transform: translate(50%, 0) rotate(180deg);
    }

    &::scroll-button(right):disabled, &::scroll-button(left):disabled {
        opacity: .5;
        cursor: not-allowed;
    }
}

.card {
    display: flex;
    flex: 0 0 20rem;
    align-content: center;
    aspect-ratio: 5/3;
    background-color: #2e58fd;
    padding: 1rem;
    border-radius: 0.5rem;
    text-align: center;
    scroll-snap-align: center;

    &::scroll-marker {
        content: '';
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: #1c1c1c;
        cursor: pointer;
        
    }

    &::scroll-marker:target-current {
        background-color: #2e58fd;
    }

    @media (max-width: 500px) {
        flex: 0 0 100%;
    }
}
    
    

   @keyframes radius {
        from {
            border-radius: 0;
        }

        to {
            border-radius: 0;
        }
   }
</style>