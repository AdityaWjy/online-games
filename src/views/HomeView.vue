<template>
  <div class="home">
    <HeroView />
    <IntroSection />
    <BlogSection />
    <VideoSection />
    <FeaturedSection />
    <FooterContact />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroView from '@/components/Home-Hero/HeroView.vue'
import IntroSection from '@/components/Home-Section/IntroSection.vue'
import BlogSection from '@/components/Home-Section/BlogSection.vue'
import VideoSection from '@/components/Home-Section/VideoSection.vue'
import FeaturedSection from '@/components/Home-Section/FeaturedSection.vue'
import FooterContact from '@/components/Home-Footer/FooterContact.vue'
export default {
  name: 'HomeView',
  components: {
    HeroView,
    IntroSection,
    BlogSection,
    VideoSection,
    FeaturedSection,
    FooterContact
  }
}
</script>
