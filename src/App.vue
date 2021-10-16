<template>
  <div id="app">
    <app-header></app-header>
    <router-view :class="{ 'filter blur-sm brightness-75': $store.state.isMenuOpened }" />
    <app-footer></app-footer>
    <the-social-media-bar></the-social-media-bar>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import TheSocialMediaBar from '@/components/TheSocialMediaBar.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    TheSocialMediaBar
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo, this will be used
    title: 'Yu-Chun Wu',
    meta: [
      { name: 'description', content: 'Yu-Chun Wu is a front-end developer who specializes in building user-centered web services and digital experiences.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Yu-Chun Wu' },
      { property: 'og:description', content: 'Yu-Chun Wu is a front-end developer who specializes in building user-centered web services and digital experiences.' },
      { property: 'og:url', content: 'https://yuchun9508.github.io/v2/' },
      { property: 'og:image', content: require('@/assets/images/og.png') }
    ]
  },
  watch: {
    // prevent background scrolling
    '$store.state.isMenuOpened': function (val, oldVal) {
      document.body.style.overflow = val ? 'hidden' : '';
    }
  }
}
</script>

<style lang="postcss">
#app {
  @apply bg-primary text-secondary;
}
</style>
