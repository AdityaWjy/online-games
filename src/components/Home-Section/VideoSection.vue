<template>
  <div
    class="video-section relative bg-video-pattern bg-no-repeat bg-center bg-cover w-cover flex items-end"
  >
    <a
      :href="videoLink"
      target="_blank"
      class="video-play justify-items-center absolute rounded-full bg-black"
      ><img
        src="/assets/solid-right-arrow.png"
        class="ml-9"
        alt="Highlights Video"
    /></a>
    <div class="container mb-4">
      <div class="video-text">
        <h2
          class="float-left text-4xl uppercase italic font-bold text-white mb-1 cursor-pointer hover:text-pink-500"
        >
          {{ title }}
        </h2>
        <p class="text-base float-left hover:text-white cursor-pointer">
          {{ subTitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoLink: 'https://www.youtube.com/watch?v=TdxwynfcNRQ',
      title: 'Promo video of the game',
      subTitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt.'
    }
  }
}
</script>

<style scoped>
.video-section {
  height: 590px;
  background-position: top center;
  border-bottom: 2px solid #b01ba5;
}

.video-play {
  left: calc(50% - 61px);
  top: calc(100% - 61%);
  width: 122px;
  height: 122px;
  padding-top: 35px;

  background: rgba(255, 255, 255, 0.16);
}

.video-play:hover {
  background: rgba(255, 255, 255, 0.32);
}

a {
  text-decoration: none;
  background-color: transparent;
}

.container {
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: auto;
  margin-left: auto;
}
.video-text {
  margin-bottom: 80px;
  padding: 27px 0;
  padding-left: 25px;
  position: relative;
}

.video-text::after {
  position: absolute;
  content: '';
  width: 9px;
  height: 100px;
  left: -22px;
  top: 0;
  border-left: 3px solid #de46d6;
  background: #fff;
  box-shadow: 0 0 50px 3px #de46d6;
}
</style>
