<template>
  <h1 class="home__title" v-html="title">

  </h1>
</template>

<script>
export default {
  name: "TheBannerTitle",
  props: {
    title: {
      type: String,
      require: true
    }
  }
}
</script>

<style scoped>

</style>
