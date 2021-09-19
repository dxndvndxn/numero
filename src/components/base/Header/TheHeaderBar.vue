<template>
  <div class="sidebar">
    <div class="sidebar__top fl-bet-cen">
      <div class="nav__logo">
        <img src="@/assets/imgs/common/logo.svg" alt="">
      </div>
      <HeaderNavigation @showSideBar="setSidebarShow(false)" :isBurgerActive="true"/>
    </div>

    <div class="sidebar__wrap">
      <vuescroll :ops="scrollOptions">
        <ul class="sidebar__main" @mouseout="unHoverAnimate">
          <li v-for="(li, i) in sideBarList" :key="i" class="sidebar__item">
            <span class="sidebar__link-wrap" @mouseover="hoverAnimate(i)">
                <router-link :to="{ path: li.link }" class="sidebar__link" :class="{sidebar__link_hover: li.opacity}">
                  {{ li.title }}
                </router-link>
            </span>
            <div class="sidebar__link-img-wrap" v-if="li.img && activeLi === i">
              <div class="sidebar__link-img" :style="{background: `url(${require('@/assets/imgs/' + li.img)}) no-repeat 50% 50%`}">
              </div>
            </div>
          </li>
        </ul>
      </vuescroll>
      <div class="sidebar__bottom">
        <ul class="sidebar__bottom-list">
          <li v-for="(li, i) in sideBarBottomSide" :key="i" class="sidebar__bottom-item">
            <router-link :to="{ path: li.link }" class="sidebar__bottom-link" :class="{'link-under': li.underline}">
              {{ li.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNavigation from "@/components/base/Header/TheHeaderNavigation"
import { mapMutations } from 'vuex'
import gsap from "gsap";
export default {
  name: "TheHeaderBar",
  components: {
    HeaderNavigation
  },
  data: () => ({
    activeLi: null,
    sideBarList: [
      {
        title: 'Mode',
        link: '#',
        opacity: false,
        img: 'sheik.png'
      },
      {
        title: 'Fashion week',
        link: '#',
        opacity: false,
        img: 'sheik.png'
      },
      {
        title: 'Beaute',
        link: '#',
        opacity: false
      },
      {
        title: 'Musique',
        link: '#',
        opacity: false
      },
      {
        title: 'Cinema & Series',
        link: '#',
        opacity: false
      },
      {
        title: 'Culturie',
        link: '#',
        opacity: false
      },
      {
        title: 'Art & Design',
        link: '#',
        opacity: false
      },
      {
        title: 'Photography',
        link: '#',
        opacity: false
      }
    ],
    sideBarBottomSide: [
      {
        name: 'Newsletter',
        link: '#'
      },
      {
        name: 'Newsroom',
        link: '#'
      },
      {
        name: 'Advertising',
        link: '#'
      },
      {
        name: 'Magazines',
        link: '#'
      },
      {
        name: 'Contributors',
        link: '#',
        underline: true
      }
    ],
    scrollOptions: {
      vuescroll: {
        mode: 'native',
      },
      scrollPanel: {
        speed: 10,
        scrollingY: true,
        scrollingX: false,
        easing: 'easeOutCubic'
      },
      rail: {
        keepShow: false,
        background: 'transparent',
      },
      bar: {
        keepShow: true,
        background: '#FFF',
        minSize: 0
      }
    }
  }),
  methods: {
    ...mapMutations(['setSidebarShow']),
    hoverAnimate(hoverI) {
      this.activeLi = hoverI
      this.sideBarList.forEach((el, i) => {
        el.opacity = hoverI !== i;
      })

      setTimeout(() => {
        const img = document.querySelector('.sidebar__link-img')
        gsap.to(
            img,
            { width: 500, duration: .4, ease: "Expo.easeInOut" }
        )
      }, 300)
    },
    unHoverAnimate() {
      this.sideBarList.forEach(el => {
        el.opacity = false
      })
      this.activeLi = null
    }
  }
}
</script>

<style scoped>

</style>
