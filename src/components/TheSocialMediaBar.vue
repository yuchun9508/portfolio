<template>
    <div class="w-12 fixed bottom-28 left-5 hidden lg:block sm:left-8 xl:left-20">
        <ul class="-my-4 text-center">
            <li class="inline-block my-4">
                <a href="" target="_blank" rel="noopener noreferrer" class="inline-block">
                    <span class="icon icon-linkedin w-10 h-10"></span>
                </a>
            </li>
            <li class="inline-block my-4">
                <a href="" target="_blank" rel="noopener noreferrer" class="inline-block">
                    <span class="icon icon-github w-10 h-10"></span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TheSocialMediaBar'
}
</script>

<style lang="postcss" scoped>
.icon-linkedin {
    background-image: url('../assets/images/icon-linkedin.svg');
}
.icon-github {
    background-image: url('../assets/images/icon-github.svg');
}
</style>