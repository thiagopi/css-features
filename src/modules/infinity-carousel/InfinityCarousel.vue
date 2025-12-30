<script setup lang="ts"></script>

<template>
    <section id="infinity-carousel">
    <div class="carousel">
      <div class="group">
        <div class="card">❌</div>
        <div class="card">👽</div>
        <div class="card">🔑</div>
        <div class="card">📦</div>
        <div class="card">😀</div>
        <div class="card">🥶</div>
        <div class="card">🤯</div>
        <div class="card">🚀</div>
        <div class="card">🎃</div>
        <div class="card">👻</div>
        <div class="card">🧟</div>
        <div class="card">🧪</div>
        <div class="card">🧬</div>
      </div>

      <div aria-hidden="true" class="group">
        <div class="card">❌</div>
        <div class="card">👽</div>
        <div class="card">🔑</div>
        <div class="card">📦</div>
        <div class="card">😀</div>
        <div class="card">🥶</div>
        <div class="card">🤯</div>
        <div class="card">🚀</div>
        <div class="card">🎃</div>
        <div class="card">👻</div>
        <div class="card">🧟</div>
        <div class="card">🧪</div>
        <div class="card">🧬</div>
      </div>
    </div>

    <div class="carousel vertical">
      <div class="group vertical">
        <div class="card">❌</div>
        <div class="card">👽</div>
        <div class="card">🔑</div>
        <div class="card">📦</div>
        <div class="card">😀</div>
        <div class="card">🥶</div>
        <div class="card">🤯</div>
        <div class="card">🚀</div>
        <div class="card">🎃</div>
        <div class="card">👻</div>
        <div class="card">🧟</div>
        <div class="card">🧪</div>
        <div class="card">🧬</div>
      </div>

      <div aria-hidden="true" class="group vertical">
        <div class="card">❌</div>
        <div class="card">👽</div>
        <div class="card">🔑</div>
        <div class="card">📦</div>
        <div class="card">😀</div>
        <div class="card">🥶</div>
        <div class="card">🤯</div>
        <div class="card">🚀</div>
        <div class="card">🎃</div>
        <div class="card">👻</div>
        <div class="card">🧟</div>
        <div class="card">🧪</div>
        <div class="card">🧬</div>
      </div>
    </div>
    </section>
</template>

<style scoped lang="scss">
#infinity-carousel {
    display: grid;
    gap: 32px;
    place-items: center;
}
.carousel {
  position: relative;
  display: flex;
  gap: 1rem;
  width: 100%;
  margin: 0 auto;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  &.vertical {
    flex-direction: column;
    width: 5rem;
    height: 70vh;
  }
}

.group {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  animation: spin 5s infinite linear;

  &.vertical {
    flex-direction: column;
    animation: spin-vertical 5s infinite linear;
  }
}

.card {
  display: grid;
  place-items: center;
  gap: 24px;
  flex: 0 0 5rem;
  width: 5rem;
  height: 5rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: cornflowerblue;
  border-radius: 0.2rem;
  color: white;
  text-align: center;
}

@keyframes spin {
  from {
    transform: translate(0);
  }
  to {
    transform: translate(-100%);
  }
}

@keyframes spin-vertical {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}

</style>