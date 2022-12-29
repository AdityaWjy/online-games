<template>
  <div id="cooming-complete">
    <div class="cooming-soon">
      <h2 class="text-white text-4xl italic cursor-pointern text-left">
        Cooming Soon !
      </h2>
      <div class="mt-7">
        <ul class="list-none flex text-white text-base mt-5 cursor-pointer">
          <li
            v-for="genre in genres"
            :key="genre.id"
            class="mr-4 py-2 px-5 hover:bg-link-pink rounded-md"
          >
            {{ genre.names }}
          </li>
        </ul>

        <div class="mt-10">
          <div class="relative" style="height: 30rem">
            <img
              src="./order-assets/the-last-of-us.jpg"
              class="w-full h-80 static"
            />
            <div class="flex absolute top-40 left-0 float-left">
              <img
                src="./order-assets/last.jpg"
                class="w-96 h-48 ml-28 mt-32 rounded-lg shadow-2xl"
              />
              <div class="mt-52 ml-16 text-left">
                <span class="text-white text-xl font-light mb-4"
                  >The Last of Us Part I</span
                >
                <br />
                <div class="mt-4 w-4/5">
                  <p class="text-white font-light text-sm">
                    Experience the emotional storytelling and unforgettable
                    characters of The Last of Us, winner of over 200 Game of the
                    Year awards.
                  </p>
                </div>
                <div class="mt-4 w-4/5">
                  <p class="text-white font-light text-sm">
                    In a ravaged civilization, where infected and hardened
                    survivors run rampant, Joel, a weary protagonist, is hired
                    to smuggle 14-year-old Ellie out of a military quarantine
                    zone. However, what starts as a small job soon transforms
                    into a brutal cross-country journey.
                  </p>
                </div>

                <div class="mt-4">
                  <button
                    class="text-sm font-bold w-32 h-10 rounded-full bg-link-pink text-white"
                  >
                    Find out more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      genres: [
        { names: 'Racing' },
        { names: 'Strategy' },
        { names: 'Shooter' },
        { names: 'RPG' },
        { names: 'Online' }
      ]
    }
  }
}
</script>

<style scoped>
li {
  background-color: #6f2b95;
}
</style>
