<template>
  <main>
    <Header/>
    <TheHeaderBar/>
    <router-view/>

  </main>
</template>

<script>
import Header from "@/components/base/Header/TheHeader";
import TheHeaderBar from "@/components/base/Header/TheHeaderBar";
export default {
  name: "MainLayout",
  components: {
    TheHeaderBar,
    Header
  }
}
</script>

<style scoped>

</style>
