<template>
  <div class="blog-section">
    <!-- Welcome -->
    <div class="home-shop">
      <!-- Komponen home shop -->
      <HomeShop />
    </div>

    <!-- Section Background -->
    <section class="spad pt-14 pb-16">
      <div class="container flex mx-auto">
        <!-- Breadcrumb -->
        <div class="breadcrumb">
          <h2 class="text-white text-5xl font-semibold">Shop Games</h2>
          <span class="text-xl text-white font-bold mt-2 flex italic">
            <router-link to="/" class="text-white">Home</router-link>
            <span class="text-white">&nbsp;/&nbsp;</span>
            <router-link to="/shop" class="text-link-pink">Shop</router-link>
          </span>
        </div>
      </div>

      <!-- Input Search Product  -->
      <div class="mt-10 mb-5 flex justify-left">
        <!-- tailwind -->
        <label class="relative block">
          <span class="sr-only">Search</span>
          <span class="absolute ml-24 inset-y-0 left-0 flex items-center pl-2">
            <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 52.966 52.966"
              style="enable-background: new 0 0 52.966 52.966"
              xml:space="preserve"
            >
              <path
                d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
	c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
	C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
	S32.459,40,21.983,40z"
              />
            </svg>
          </span>
          <input
            class="ml-24 placeholder:italic text-link-pink placeholder:text-slate-400 block bg-white border focus:text-black border-slate-300 rounded-md py-2 pl-9 pr-20 shadow-sm focus:outline-none focus:border-link-pink focus:border-2 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
            v-model="search"
          />
        </label>
        <div class="button">
          <button
            class="bg-link-pink ml-4 px-12 py-1.5 rounded-lg text-white text-lg focus:outline-none border-link-pink"
            @click="searchGame"
          >
            Search
          </button>
        </div>
      </div>

      <!-- Product tersedia & product tidak tersedia -->
      <!-- Product Container - Product Card -->
      <div v-if="takTersedia" class="h-auto mb-10 justify-center">
        <center class="mt-10 m-auto">
          <svg
            class="emoji-404"
            enable-background="new 0 0 226 249.135"
            height="249.135"
            id="Layer_1"
            overflow="visible"
            version="1.1"
            viewBox="0 0 226 249.135"
            width="226"
            xml:space="preserve"
          >
            <circle cx="113" cy="113" fill="#FFE585" r="109" />
            <line
              enable-background="new    "
              fill="none"
              opacity="0.29"
              stroke="#6E6E96"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="8"
              x1="88.866"
              x2="136.866"
              y1="245.135"
              y2="245.135"
            />
            <line
              enable-background="new    "
              fill="none"
              opacity="0.17"
              stroke="#6E6E96"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="8"
              x1="154.732"
              x2="168.732"
              y1="245.135"
              y2="245.135"
            />
            <line
              enable-background="new    "
              fill="none"
              opacity="0.17"
              stroke="#6E6E96"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="8"
              x1="69.732"
              x2="58.732"
              y1="245.135"
              y2="245.135"
            />
            <circle cx="68.732" cy="93" fill="#6E6E96" r="9" />
            <path
              d="M115.568,5.947c-1.026,0-2.049,0.017-3.069,0.045  c54.425,1.551,98.069,46.155,98.069,100.955c0,55.781-45.219,101-101,101c-55.781,0-101-45.219-101-101  c0-8.786,1.124-17.309,3.232-25.436c-3.393,10.536-5.232,21.771-5.232,33.436c0,60.199,48.801,109,109,109s109-48.801,109-109  S175.768,5.947,115.568,5.947z"
              enable-background="new    "
              fill="#FF9900"
              opacity="0.24"
            />
            <circle cx="156.398" cy="93" fill="#6E6E96" r="9" />
            <ellipse
              cx="67.732"
              cy="140.894"
              enable-background="new    "
              fill="#FF0000"
              opacity="0.18"
              rx="17.372"
              ry="8.106"
            />
            <ellipse
              cx="154.88"
              cy="140.894"
              enable-background="new    "
              fill="#FF0000"
              opacity="0.18"
              rx="17.371"
              ry="8.106"
            />
            <path
              d="M13,118.5C13,61.338,59.338,15,116.5,15c55.922,0,101.477,44.353,103.427,99.797  c0.044-1.261,0.073-2.525,0.073-3.797C220,50.802,171.199,2,111,2S2,50.802,2,111c0,50.111,33.818,92.318,79.876,105.06  C41.743,201.814,13,163.518,13,118.5z"
              fill="#FFEFB5"
            />
            <circle
              cx="113"
              cy="113"
              fill="none"
              r="109"
              stroke="#6E6E96"
              stroke-width="8"
            />
          </svg>
          <div class="tracking-widest mt-6">
            <span class="text-gray-500 text-xl"
              >Sorry, We couldn't find what you are looking for!</span
            >
          </div>
        </center>
      </div>
      <div class="product-container gap-12">
        <div class="m-4" v-for="product in games" :key="product.id">
          <CardView :product="product" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import HomeShop from '@/components/Shop-Card/HomeShop.vue'
import CardView from '@/components/Shop-Card/CardView.vue'
export default {
  data() {
    return {
      games: [],
      search: '',
      takTersedia: false
    }
  },
  components: {
    CardView,
    HomeShop
  },

  computed: {},

  methods: {
    setProduct(data) {
      this.games = data
    },

    searchGame() {
      // Button axios filter data server json
      axios
        .get('http://localhost:3000/games/?q=' + this.search)
        .then((response) => {
          const setProduct = response.data
          if (setProduct.length === 0) {
            // filter gagal, alert games tidak ditemukan
            this.takTersedia = true
          } else {
            // menampilkan item yang ditemukan
            this.setProduct(response.data),
              console.log('Berhasil mencari ' + this.search),
              (this.takTersedia = false)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted() {
    // Axios get data
    axios
      .get('http://localhost:3000/games')
      .then((response) =>
        // handle success
        this.setProduct(response.data)
      )
      .catch((error) =>
        // handle error
        console.log(error)
      )
  }
}
</script>

<style scoped>
.spad {
  background: linear-gradient(45deg, #501755 0%, #2d1854 100%);
  border-bottom: 2px solid #b01ba5;
}

.product-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 77px 0 77px;
}

.emoji-404 {
  position: relative;
  animation: mymove 2.5s infinite;
}

@keyframes mymove {
  33% {
    top: 0px;
  }
  66% {
    top: 20px;
  }
  100% {
    top: 0px;
  }
}
</style>
