<template>
  <div id="keranjang">
    <section class="spad pt-14 pb-16">
      <div class="container mx-auto">
        <!-- Breadcrumb -->
        <div class="breadcrumb">
          <h2 class="text-white text-5xl font-semibold text-left">
            keranjang Order
          </h2>
          <span class="text-xl text-white font-bold mt-2 flex italic">
            <router-link to="/" class="text-white">Home</router-link>
            <span class="text-white">&nbsp;/&nbsp;</span>
            <router-link to="/shop" class="text-white">Shop</router-link>
            <span class="text-white">&nbsp;/&nbsp;</span>
            <router-link to="/shop" class="text-link-pink"
              >keranjang</router-link
            >
          </span>
        </div>

        <!-- cart -->

        <div class="container mx-auto mt-10">
          <div class="flex shadow-md my-10">
            <div class="w-3/4 bg-white px-10 py-10">
              <div class="flex justify-between border-b pb-8">
                <h1 class="font-semibold text-2xl">Shopping Cart</h1>
                <h2 class="font-semibold text-2xl">Items</h2>
              </div>
              <div class="flex mt-10 mb-5">
                <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3
                  class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center"
                >
                  Quantity
                </h3>
                <h3
                  class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center"
                >
                  Price
                </h3>
                <h3
                  class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center"
                >
                  Total
                </h3>
              </div>
              <div
                class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                v-for="keranjang in keranjangs"
                :key="keranjang.id"
              >
                <div class="flex w-2/5">
                  <!-- product -->
                  <div class="w-20">
                    <img
                      class="h-24"
                      :src="'/assets/' + keranjang.games.gambar"
                      alt=""
                    />
                  </div>
                  <div class="flex flex-col justify-between ml-4 flex-grow">
                    <span class="font-bold text-sm">{{
                      keranjang.games.nama
                    }}</span>
                    <span class="text-red-500 text-xs">
                      {{
                        keranjang.keterangan ? keranjang.keterangan : '-'
                      }}</span
                    >
                    <a
                      class="font-semibold cursor-pointer hover:text-red-500 text-gray-500 text-xs"
                      @click="deletekeranjang(keranjang.id)"
                      >Remove</a
                    >
                  </div>
                </div>
                <div class="flex justify-center w-1/5">
                  <svg
                    class="fill-current text-gray-600 w-3 cursor-pointer"
                    viewBox="0 0 448 512"
                    @click="decrementQty(keranjang)"
                  >
                    <path
                      d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                    />
                  </svg>

                  <input
                    class="mx-2 border text-center w-8"
                    type="text"
                    :value="keranjang.jumlah_order"
                  />

                  <svg
                    class="fill-current text-gray-600 w-3 cursor-pointer"
                    viewBox="0 0 448 512"
                    @click="incrementQty(keranjang)"
                  >
                    <path
                      d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                    />
                  </svg>
                </div>
                <span class="text-center w-1/5 font-semibold text-sm">{{
                  keranjang.games.harga | currency
                }}</span>
                <span class="text-center w-1/5 font-semibold text-sm">{{
                  (keranjang.games.harga * keranjang.jumlah_order) | currency
                }}</span>
              </div>
              <router-link
                to="/shop"
                class="flex font-semibold text-indigo-600 text-sm mt-10"
              >
                <svg
                  class="fill-current mr-2 text-indigo-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
                  />
                </svg>
                Continue Shopping
              </router-link>
            </div>

            <!-- Side information -->

            <div id="summary" class="w-1/4 px-8 py-10">
              <h1 class="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>

              <!-- Promo -->
              <div class="py-9">
                <label
                  for="promo"
                  class="font-semibold inline-block mb-3 text-sm uppercase"
                  >Promo Code</label
                >
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  class="p-2 text-sm w-full rounded-md bg-indigo-200 text-black"
                  v-model="promoCode"
                />
              </div>
              <button
                class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm rounded-md text-white uppercase"
                @click="getPromo"
              >
                Apply
              </button>
              <div class="border-t mt-8">
                <div
                  class="font-semibold justify-between py-6 text-sm uppercase"
                >
                  <span>Total cost</span>
                  <br />
                  <span> {{ finalPrice | currency }} </span>
                </div>
                <a
                  @click="scrollMeTo('checkout')"
                  class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 px-6 rounded-md text-sm text-white uppercase w-full"
                >
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Form checkout method -->
        <div
          ref="checkout"
          class="w-full mx-auto rounded-lg spad-form shadow-lg p-5 mt-24"
          style="max-width: 900px"
        >
          <div class="w-full pt-1 pb-5">
            <div
              class="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center"
            >
              <i class="mdi mdi-credit-card-outline text-3xl"></i>
            </div>
          </div>
          <div class="mb-10">
            <h1 class="text-center font-bold text-xl uppercase text-white">
              Secure payment info
            </h1>
          </div>
          <div class="mb-3 flex -mx-2">
            <div class="px-2">
              <label for="type1" class="flex items-center cursor-pointer">
                <input
                  type="radio"
                  class="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type1"
                  checked
                  value="visa"
                  v-model="order.payment"
                />
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.xVREsbEnxpFwYsgl4hNO7QHaDA&pid=Api&P=0"
                  class="h-8 ml-3 border-2 border-gray-200 rounded-md py-1 px-1"
                />
              </label>
            </div>
            <div class="px-2">
              <label for="type1" class="flex items-center cursor-pointer">
                <input
                  type="radio"
                  class="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type1"
                  value="Master Card"
                  v-model="order.payment"
                />
                <img
                  src="https://clipground.com/images/mastercard-logo-2018-png-3.png"
                  class="h-8 ml-3 rounded-sm"
                />
              </label>
            </div>
            <div class="px-2">
              <label for="type2" class="flex items-center cursor-pointer">
                <input
                  type="radio"
                  class="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type2"
                  value="PayPal"
                  v-model="order.payment"
                />
                <img
                  src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                  class="h-8 ml-3"
                />
              </label>
            </div>
          </div>
          <div class="mb-3">
            <label class="font-bold text-sm mb-2 ml-1 text-white"
              >Name on card</label
            >
            <div>
              <input
                class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="Alexandria"
                type="text"
                v-model="order.nama"
              />
            </div>
          </div>
          <div class="mb-3">
            <label class="font-bold text-sm mb-2 ml-1 text-white"
              >Card number</label
            >
            <div>
              <input
                class="w-full text-black px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="0000 0000 0000 0000"
                type="text"
                v-model="order.number"
              />
            </div>
          </div>
          <div class="mb-3 -mx-2 flex items-end">
            <div class="px-2 w-1/2">
              <label class="font-bold text-sm mb-2 ml-1 text-white"
                >Expiration date</label
              >
              <div>
                <select
                  class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                  v-model="order.expirationMonth"
                >
                  <option value="01">01 - January</option>
                  <option value="02">02 - February</option>
                  <option value="03">03 - March</option>
                  <option value="04">04 - April</option>
                  <option value="05">05 - May</option>
                  <option value="06">06 - June</option>
                  <option value="07">07 - July</option>
                  <option value="08">08 - August</option>
                  <option value="09">09 - September</option>
                  <option value="10">10 - October</option>
                  <option value="11">11 - November</option>
                  <option value="12">12 - December</option>
                </select>
              </div>
            </div>
            <div class="px-2 w-1/2">
              <select
                class="form-select text-black w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                v-model="order.expirationYear"
              >
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
              </select>
            </div>
          </div>
          <div class="mb-10">
            <label class="font-bold text-sm mb-2 ml-1 text-white"
              >Security code</label
            >
            <div>
              <input
                class="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="000"
                type="text"
                v-model="order.securityCode"
              />
            </div>
          </div>
          <div>
            <button
              class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
              @click="checkout"
            >
              <i class="mdi mdi-lock-outline mr-1"></i> PAY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      keranjangs: [],
      order: {},
      promoCode: '',
      discount: 0,
      isCartLoading: false
    }
  },
  name: 'cart-view',

  mounted() {
    axios
      .get('http://localhost:3000/keranjangs')
      .then((response) =>
        // handle success
        this.setKeranjangs(response.data)
      )
      .catch((error) =>
        // handle error
        console.log(error)
      )

    // this.loadCart()
  },
  // watch: {
  //   keranjangs: {
  //     handle(newValue) {
  //       this.updateCart(newValue)
  //     },
  //     deep: true
  //   }
  // },

  methods: {
    // async loadCart() {
    //   this.isCartLoading = true

    //   try {
    //     const { data } = await axios.get('http://localhost:8080/cart')
    //     this.keranjangs = data
    //   } catch (e) {
    //     console.error(e)
    //   }

    //   this.isCartLoading = false
    // },
    // updateCart(items) {
    //   axios
    //     .put('http://localhost:8080/cart', items)
    //     .catch((error) => console.error(error))
    // },

    setKeranjangs(data) {
      this.keranjangs = data
    },

    deletekeranjang(id) {
      axios
        // methods untuk hapus array pada keranjang
        .delete('http://localhost:3000/keranjangs/' + id)
        .then(() => {
          // handle success
          console.log('berhasil dihapus')
        })
      //  update data keranjang otomatis ketika dihapus
      axios
        .get('http://localhost:3000/keranjangs')
        .then((response) =>
          // handle success
          this.setKeranjangs(response.data)
        )
        // handle error
        .catch((error) => console.log(error))
    },

    // Methods count ++
    incrementQty(keranjang) {
      keranjang.jumlah_order++
    },
    // Methods count --
    decrementQty(keranjang) {
      keranjang.jumlah_order--
      // Ketika qty mencapai 0 Maka hapus dari keranjang
      if (keranjang.jumlah_order === 0) {
        this.keranjangs.splice(this.keranjangs.indexOf(keranjang), 1)
      }
    },

    getPromo() {
      // Logika untuk mengecek apakah promo valid atau tidak
      if (this.promoCode === 'games') {
        this.discount = 100000
      } else {
        this.discount = 0
      }
      if (this.promoCode === 'terimakasih') {
        this.discount = 200000
      } else {
        this.discount = 0
      }
    },

    scrollMeTo(checkout) {
      var element = this.$refs[checkout]
      var top = element.offsetTop

      window.scrollTo(200, top)
    },

    // methods checkout
    checkout() {
      if (
        this.order.payment &&
        this.order.nama &&
        this.order.number &&
        this.order.expirationMonth &&
        this.order.expirationYear
      ) {
        this.order.keranjangs = this.keranjangs
        axios.post('http://localhost:3000/pesanans', this.order).then(() => {
          // hapus keranjang ketika dipesan
          this.keranjangs.map(function (item) {
            return (
              axios
                // methods delete untuk menghapus array
                .delete('http://localhost:3000/keranjangs/' + item.id)
                .catch((error) =>
                  // handle error
                  console.log(error)
                )
            )
          })

          this.$router.push({ path: '/pesanan-sukses' })
        })
      } else {
        alert('Gagal pemesanan')
      }
    }
  },

  computed: {
    totalHarga() {
      return (this.keranjangs || []).reduce(function (items, data) {
        return items + parseFloat(data.games.harga * data.jumlah_order)
      }, 0)
    },
    finalPrice() {
      return this.totalHarga - this.discount
    }
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css');
</style>

<style scoped>
.spad {
  background: linear-gradient(45deg, #501755 0%, #2d1854 100%);
  border-bottom: 2px solid #b01ba5;
}

.spad-form {
  background: linear-gradient(45deg, #2d1854 10%, #501755 100%);
  border-bottom: 2px solid #b01ba5;
}

#summary {
  background-color: #f6f6f6;
}

/*
module.exports = {
    plugins: [require('@tailwindcss/forms'),]
};
*/
.form-radio {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  flex-shrink: 0;
  border-radius: 100%;
  border-width: 2px;
}

.form-radio:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

@media not print {
  .form-radio::-ms-check {
    border-width: 1px;
    color: transparent;
    background: inherit;
    border-color: inherit;
    border-radius: inherit;
  }
}

.form-radio:focus {
  outline: none;
}

.form-select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e");
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background-repeat: no-repeat;
  padding-top: 0.5rem;
  padding-right: 2.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  background-position: right 0.5rem center;
  background-size: 1.5em 1.5em;
}

.form-select::-ms-expand {
  color: #a0aec0;
  border: none;
}

@media not print {
  .form-select::-ms-expand {
    display: none;
  }
}

@media print and (-ms-high-contrast: active),
  print and (-ms-high-contrast: none) {
  .form-select {
    padding-right: 0.75rem;
  }
}
</style>
