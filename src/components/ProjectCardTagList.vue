<template>
    <ul class="-mx-2">
        <li v-for="(text, index) in list" :key="`item-${index}`" class="inline-block mx-2 my-1">{{ text }}</li>
    </ul>
</template>

<script>
export default {
    name: 'ProjectCardTagList',
    props: {
        list: {
            type: Array,
            default: () => [],
        }
    }
}
</script>