<script>
import Hero from './Hero/Hero.vue'
import FeaturedCategories from './FeaturedCategories/FeaturedCategories.vue'
import HomeMarquee from './HomeMarquee/HomeMarquee.vue'
import SansonIntro from './SansonIntro/SansonIntro.vue'
import WhyChooseUsHome from './WhyChooseUsHome/WhyChooseUsHome.vue'
import PopularProductsHome from './PopularProductsHome/PopularProductsHome.vue'
import TrustedPresenceHome from './TrustedPresenceHome/TrustedPresenceHome.vue'
import OurJourneyVideo from './OurJourneyVideo/OurJourneyVideo.vue'
import MadeInIndiaHome from './MadeInIndiaHome/MadeInIndiaHome.vue'
import SendAMassage from '../OtherComponents/ConnectUsForm/SendAMassage/SendAMassage.vue'
export default {
  components: {
    Hero,
    FeaturedCategories,
    HomeMarquee,
    SansonIntro,
    WhyChooseUsHome,
    PopularProductsHome,
      TrustedPresenceHome,
    OurJourneyVideo,
    MadeInIndiaHome,
    SendAMassage
  }
}
</script>

<template>
  <div>
    <Hero />
    <FeaturedCategories />
    <HomeMarquee />
    <SansonIntro />
    <WhyChooseUsHome />
    <PopularProductsHome />
    <TrustedPresenceHome />
    <OurJourneyVideo />
    <MadeInIndiaHome />
    <SendAMassage />
  </div>
</template>

<style scoped></style>