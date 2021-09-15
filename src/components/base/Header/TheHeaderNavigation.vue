<template>
  <div class="nav__right fl-bet-cen">
    <HeaderIcon class="burger" :class="{ burger_active: isBurgerActive }" @click="showSidebar()">
      <div class="burger__line burger__line_first"></div>
      <div class="burger__line burger__line_second"></div>
    </HeaderIcon>
    <HeaderIcon class="lang fl-center">
          <span class="lang__switch fl-center">
            EN
          </span>
    </HeaderIcon>
    <HeaderIcon class="fl-center">
          <span class="fl-center">
            <img src="~@/assets/imgs/menu/cart.svg" alt="">
          </span>
    </HeaderIcon>
  </div>
</template>

<script>
import HeaderIcon from "@/components/base/TheIcon";
export default {
  name: "TheHeaderNavigation",
  props: {
    isBurgerActive: {
      type: Boolean
    }
  },
  data: () => ({

  }),
  components: {
    HeaderIcon
  },
  methods: {
    showSidebar() {
      this.$emit('showSideBar')
    }
  }
}
</script>

<style scoped>

</style>
