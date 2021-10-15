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
