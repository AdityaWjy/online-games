<template>
  <div id="game-detail">
    <section class="spad pt-14 pb-16">
      <div class="container mx-auto">
        <!-- breadcrumb -->
        <div class="breadcrumb">
          <h2 class="text-white text-5xl font-semibold text-left">
            Game Detail
          </h2>
          <span class="text-xl text-white font-bold mt-2 flex italic">
            <router-link to="/" class="text-white">Home</router-link>
            <span class="text-white">&nbsp;/&nbsp;</span>
            <router-link to="/shop" class="text-link-pink">Shop</router-link>
          </span>
        </div>
        <!-- Game detail -->
        <div class="grid grid-rows-2 grid-flow-col gap-4 mt-12">
          <div class="row-span-3 justify-left">
            <img :src="'/assets/' + product.gambar" class="img rounded-md" />
          </div>
          <div class="row-span-2 col-span-2">
            <h2 class="text-3xl font-bold text-white text-center mb-4">
              {{ product.nama }}
            </h2>
            <hr />

            <h4 class="text-left text-white text-2xl mt-4">
              Harga :
              <span class="font-bold">{{ product.harga | currency }}</span>
            </h4>
            <form class="mt-4">
              <div class="relative shadow-sm text-left">
                <label for="input" class="font-medium text-xl text-white">
                  Jumlah pesan :
                </label>
                <br />
                <input
                  type="number"
                  class="mt-3 mb-3 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-link-pink focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder="Jumlah pemesanan"
                  v-model="order.jumlah_order"
                />
              </div>
              <div class="relative shadow-sm text-left">
                <label for="input" class="font-medium text-xl text-white">
                  Keterangan :
                </label>
                <br />
                <textarea
                  class="mt-3 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-link-pink focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder="Keterangan"
                  v-model="order.keterangan"
                ></textarea>
              </div>
            </form>
            <div class="mt-4 justify-right">
              <button
                class="bg-link-pink text-white px-4 py-2 rounded-md tracking-wide transition font-semibold hover:bg-pink-700"
                @click="pemesanan"
              >
                Order now
              </button>
            </div>
          </div>
        </div>
        <!--  -->
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      product: {},
      order: {}
    }
  },
  name: 'game-detail',
  methods: {
    setProduct(data) {
      this.product = data
    },

    // Pemesanan
    pemesanan() {
      if (this.order.jumlah_order) {
        this.order.games = this.product
        axios
          .post('http://localhost:3000/keranjangs', this.order)
          .then(() => {
            this.$router.push({ path: '/cart' })
          })
          .catch((error) => console.log(error))
      } else {
        alert('Jumlah pemesanan tidak sesuai')
      }
    }
  },

  mounted() {
    axios
      .get('http://localhost:3000/games/' + this.$route.params.id)
      .then((response) =>
        // Handle success
        this.setProduct(response.data)
      )
      .catch((error) =>
        // Handle error
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

.img {
  height: 20rem;
  width: auto;
}
</style>
