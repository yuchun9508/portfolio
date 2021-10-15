<template>
    <div class="bg-secondary-dark rounded overflow-hidden relative py-10 px-5 sm:py-16 sm:px-10 lg:bg-transparent lg:rounded-none lg:overflow-visible lg:p-0">
        <div class="image-filter w-full h-full absolute z-0 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-cover bg-center bg-no-repeat opacity-5 lg:hidden" :style="{ backgroundImage: `url(${imageUrl})` }"></div>
        <div class="grid grid-cols-1 relative z-10 lg:grid-cols-9">
            <div class="lg:col-span-4 lg:relative">
                <div class="lg:w-22/12 lg:absolute lg:z-10 lg:top-1/2 lg:transform lg:-translate-y-1/2 xl:w-14/12 " :class="{ 'lg:right-0 lg:text-right': isReverse }">
                    <div class="text-accent mb-1">Featured Project</div>
                    <h3 class="text-neutral mb-6 sm:mb-8 lg:mb-6" v-html="title"></h3>
                    <div class="text-neutral mb-6 sm:mb-8 lg:mb-4 lg:bg-secondary-dark lg:rounded lg:filter lg:drop-shadow-3xl lg:p-6" v-html="content"></div>
                    <project-card-tag-list
                        class="mb-6"
                        :list="list"
                    ></project-card-tag-list>
                    <project-card-icon-list
                        :source="source"
                        :link="link"
                    ></project-card-icon-list>
                </div>
            </div>
            <div class="hidden lg:block col-span-5" :class="{ 'order-first': isReverse }">
                <a :href="link" target="_blank" rel="noopener noreferrer">
                    <div class="image-filter w-full pb-9/12 rounded bg-secondary bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: `url(${imageUrl})` }"></div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectCardIconList from '@/components/ProjectCardIconList.vue';
import ProjectCardTagList from '@/components/ProjectCardTagList.vue';

export default {
    name: 'FeaturedProjectCard',
    components: {
        ProjectCardIconList,
        ProjectCardTagList
    },
    props: {
        imageUrl: {
            type: String,
            default: () => '',
        },
        title: {
            type: String,
            default: () => '',
        },
        content: {
            type: String,
            default: () => '',
        },
        list: {
            type: Array,
            default: () => [],
        },
        source: {
            type: String,
            default: () => '',
        },
        link: {
            type: String,
            default: () => '',
        },
        isReverse: {
            type: Boolean,
            default: () => false,
        } 
    }
}
</script>