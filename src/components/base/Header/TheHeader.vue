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

     <HeaderNavigation/>
    </nav>
  </header>
</template>

<script>
import HeaderNavigation from "@/components/base/Header/TheHeaderNavigation";
export default {
  name: "Header",
  components: {
    HeaderNavigation,
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
