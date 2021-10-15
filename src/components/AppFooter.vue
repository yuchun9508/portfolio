<template>
  <footer class="py-10">
    <div class="container-fluid text-center">
      <ul class="-mx-3 mb-4 lg:hidden">
        <li class="inline-block mx-3">
          <a :href="socialMedia.linkedin" target="_blank" rel="noopener noreferrer" class="inline-block p-3 -m-3">
            <span class="icon icon-linkedin-dark w-8 h-8"></span>
          </a>
        </li>
        <li class="inline-block mx-3">
          <a :href="socialMedia.github" target="_blank" rel="noopener noreferrer" class="inline-block p-3 -m-3">
            <span class="icon icon-github-dark w-8 h-8"></span>
          </a>
        </li>
      </ul>
      <p>© 2021 Yu-Chun Wu. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
import { socialMedia } from '@/constants/global.js';

export default {
  name: 'AppFooter',
  data() {
    return {
      socialMedia: socialMedia
    }
  }
}
</script>

<style lang="postcss" scoped>
.icon-linkedin-dark {
  background-image: url('../assets/images/icon-linkedin-dark.svg');
}
.icon-github-dark {
  background-image: url('../assets/images/icon-github-dark.svg');
}
</style>