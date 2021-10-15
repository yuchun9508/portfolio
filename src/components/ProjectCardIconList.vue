<template>
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
</template>

<script>
export default {
    name: 'ProjectCardIconList',
    props: {
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

<style lang="postcss" scoped>
.icon-external-link {
    background-image: url('../assets/images/icon-external-link.svg');
}
.icon-source-code {
    background-image: url('../assets/images/icon-source-code.png');
}
</style>