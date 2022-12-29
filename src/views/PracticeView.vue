<template>
  <div id="Practice View">
    <button :class="warna">Komponen dari practice</button>
  </div>
</template>

<script>
export default {
  name: 'PracticeView',
  data() {
    return {}
  },
  props: ['warna']
}
</script>

<style scoped></style>
