<template>
  <div id="text-sony">
    <img src="./GOW.png" class="w-4/5 h-auto" />

    <div class="ml-20">
      <div class="mt-2">
        <span class="text-white font-bold">Sony Interactive Entertaiment.</span>
      </div>

      <div class="mt-4">
        <span class="text-white text-sm font-bold"
          >Available on
          <span
            class="border p-2 cursor-pointer hover:bg-white hover:text-black"
          >
            <a :href="playstation4" target="blank_" rel="noopener">PS4</a></span
          >
          &nbsp;
          <span
            class="border p-2 cursor-pointer hover:bg-white hover:text-black"
            :href="playstation5"
          >
            <a :href="playstation5" target="blank_" rel="noopener">PS5</a>
          </span></span
        >
      </div>

      <div class="text-price text-lg text-white mt-6 font-bold">
        <span>Rp. 750.000</span>
      </div>

      <div class="button mt-6 text-base text-white font-semibold">
        <button
          class="border-2 rounded-lg w-48 h-9 cursor-pointer hover:bg-white hover:text-black"
        >
          Buy
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playstation4: 'https://www.playstation.com/en-id/ps4/',
      playstation5: 'https://www.playstation.com/en-us/ps5/'
    }
  }
}
</script>

<style scoped></style>
