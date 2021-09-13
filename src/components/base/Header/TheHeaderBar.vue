<template>
  <div class="sidebar">
    <HeaderNavigation/>

    <vuescroll :ops="scrollOptions">
      <ul class="sidebar__main">
        <li v-for="(li, i) in sideBarList" :key="i" class="sidebar__item">
          <router-link :to="{ path: li.link }" class="sidebar__link">
            {{ li.title }}
          </router-link>
        </li>
      </ul>
    </vuescroll>

    <div class="sidebar__bottom">
      <ul class="fl-bet-cen">
        <li v-for="(li, i) in sideBarBottomSide" :key="i" class="sidebar__bottom-item">
          <router-link :to="{ path: li.link }" class="sidebar__bottom-link">
            {{ li.name }}
          </router-link>
        </li>
      </ul>

      <span>
        <router-link to="#" class="sidebar__bottom-link link-under"> Contributors</router-link>
      </span>
    </div>
  </div>
</template>

<script>
import HeaderNavigation from "@/components/base/Header/TheHeaderNavigation"
export default {
  name: "TheHeaderBar",
  components: {
    HeaderNavigation
  },
  data: () => ({
    sideBarList: [
      {
        title: 'Mode',
        link: '#'
      },
      {
        title: 'Fashion week',
        link: '#'
      },
      {
        title: 'Beaute',
        link: '#'
      },
      {
        title: 'Musique',
        link: '#'
      },
      {
        title: 'Cinema & Series',
        link: '#'
      },
      {
        title: 'Culturie',
        link: '#'
      },
      {
        title: 'Art & Design',
        link: '#'
      },
      {
        title: 'Photography',
        link: '#'
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
    ],
    scrollOptions: {
      vuescroll: {
        mode: 'native',
      },
      scrollPanel: {
        speed: 50,
        scrollingY: true,
        scrollingX: false
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
  })
}
</script>

<style scoped>

</style>
