<template>
  <div id="featured-section">
    <section class="featured-section">
      <div class="featured-bg bg-featur-pattern set-bg"></div>
      <div class="featured-box">
        <div class="text-box text-left">
          <div class="top-meta text-left font-bold text-xl mb-5 cursor-pointer">
            <span class="hover:text-link-pink">14.12.2022 / in </span>
            <a href="#" class="text-link-pink">Games</a>
          </div>
          <h3
            class="mb-5 text-left font-bold text-3xl leading-none cursor-pointer"
          >
            The game you’ve been waiting for is out now.
          </h3>
          <p class="text-left text-stone hover:text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliquamet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vestibulum posuere porttitor justo id pellentesque. Proin id lacus
            feugiat, posuere erat sit amet, commodo ipsum. Donec pellentesque
            vestibulum metus...
          </p>
          <a
            href="#"
            class="text-left flex uppercase text-md font-bold italic hover:text-link-pink"
            >Read More
            <img
              src="/assets/double-arrow.png"
              alt="#"
              class="w-4 h-4 mt-1 ml-3 inline-block"
            />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
section {
  border-bottom: 2px solid #b01ba5;

  display: block;
}

.featured-section {
  position: relative;
  overflow: hidden;
}

.featured-bg {
  width: calc(50% - 156px);
  float: left;
  height: 100%;
  left: 0;
  right: 0;
  position: absolute;
}

.set-bg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
}

.featured-box {
  float: right;
  width: calc(50% + 156px);
  background: #fff;
  padding: 95px 50px 44px 79px;
}

.text-box {
  justify-content: flex-start;
  align-items: flex-start;
}

.featured-box .text-box {
  max-width: 810px;
}

.featured-box .text-box .top-meta {
  color: #69647d;
}
.text-box .text-meta {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
}

.featured-box .text-box h3 {
  font-size: 60px;
  max-width: 100%;
}

.featured-box .text-box p {
  font-size: 16px;
}

.text-box p {
  font-weight: 500;
  margin-bottom: 35px;
}
</style>
