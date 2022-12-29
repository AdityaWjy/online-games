<template>
  <div id="card-view">
    <div
      class="text-left card bg-card text-white min-h-[10rem] shadow-lg rounded-md overflow-hidden"
    >
      <img
        :src="'/assets/' + product.gambar"
        class="w-full h-full object-cover"
      />
      <div class="p-5 gap-3">
        <!-- Badge -->
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 rounded-full text-xs bg-red-600 shadow-sm">{{
            product.stock
          }}</span>
          <span class="px-3 py-1 rounded-full text-xs bg-red-600 shadow-sm"
            >Official store</span
          >
        </div>
        <!-- Product Title -->
        <h2
          class="font-semibold text-2xl oveflow-hidden text-left whitespace-nowrap mt-2"
        >
          {{ product.nama }}
        </h2>

        <!-- Product Price -->
        <div>
          <span class="text-xl font-bold mt-1">
            {{ product.harga | currency }}
          </span>
          <div class="flex items-center gap-2 mt-2">
            <span class="text-sm line-through opacity-80 text-white">
              Rp {{ product.diskon }}
            </span>

            <span
              class="bg-red-600 px-1.5 py-0.5 rounded-md text-xs text-white"
            >
              save {{ product.save }}
            </span>
          </div>
        </div>

        <!-- Product Rating -->
        <span class="flex items-center mt-2 text-sm">
          <img src="/assets/icons8-star-filled-48.png" class="w-4 h-4" />
          <img src="/assets/icons8-star-filled-48.png" class="w-4 h-4" />
          <img src="/assets/icons8-star-filled-48.png" class="w-4 h-4" />
          <img src="/assets/icons8-star-filled-48.png" class="w-4 h-4" />
          <img src="/assets/icons8-star-half-empty-48.png" class="w-4 h-4" />
          <span class="text-xs mt-1 ml-2 text-white">
            {{ product.rating }}</span
          >
        </span>

        <!-- Product Action button -->
        <div class="mt-5 flex gap-2">
          <router-link
            :to="'/game/' + product.id"
            class="bg-link-pink text-white px-4 py-2 rounded-md tracking-wide transition font-semibold hover:bg-pink-700"
          >
            Order
          </router-link>

          <button
            @click="active = !active"
            :class="{ coolbtn: active, btn: !active }"
          >
            <img
              src="/assets/heart.png"
              class="w-4 h-4"
              alt="Add to wishlist"
            />
          </button>

          <button
            class="opacity-80 hover:opacity-100 flex-grow flex justify-center items-center bg-red-500 hover:bg-red-600 transition rounded-md"
          >
            <img
              src="/assets/icons8-angry-eye-50.png"
              class="w-6 h-6"
              alt="Show detail"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      btn: false
    }
  },

  props: ['product']
}
</script>

<style scoped>
.bg-card {
  background: linear-gradient(45deg, #34164b 30%, #b01ba5 70%);
  width: 286px;
}

.coolbtn {
  opacity: 1;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: #dc2626;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  border-radius: 0.375rem;
}

.btn {
  opacity: 0.8;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: #ef4444;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  border-radius: 0.375rem;
}

.btn:hover {
  opacity: 1;
  background-color: #dc2626;
}
</style>
