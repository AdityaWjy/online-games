<template>
  <div id="pesanan-sukses">
    <div class="home-shop">
      <!-- Komponen Home Complete -->
      <HomeComplete />
    </div>
    <section class="spad pt-14 pb-80">
      <div class="container ml-20 mt-5">
        <!-- Komponen Cooming soon the last of us -->
        <CoomingComplete />
      </div>

      <div class="product-container gap-12 ml-20 mt-64">
        <!-- Komponen coming soon card prodcut-->
        <div
          class="mt-10"
          v-for="productComing in comings"
          :key="productComing.id"
        >
          <CardCooming :productComing="productComing" />
        </div>
      </div>

      <div class="container ml-20 mt-20">
        <!-- Komponen coming soon COD WARFARE -->
        <CoomingComplete2 />
      </div>
    </section>
    <div>
      <!-- Komponen footer contact -->
      <FooterContact />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CoomingComplete from '@/components/Order-complete/CoomingComplete.vue'
import CoomingComplete2 from '@/components/Order-complete/CoomingComplete2.vue'
import CardCooming from '@/components/Order-complete/CardCooming.vue'
import HomeComplete from '@/components/Order-complete/HomeComplete.vue'
import FooterContact from '@/components/Home-Footer/FooterContact.vue'
export default {
  data() {
    return {
      comings: []
    }
  },
  components: {
    HomeComplete,
    CoomingComplete,
    CardCooming,
    CoomingComplete2,
    FooterContact
  },

  methods: {
    setProduct(data) {
      this.comings = data
    }
  },
  mounted() {
    // Axios get data
    axios
      .get('http://localhost:3000/comings')
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
  margin: 200px 77px 0 77px;
}
</style>
