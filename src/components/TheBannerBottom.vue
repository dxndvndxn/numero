<template>
  <div class="home__bottom fl-bet-cen">
    <div class="home__social">
      <div class="home__views" v-for="(view, i) in views" :key="i">
        <img :src="require(`@/assets/imgs/icons/${ view.img }`)" class="info-bottom home__icon">
        <span class="home__text info-bottom"> {{ view.count }} </span>
      </div>
    </div>
    <div class="home__info-wrap">
      <div class="hone__info" v-for="(item, i) in info" :key="i">
      <span class="home__info-key info-bottom">
        {{ item.key }}:
      </span>
      <span class="home__text info-bottom">
        {{ item.value }}
      </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheBannerBottom",
  props: {
    views: {
      type: Array
    },
    info: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
