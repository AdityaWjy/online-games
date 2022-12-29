<template>
  <div class="Pratice-View">
    <h2>Hello</h2>
    <button :class="warna" @click="$emit('peristiwaClick', $event)">
      Komponen tombol
    </button>
  </div>
</template>

<script>
export default {
  name: 'PracticeView',
  data() {
    return {}
  },
  props: ['warna'],
  methods: {}
}
</script>

<style scoped>
.biru {
  background-color: red;
}
</style>
