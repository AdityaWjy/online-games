<template>
  <div id="about">
    <span>apakah sudah makan</span>
    <br />
    <input
      type="checkbox"
      name="makan"
      id="makan"
      :value="tampil"
      @change="peristiwaChange"
    />
    <label for="makan">sudah makan</label>
    <br />
    <span>review</span>
    <p v-if="tampil">sudah</p>
    <p v-else>belom</p>
    <div class="ml-20 mb-20"><CardView /></div>

    <!-- Tabel keranjang  -->
    <div class="max-w-full text-white text-md mt-10 justify-center">
      <table class="border-collapse border border-link-pink">
        <thead>
          <tr class="w-24">
            <th class="border border-link-pink py-2 px-4">#</th>
            <th class="border border-link-pink py-2 px-14">Foto</th>
            <th class="border border-link-pink py-2 px-8">Games</th>
            <th class="border border-link-pink py-2 px-8">Keterangan</th>
            <th class="border border-link-pink py-2 px-4">Jumlah</th>
            <th class="border border-link-pink py-2 px-8">Harga</th>
            <th class="border border-link-pink py-2 px-8">Total Harga</th>
            <th class="border border-link-pink py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody class="border border-link-pink">
          <!-- Nomor tabel -->
          <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id">
            <th class="border border-link-pink py-2 px-4">
              {{ index + 1 }}
            </th>
            <!-- Gambar product pada tabel -->
            <td class="border border-link-pink">
              <img
                :src="'/assets/' + keranjang.games.gambar"
                class="rounded-md items-center justify-center"
                style="width: 150px; height: 130px"
              />
            </td>
            <!-- Nama product pada tabel -->
            <td class="text-white font-bold border border-link-pink">
              {{ keranjang.games.nama }}
            </td>
            <!-- Keterangan product pada tabel -->
            <td class="text-white font-bold border border-link-pink">
              {{ keranjang.keterangan ? keranjang.keterangan : '-' }}
            </td>
            <!-- Jumlah order product pada tabel -->
            <td class="text-white font-bold border border-link-pink">
              {{ keranjang.jumlah_order }}
            </td>
            <!-- Harga product pada tabel -->
            <td class="text-white font-bold border border-link-pink">
              {{ keranjang.games.harga }}
            </td>
            <!-- Total harga pada tabel -->
            <td class="text-white font-bold border border-link-pink">
              Rp. {{ keranjang.games.harga * keranjang.jumlah_order }}
            </td>

            <td class="border border-link-pink">
              <span
                class="text-2xl cursor-pointer"
                @click="deletekeranjang(keranjang.id)"
                >🗑️</span
              >
            </td>
          </tr>

          <tr class="border-link-pink">
            <td colspan="6" align="right ">
              <span class="text-lg font-bold">Total Harga : </span>
            </td>
            <td>
              <span class="font-bold text-lg">Rp. {{ totalHarga }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import CardView from '@/components/Shop-Card/CardView.vue'
export default {
  data() {
    return {
      tampil: false
    }
  },

  methods: {
    peristiwaChange(peristiwa) {
      this.tampil = peristiwa.target.checked
    }
  },

  components: {
    CardView
  }
}
</script>

<style scoped></style>
