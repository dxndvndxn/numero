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

     <HeaderNavigation @showSideBar="setSidebarShow(true)" :isBurgerActive="false"/>
    </nav>
    <transition @enter="sidebarAppear" @leave="sidebarDisappear">
      <TheHeaderBar id="sidebar" v-if="getSidebarShow"/>
    </transition>
  </header>
</template>

<script>
import HeaderNavigation from "@/components/base/Header/TheHeaderNavigation";
import TheHeaderBar from "@/components/base/Header/TheHeaderBar";
import { mapMutations, mapGetters } from 'vuex'
import gsap from "gsap"

export default {
  name: "Header",
  components: {
    TheHeaderBar,
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
    ],
    timeLine: null
  }),
  computed: {
    ...mapGetters(['getSidebarShow']),
  },
  methods: {
    ...mapMutations(['setSidebarShow']),
    sidebarAppear(el, done) {
      this.sidebarAnimate(el, done)
    },
    sidebarDisappear(el, done) {
      this.timeLine.reverse(1).then(() => done())
    },
    sidebarAnimate(sidebar, done) {
      const sidebarMenuItems = document.querySelectorAll('.sidebar__item')
      const sidebarMenuNavigations = document.querySelectorAll('.sidebar .nav__right .icon')
      const sidebarLogo = document.querySelectorAll('.sidebar .nav__logo')
      const sidebarMenuBottom = document.querySelectorAll('.sidebar__bottom-item')
      this.timeLine = gsap.timeline()

      // Появление меню
      let tweenSidebar = gsap.fromTo(
          sidebar,
          { right: '-100%' },
          { right: 0, duration: .4, ease: "Expo.easeInOut" }
      )
      this.timeLine.add(tweenSidebar)

      // Появление элементов навигации
      let tweenNavigation = this.timeLine.fromTo(
          [sidebarLogo, ...sidebarMenuNavigations],
          { opacity: 0 },
          { opacity: 1, duration: .5, ease: "Power3.easeInOut", delay: .1, stagger: 0.1 },
          '<'
      )
      this.timeLine.add(tweenNavigation)

      // Появление элементов меню
      let tweenMenuItems = this.timeLine.fromTo(
          [...sidebarMenuItems, ...sidebarMenuBottom],
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: .6, ease: "Expo.easeInOut", stagger: 0.1 },
          ">-1"
      )

      this.timeLine.add(tweenMenuItems)
        .then(() => {
          done()
        })
    }
  },
  // mounted() {
  //   this.setSidebarShow(true)
  // }
}
</script>

<style scoped>

</style>
