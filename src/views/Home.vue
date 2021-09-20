<template>
  <div class="home">
    <div class="home__banner container">
      <TheBannerTitle :title="bannerTitle"/>
      <TheBannerBottom
          :views="views"
          :info="bannerInfo"
      />
    </div>
    <div class="home__bg">
      <div class="shadow"></div>
      <div class="carti"></div>
    </div>
  </div>
</template>

<script>
import TheBannerTitle from "@/components/TheBannerTitle";
import TheBannerBottom from "@/components/TheBannerBottom";
import gsap from "gsap"
export default {
  name: 'Home',
  data: () => ({
    bannerTitle: 'Playboi Carti to Release <br> “Whole Lotta Red”',
    views: [
      {
        count: 7650,
        img: 'eye.svg'
      },
      {
        count: 687,
        img: 'chat.svg'
      }
    ],
    bannerInfo: [
      {
        value: 'MUSICUE',
        key: 'Genre',
      },
      {
        value: 'JON BLISTEIN',
        key: 'Author'
      }
    ],
  }),
  components: {
    TheBannerBottom,
    TheBannerTitle
  },
  mounted() {
    const bg = document.querySelector('.home__bg')
    const carti = document.querySelector('.carti')
    const title = document.querySelector('.home__title')
    const infoBottom = document.querySelectorAll('.info-bottom')

    gsap.fromTo(bg, { opacity: 0 }, { opacity: 1, duration: 1, ease: "Expo.easeInOut"})
    gsap.fromTo(carti, { backgroundSize: "40% 40%" }, { backgroundSize: "100% 100%", autoRound: false, ease: 'Expo.easeInOut'})
    gsap.fromTo(title, { opacity: 0, y: 50 }, { opacity: 1, delay: .5, duration: .4, y: 0, ease: 'Power1.easeInOut' })
    gsap.fromTo([...infoBottom], { opacity: 0, y: 50 }, { stagger: 0.05, opacity: 1, delay: .5, duration: .4, y: 0, ease: 'Power1.easeInOut' })


  }
}
</script>
