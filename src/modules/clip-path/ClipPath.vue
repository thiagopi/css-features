<script setup lang="ts"></script>

<template>
    <section class="wrapper">
        <div>
            <h1>Property: clip-path</h1>

            <p>Clip-path is a CSS property that allows you to define the shape of the area of an element that is visible.</p>
            <p>It can be used to create rounded corners, beveled corners, notched corners, squared corners, squircle corners, and tag corners.</p>
        
            <p>Check <a href="https://caniuse.com/?search=clip-path" target="_blank">Can I use</a> for browser support.</p>
        </div>

        <h2>polygons</h2>

        <section class="types">
            <div class="polygon">polygon</div>
            <div class="polygon star">star</div>
            <div class="polygon circle">circle</div>
            <div class="polygon ellipse">ellipse</div>
            <div class="polygon inset">inset</div>
            <div class="polygon path">path</div>
        </section>

        <h2>arcs</h2>

        <section class="types">
            <div class="shape arc-star">star</div>
        </section>

    </section>
</template>

<style scoped lang="scss">

    $radius: 40px;

    .types {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        // grid-template-rows: repeat(2, 1fr);
        gap: 12px;
        width: 100%;
    }

    .polygon {
        display: grid;
        place-items: center;
        width: 100%;
        aspect-ratio: 1/1;
        background-color: #2e58fd;
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);

        &.star {
            clip-path: polygon(
                50% 0%, 
                61% 35%, 
                98% 35%, 
                68% 57%, 
                79% 91%, 
                50% 70%, 
                21% 91%, 
                32% 57%,    
                2% 35%, 
                39% 35%
            );
        }

        &.circle {
            clip-path: circle(50% at 50% 50%);
        }

        &.ellipse {
            clip-path: ellipse(40% 25% at 50% 50%);
        }

        &.inset {
            clip-path: inset(10% 20% 30% 40% round 10%);
        }

        &.path {
            clip-path: path('M 0 200 L 0 200 C 0 16 0 16 90 112 C 180 208 180 208 180 200 L 180 200 L 0 200');
        }
    }

    .shape {
        display: grid;
        place-items: center;
        width: 100%;
        aspect-ratio: 1/1;
        background-color: #2e58fd;

        // arc
        &.arc-star {
            clip-path: shape(
                from 50% 0%,
                arc to 100% 50% of 50%,
                arc to 50% 100% of 50%,
                arc to 0% 50% of 50%,
                arc to 50% 0% of 50%,
                close
            );
        }
    }
    

   @keyframes radius {
        from {
            border-radius: 0;
        }

        to {
            border-radius: $radius;
        }
   }
</style>