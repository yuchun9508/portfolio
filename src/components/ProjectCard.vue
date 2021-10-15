<template>
    <div class="flex flex-col bg-secondary-dark rounded py-10 px-5 sm:py-12 sm:px-10 lg:p-6 xl:p-10">
        <div class="text-right mb-6" :class="{ 'h-7': !source && !link }">
            <project-card-icon-list
                :source="source"
                :link="link"
            ></project-card-icon-list>
        </div>
        <h3 class="text-neutral mb-4" v-html="title"></h3>
        <div class="text-neutral mb-5" v-html="content"></div>
        <project-card-tag-list
            class="mt-auto"
            :list="list"
        ></project-card-tag-list>
    </div>
</template>

<script>
import ProjectCardIconList from '@/components/ProjectCardIconList.vue';
import ProjectCardTagList from '@/components/ProjectCardTagList.vue';

export default {
    name: 'ProjectCard',
    components: {
        ProjectCardIconList,
        ProjectCardTagList
    },
    props: {
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
        }
    }
}
</script>