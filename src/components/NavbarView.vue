<template>
  <div class="NavbarView">
    <nav
      class="navbar relative flex flex-wrap items-center justify-between px-2 py-3 shadow-blue-500/50"
    >
      <div
        class="container px-4 mx-auto flex flex-wrap items-center justify-between"
      >
        <div
          class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
        >
          <router-link
            class="text-center text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            :to="'/'"
          >
            <span class="text-pink-500 hover:text-white">END</span
            ><span class="text-white hover:text-pink-500">GAME</span>
          </router-link>
        </div>
        <div class="lg:flex flex-grow items-center" id="example-navbar-warning">
          <ul class="flex flex-col lg:flex-row list-none ml-auto">
            <li class="nav-item">
              <router-link
                to="/"
                class="hover:text-pink-500 text-base px-3 py-2 flex items-center font-bold leading-snug text-white"
              >
                Home
                <ion-icon
                  name="home-outline"
                  class="ml-1 text-white text-base py-2 items-center"
                ></ion-icon>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="shop"
                class="hover:text-pink-500 text-base px-3 py-2 flex items-center font-bold leading-snug text-white"
              >
                Store
                <ion-icon
                  name="storefront-outline"
                  class="ml-1 text-white text-base py-2 items-center"
                ></ion-icon>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="cart"
                class="hover:text-pink-500 text-base px-3 py-2 flex items-center font-bold leading-snug text-white"
              >
                Cart
                <ion-icon
                  name="cart-outline"
                  class="ml-1 text-white text-base py-2 items-center"
                ></ion-icon>
                <span
                  class="bg-link-pink rounded-md ml-2 px-1 text-white text-sm"
                >
                  {{ jumlah_order.length }}
                </span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/"
                class="hover:text-pink-500 text-base px-3 py-2 flex items-center font-bold leading-snug text-white"
              >
                Contact
                <ion-icon
                  name="person-outline"
                  class="ml-1 text-white text-base py-2 items-center"
                ></ion-icon>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'NavbarView',
  data() {
    return {
      jumlah_order: []
    }
  },

  methods: {
    setJumlah(data) {
      this.jumlah_order = data
    }
  },

  mounted() {
    axios
      .get('http://localhost:3000/keranjangs')
      .then((response) => this.setJumlah(response.data))
      .catch((error) => console.log(error))
  }
}
</script>

<style scoped>
.navbar {
  background-color: #0c062e;
}
</style>
