<template>
  <main>
    <Header/>
    <router-view/>

  </main>
</template>

<script>
import Header from "@/components/base/Header/TheHeader";
export default {
  name: "MainLayout",
  components: {
    Header
  }
}
</script>

<style scoped>

</style>
