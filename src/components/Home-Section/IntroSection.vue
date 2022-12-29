<template>
  <div id="intro-section">
    <section class="section">
      <div class="container mx-auto">
        <div class="flex grid-cols-3 gap-6 mx-auto my-11 text-left">
          <div class="intro-text text-white mr-5">
            <div
              class="text-lg font-bold mb-5 hover:text-link-pink cursor-pointer"
            >
              12.11.2022 / in <span class="text-link-pink">Games</span>
            </div>
            <h3
              class="mb-7 max-w-5xl text-3xl font-bold hover:text-link-pink cursor-pointer"
            >
              The Best Game Online Is Out Now !
            </h3>
            <p
              class="text base font-medium text-grey-content mb-12 hover:text-white cursor-pointer"
            >
              Sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida ncididunt ut labore ....
            </p>
            <router-link
              to="/shop"
              class="text-white font-bold text-md italic hover:text-link-pink"
              >READ MORE
              <img
                src="/assets/double-arrow.png"
                class="w-4 h-4 ml-3 inline-block"
              />
            </router-link>
          </div>
          <div class="intro-text text-white inline-block mr-5">
            <div
              class="text-lg font-bold mb-5 hover:text-link-pink cursor-pointer"
            >
              12.12.2022 / in <span class="text-link-pink">Playstation</span>
            </div>
            <h3
              class="mb-7 max-w-5xl text-3xl font-bold hover:text-link-pink cursor-pointer"
            >
              Get this game at a promo price
            </h3>
            <p
              class="text base font-medium text-grey-content mb-12 hover:text-white cursor-pointer"
            >
              Sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida ncididunt ut labore ....
            </p>
            <router-link
              to="/shop"
              class="text-white font-bold text-md italic hover:text-link-pink"
              >READ MORE
              <img
                src="/assets/double-arrow.png"
                class="w-4 h-4 ml-3 inline-block"
              />
            </router-link>
          </div>
          <div class="intro-text text-white inline-block mr-5">
            <div
              class="text-lg font-bold mb-5 hover:text-link-pink cursor-pointer"
            >
              12.13.22 / in <span class="text-link-pink">Reviews</span>
            </div>
            <h3
              class="mb-7 max-w-5xl text-3xl font-bold hover:text-link-pink cursor-pointer"
            >
              Get this game at a promo price
            </h3>
            <p
              class="text base font-medium text-grey-content mb-12 hover:text-white cursor-pointer"
            >
              Sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida ncididunt ut labore ....
            </p>
            <router-link
              to="shop"
              class="text-white font-bold text-md italic hover:text-link-pink"
              >READ MORE
              <img
                src="/assets/double-arrow.png"
                class="w-4 h-4 ml-3 inline-block"
              />
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.section {
  background-color: #0c062e;
  padding: 60px 60px;
  border-bottom: 2px solid #b01ba5;
}
</style>
