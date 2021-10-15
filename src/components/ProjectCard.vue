<template>
    <div class="flex flex-col bg-secondary-dark rounded py-10 px-5 sm:py-12 sm:px-10 lg:p-6 xl:p-10">
        <div class="text-right mb-6" :class="{ 'h-7': !source && !link }">
            <ul class="-mx-3">
                <li v-if="source" class="inline-block mx-3">
                    <a :href="source" target="_blank" rel="noopener noreferrer" class="inline-block p-3 -m-3">
                        <span class="icon icon-source-code"></span>
                    </a>
                </li>
                <li v-if="link" class="inline-block mx-3">
                    <a :href="link" target="_blank" rel="noopener noreferrer" class="inline-block p-3 -m-3">
                        <span class="icon icon-external-link"></span>
                    </a>
                </li>
            </ul>
        </div>
        <h3 class="text-neutral mb-4" v-html="title"></h3>
        <div class="text-neutral mb-5" v-html="content"></div>
        <ul class="-mx-2 mt-auto">
            <li v-for="(text, index) in list" :key="`item-${index}`" class="inline-block mx-2 my-1">{{ text }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
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