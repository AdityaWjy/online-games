<template>
  <div id="home-shop">
    <div class="hero-item relative bg-cover text-center">
      <video
        autoplay
        loop
        muted
        plays
        inline
        src="./godofwar-bg.mp4"
        class="back-video"
      ></video>
      <div class="text-container">
        <div class="ml-24 mt-14 float-left justify-start text-left">
          <TextSony />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextSony from './TextSony.vue'
export default {
  data() {
    return {}
  },
  components: {
    TextSony
  }
}
</script>

<style scoped>
.hero-item {
  border-bottom: 2px solid #b01ba5;
  height: 686px;
  width: 100%;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.text-container {
  background: linear-gradient(45deg, black 5%, transparent);
  background-position: center;
  width: 100%;
  height: 100%;
}
.back-video {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  background: cover;
  padding-bottom: 100px;
  padding-top: -100px;
}
</style>
