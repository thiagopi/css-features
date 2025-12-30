<script setup lang="ts"></script>

<template>
    <nav>
        <ul>
            <li>Home</li>
            <li>Border animations</li>
            <li>Infinity carousel</li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
    nav {
        grid-area: menu;
        width: 100%;
        background-color: #1c1f2b;
        color: #fff;
        padding: 12px;
        display: grid;
        ul {
            display: grid;
            padding: 0;
            margin: 0;
            list-style: none;
            gap: 24px;
            li {
                padding: 0;
                margin: 0;
                cursor: pointer;
            }
        }
    }
</style>
