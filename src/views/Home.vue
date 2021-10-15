<template>
  <div>
    <section class="min-h-screen flex items-center">
      <div class="container">
        <h3>Hi, my name is</h3>
        <h1 class="text-neutral">Yu-Chun Wu.<br>I craft interfaces for the web.</h1>
        <p class="mt-4 xl:w-8/12">I’m a <span class="text-accent">front-end developer</span> specializing in building user-centered web services and digital experiences. Currently, I’m looking for a new opportunity to challenge myself and stimulate diverse potential.</p>
      </div>
    </section>

    <section id="about" class="py-20 lg:py-32">
      <div class="container">
        <div class="grid grid-cols-1 gap-y-10 sm:gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-16 xl:gap-x-20">
          <div>
            <h2 class="text-neutral mb-10">About Me</h2>
            <p class="mb-5">Hello! My name is Yu-Chun. I enjoy turning ideas into reality through design and technology. My interest in web development grew during my undergraduate years when I found it fascinating to create something useful that lives on the internet.</p>
            <p class="mb-5">In my career up to now, I’ve had the privilege of working at <a href="" class="link-accent">a start-up</a> and <a href="" class="link-accent">a digital agency</a>. With professional knowledge and pratical experience accumulated, I’m now looking for a new opportunity to challenge myself and stimulate diverse potential.</p>
            <p class="mb-5">Here are a few technologies I’ve been working with:</p>
            <div class="grid grid-cols-2">
              <ul class="list-inside list-disc">
                <li class="mb-2">HTML</li>
                <li class="mb-2">CSS / Sass</li>
                <li class="mb-2">JavaScript</li>
              </ul>
              <ul class="list-inside list-disc">
                <li class="mb-2">Bootstrap</li>
                <li class="mb-2">jQuery</li>
                <li class="mb-2">Vue.js / Nuxt.js</li>
              </ul>
            </div>
          </div>

          <div>
            <div class="relative w-11/12 mx-auto sm:w-9/12 lg:w-full">
              <div class="image-filter w-full pb-16/12 rounded bg-secondary-dark bg-cover bg-center bg-no-repeat relative z-10" :style="{ backgroundImage: `url(${require('@/assets/images/profile.jpg')})` }"></div>
              <div class="w-full h-full rounded border border-solid border-accent absolute top-4 left-4 sm:top-6 sm:left-6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="work" class="py-24">
      <div class="container">
        <h2 class="text-neutral mb-14">Some Projects I’ve Worked On</h2>
        <div class="grid grid-cols-1 gap-y-6 sm:gap-y-10 lg:gap-y-32">
          <featured-project-card 
            v-for="(item, index) in featuredProjects"
            :key="`item-${index}`"
            :image-url="item.imageUrl"
            :title="item.title"
            :content="item.content"
            :list="item.list"
            :link="item.link"
            :is-reverse="index % 2 === 0 ? true : false"
          ></featured-project-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import FeaturedProjectCard from '@/components/FeaturedProjectCard.vue';

export default {
  name: 'Home',
  components: {
    FeaturedProjectCard
  },
  data() {
    return {
      featuredProjects: [
        {
          imageUrl: require('@/assets/images/project-tigerair.jpg'),
          title: 'Tigerair Taiwan<br>Branding Website Revamp',
          content: `
            <p class="mb-3">A website for an airline that you could search for the latest flight information and more with multi-languages.</p>
            <p>This is one of the projects at <a href="" class="link-accent">DigiSalad</a>.<br>I built flexible front-end components, optimizing website responsiveness and cross-browser compatibility.</p>
          `,
          list: ['Vue.js', 'Nuxt.js', 'BootstrapVue', 'RWD'],
          link: 'http://'
        },
        {
          imageUrl: require('@/assets/images/project-langhamplace.jpg'),
          title: 'Langham Place Website',
          content: `
            <p class="mb-3">A website for a shopping mall that you could discover all kind of stores, special promotions and more.</p>
            <p>This is one of the projects at <a href="" class="link-accent">DigiSalad</a>.<br>I led front-end development, working closely with another developer to build components and meet desired functionality.</p>
          `,
          list: ['Vue.js', 'Nuxt.js', 'Bootstrap', 'Sass', 'RWD', 'SEO'],
          link: 'http://'
        }
      ]
    }
  }
}
</script>
