<template>
  <div id="home-complete">
    <div class="hero-item relative bg-cover text-center">
      <video
        autoplay
        loop
        muted
        plays
        inline
        src="./order-assets/animated.mp4"
        class="back-video"
      ></video>
      <div class="text-container">
        <div class="ml-24 mt-14 float-left justify-start text-left">
          <!-- text complete order -->
          <TextComplete />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextComplete from './TextComplete.vue'
export default {
  data() {
    return {}
  },
  components: {
    TextComplete
  }
}
</script>

<style scoped>
.hero-item {
  border-bottom: 2px solid #b01ba5;
  height: 550px;
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
}
</style>
