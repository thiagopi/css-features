<script setup lang="ts"></script>

<template>
    <section class="wrapper">
        <div>
            <h1>Property: corner-shape</h1>

            <p>Corner shape is a CSS property that allows you to define the shape of the corners of an element.</p>
            <p>It can be used to create rounded corners, beveled corners, notched corners, squared corners, squircle corners, and tag corners.</p>
            <p>Check <a href="https://caniuse.com/mdn-css_properties_corner-shape">Can I use</a> for browser support.</p>
        </div>

        <section class="types">
            <div class="card scoop">scoop</div>
            <div class="card bevel">bevel</div>
            <div class="card notch">notch</div>
            <div class="card square">square</div>
            <div class="card squircle">squircle</div>
            <div class="card round">round</div>
        </section>

        <div class="card tag">30% Discount</div>

        <div class="card inverted-corner">
            <h2>Inverted Corner</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>
    </section>
</template>

<style scoped lang="scss">

    $radius: 40px;

    .wrapper {
        display: grid;
        gap: 24px;
        align-self: start;
        width: 100%;
    }

    .types {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        // grid-template-rows: repeat(2, 1fr);
        gap: 12px;
        width: 100%;
    }

    .card {
        display: grid;
        place-items: center;
        width: 100%;
        height: 200px;
        background-color: #2e58fd;
        border-radius: $radius;
        corner-shape: scoop; // scoop, bevel, notch, square, squircle, round

        &.scoop {
            corner-shape: scoop;
            animation: radius 0.5s ease-in-out infinite alternate;
        }

        &.bevel {
            corner-shape: bevel;
            animation: radius 0.5s ease-in-out infinite alternate;
        }

        &.notch {
            corner-shape: notch;
            animation: radius 0.5s ease-in-out infinite alternate;
        }

        &.square {
            corner-shape: square;
            animation: radius 0.5s ease-in-out infinite alternate;
        }

        &.squircle {
            corner-shape: squircle;
            animation: radius 0.5s ease-in-out infinite alternate;
        }   

        &.round {
            corner-shape: round;
            animation: radius 0.5s ease-in-out infinite alternate;
        }

        &.tag {
            corner-shape: round bevel bevel round;
            border-radius: 1rem 4rem 4rem 1rem;
            width: 200px;
            height: 100px;
            padding-right: 20px;
            background-color: #ee004f;
        }

        &.inverted-corner {
            corner-shape: initial;
            border-radius: 12px;
            width: min(300px, 100%);
            height: auto;
            padding: 24px;
            background-image: linear-gradient(to bottom, #ffee8b, #f7d202 70%);
            anchor-name: --card;
            color: #1c1f2b;

            transition: 0.2s;

            &:hover {
                corner-top-right-shape: scoop;
                border-top-right-radius: 3.5rem;

                &::before {
                    scale: 1;
                }
            }

            &::before {
                content: '👽';
                display: grid;
                place-items: center;
                position: absolute;
                position-anchor: --card;
                position-area: top right;
                scale: 0;
                translate: -50% 50%;
                width: 5rem;
                height: 5rem;
                background-color: #6c4cff;
                border-radius: 50%;
                font-size: 2.5rem;
                z-index: 1;
                transition: 0.2s;
            }

            // To prevent bug on hover
            &::after {
                content: '';
                display: grid;
                place-items: center;
                position: absolute;
                position-anchor: --card;
                top: anchor(top);
                right: anchor(right);
                // position-area: top right;
                width: 5rem;
                height: 5rem;
                background-color: transparent;
                z-index: 2;
            }
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
    

   @keyframes bevel {
        from {
            scale: 0;
            corner-shape: initial;
        }

        to {
            scale: 1;
            corner-shape: bevel;
        }
   }
</style>