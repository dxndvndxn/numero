<template>
  <div class="home">
    <div class="home__banner container">
      <TheBannerTitle :title="bannerTitle"/>
      <TheBannerBottom
          :views="views"
          :info="bannerInfo"
      />
    </div>
    <div class="shadow"></div>
  </div>
</template>

<script>
import TheBannerTitle from "@/components/TheBannerTitle";
import TheBannerBottom from "@/components/TheBannerBottom";
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
  }
}
</script>
