<template>
  <div class="blog-section">
    <section class="spad pt-14 pb-16">
      <div class="container flex mx-auto">
        <div class="row -mr-2 -ml-10 flex">
          <div class="col max-w-3xl">
            <div class="section-title text-white text-left font-bold text-3xl">
              <h2 class="italic cursor-pointer">LATEST NEWS</h2>
              <ul
                class="list-none flex text-white text-base mt-5 cursor-pointer"
              >
                <li
                  v-for="title in titles"
                  :key="title.id"
                  class="mr-4 py-2 px-5 hover:bg-link-pink"
                >
                  <router-link :to="title.router">{{
                    title.names
                  }}</router-link>
                </li>
              </ul>
              <div class="section-content">
                <div class="content-1 flex mt-14">
                  <img
                    src="/assets/1.jpg"
                    class="max-w-xs mr-10 cursor-pointer object-cover"
                  />
                  <div class="text-lg font-semibold mb-5 cursor-pointer">
                    <span class="hover:text-link-pink">12.12.2022 / in </span>
                    <span class="text-link-pink">Playstation</span>
                    <h2 class="mt-5 text-3xl hover:text-link-pink">
                      {{ title }}
                    </h2>
                    <p
                      class="mt-7 text base font-medium text-grey-content mb-6 hover:text-white cursor-pointer"
                    >
                      Sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Quis
                      ipsum suspendisse ultrices gravida ncididunt ut labore
                      ....
                    </p>

                    <router-link
                      :to="'/'"
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

              <div class="content-1 flex mt-20">
                <img
                  src="/assets/2.jpg"
                  class="max-w-xs mr-10 cursor-pointer object-cover"
                />
                <div class="text-lg font-semibold mb-5 cursor-pointer">
                  <span class="hover:text-link-pink">13.12.2022 / in </span>
                  <span class="text-link-pink">Playstation</span>
                  <h2 class="mt-5 text-3xl hover:text-link-pink">
                    {{ title }}
                  </h2>
                  <p
                    class="mt-7 text base font-medium text-grey-content mb-6 hover:text-white cursor-pointer"
                  >
                    Sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida ncididunt ut labore ....
                  </p>
                  <router-link
                    :to="'/'"
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
          </div>
        </div>
        <div class="banner-promotion">
          <h2
            class="cursor-pointer font-bold text-xl text-white mb-5 mt-1 relative top-36 left-24 hover:text-link-pink"
          >
            TRENDING !
          </h2>
          <img
            src="/assets/add.jpg"
            alt="img-promotion"
            class="w-auto h-72 relative top-36 left-24"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titles: [
        { names: 'Racing', router: '/' },
        { names: 'Strategy', router: '/' },
        { names: 'Shooter', router: '/' },
        { names: 'RPG', router: '/' },
        { names: 'Online', router: '/' }
      ],
      title: 'The best online game is out now!'
    }
  }
}
</script>

<style scoped>
.spad {
  background: linear-gradient(45deg, #501755 0%, #2d1854 100%);
  border-bottom: 2px solid #b01ba5;
}

li {
  background-color: #6f2b95;
}
</style>
