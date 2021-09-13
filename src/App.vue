<template>
  <div id="app">
    <component :is="layout"></component>
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
export default {
  components: {
    MainLayout
  },
  computed: {
    layout() {
      return this.$route.meta.layout + 'Layout'
    }
  }
}
</script>
