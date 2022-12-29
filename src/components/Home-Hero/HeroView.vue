<template>
  <div class="HeroView">
    <div class="hero-item bg-hero-pattern relative bg-cover text-center">
      <div class="text-container absolute mx-w-auto">
        <h2
          class="fade-in text-game text-pink-300 font-bold hover:text-pink-500 cursor-pointer"
        >
          {{ gantiJudul }}
        </h2>
        <p
          class="text-play text-pink-500 text-4xl mb-8 font-semibold italic hover:text-pink-600"
        >
          Let's Play Game!
        </p>

        <button
          class="btn-read mt-8 italic text-black w-48 h-14 text-semibold bg-white px-4 py-2 hover:text-red-100 hover:bg-red-700 ease-out duration-300 text-sm font-bold"
          @click="gantiJudul = 'Welcome!'"
        >
          READ MORE
          <img src="/assets/double-arrow.png" class="ml-2 inline-block" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroView',
  data() {
    return {
      gantiJudul: 'Game On!'
    }
  }
}
</script>

<style scoped>
.hero-item {
  border-bottom: 2px solid #b01ba5;
  height: 519px;
  width: 100%;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.text-container {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.btn-read {
  box-shadow: 2px 2px 2px 2px purple;
  left: 0;
  top: 0;
  display: inline-block;
  text-align: center;
}

.text-play {
  text-shadow: 1px 1px red;
}
.text-game {
  text-shadow: 4px 4px red;
  font-size: 7rem;
}
</style>
