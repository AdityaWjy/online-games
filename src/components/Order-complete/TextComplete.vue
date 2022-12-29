<template>
  <div id="text-complete">
    <div class="end-game font-bold text-7xl">
      <span class="text-pink-500 hover:text-white">END</span>
      <span class="text-white hover:text-pink-500">GAME</span>
    </div>

    <div class="mt-10">
      <span class="text-white text-2xl font-semibold">THANKS FOR ORDER !</span>
    </div>

    <div class="mt-5 w-96">
      <span class="text-white text-xl font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio
        earum repellat quaerat voluptatibus placeat nam,
      </span>
      <transition name="fadeMe">
        <span class="text-white text-xl font-medium" v-if="showing">
          commodi optio pariatur est quia magnam eum harum corrupti dicta,
          aliquam sequi voluptate quas.
        </span>
      </transition>
    </div>

    <div class="button">
      <button
        class="btn-read mt-8 italic text-black w-48 h-14 text-semibold bg-white px-4 py-2 hover:text-red-100 hover:bg-red-700 ease-out duration-300 text-sm font-bold"
        @click="showing = !showing"
      >
        READ MORE
        <img src="/assets/double-arrow.png" class="ml-2 inline-block" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showing: false
    }
  }
}
</script>

<style scoped>
.btn-read {
  box-shadow: 2px 2px 2px 2px purple;
  left: 0;
  top: 0;
  display: inline-block;
  text-align: center;
}

.fadeMe-enter {
  opacity: 0;
}

.fadeMe-enter-active {
  transition: opacity 1s;
}

.fadeMe-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
</style>
