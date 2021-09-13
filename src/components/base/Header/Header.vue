<template>
  <header class="header">
    <nav class="nav container">
      <div class="nav__left">
        <div class="nav__logo">
          <img src="@/assets/imgs/common/logo.svg" alt="">
        </div>
        <ul class="nav__list">
          <li v-for="(menu, i) in menuList" class="nav__item" :key="i">
            <router-link :to="{ path: menu.link }" class="nav__link">
              {{ menu.name }}
            </router-link>
          </li>
        </ul>
      </div>

      <div class="nav__right">
        <HeaderBurger/>
      </div>
    </nav>
  </header>
</template>

<script>
import HeaderBurger from "@/components/base/Header/HeaderBurger";
export default {
  name: "Header",
  components: {
    HeaderBurger
  },
  data: () => ({
    menuList: [
      {
        name: 'Mode',
        link: '#'
      },
      {
        name: 'Fashion week',
        link: '#'
      },
      {
        name: 'Beaute',
        link: '#'
      },
      {
        name: 'Musique',
        link: '#'
      },
      {
        name: 'Cinema & Series',
        link: '#'
      }
    ]
  })
}
</script>

<style scoped>

</style>
