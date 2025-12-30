<script setup lang="ts"></script>

<template>
    <div class="wrapper">
        <div class="card">
            <h2>Card 1</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quod.
            </p>
        </div>
        <div class="card2">
            <h2>Card 2</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quod.
            </p>
        </div>
        <div class="card">
            <h2>Card 3</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quod.
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .wrapper {
    display: flex;
    gap: 24px;
    width: 100%;
    justify-content: center;
    align-items: center;
}
.card, .card2 {
 position: relative;
 margin: 0 auto;
 width: 300px;
 background-color: #1c1f2b;
 text-align: center;
 border-radius: 12px;
 color: #fff;
 padding: 12px;

 &::after, &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-image: conic-gradient(from var(--angle),#ff4545, #00ff99, #006aff, #ff0095, #ff4545);
    border-radius: 12px;
    z-index: -1;
    padding: 3px;
    box-sizing: unset;
    animation: 3s spin linear infinite; 
 }

 &::before {
    filter: blur(1.5rem); 
    opacity: 0.5;
 }
}

.card2::after {
    background-image: conic-gradient(from var(--angle), transparent 90%, #006aff);
}

.card2::before {
    background-image: conic-gradient(from var(--angle), transparent 90%, #006aff);
}

// The --angle property is a custom property that is used to animate the border of the card.
@property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
}

@keyframes spin {
    
    from {
        --angle: 0deg;
    }
    to {
        --angle: 360deg;
    }
}

</style>