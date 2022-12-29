<template>
  <div id="card-cooming">
    <div
      class="text-left card bg-card text-white shadow-lg rounded-md overflow-hidden"
    >
      <img
        :src="'/assets/' + productComing.gambar"
        class="w-full h-full object-cover p-1 rounded-md"
      />
      <div class="p-3 gap-3">
        <!-- Product Title -->
        <h2
          class="font-semibold text-base oveflow-hidden text-left whitespace-nowrap"
        >
          {{ productComing.nama }}
        </h2>

        <div class="w-64">
          <span class="font-light text-sm text-left mt-1">
            {{ productComing.deskripsi }}
          </span>
        </div>

        <!-- Product Action button -->
        <div class="mt-5 flex gap-2">
          <button
            class="bg-link-pink text-white px-4 py-2 rounded-md tracking-wide transition font-semibold hover:bg-pink-700"
          >
            Watch More
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

  props: ['productComing']
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

img {
  border-radius: 15px;
}
</style>
