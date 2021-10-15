<template>
    <header class="fixed z-99 w-full py-5 transition-all lg:bg-primary lg:bg-opacity-75 lg:backdrop-filter lg:backdrop-blur-sm lg:backdrop-brightness-75" :class="{ 'opacity-0': scrollTop > 0 && isScrollingDown }">
        <div class="container-fluid flex items-center">
            <router-link to="/" class="mr-auto">
                <div class="w-12 h-12 rounded-full bg-neutral bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: `url(${require('@/assets/images/logo.jpg')})` }"></div>
            </router-link>

            <nav class="hidden lg:flex lg:items-center">
                <ul class="text-neutral mx-8">
                    <li class="inline-block mx-8"><router-link to="/">About</router-link></li>
                    <li class="inline-block mx-8"><router-link to="/">Work</router-link></li>
                    <li class="inline-block mx-8"><router-link to="/">Contact</router-link></li>
                </ul>
                <a href="https://drive.google.com/file/d/1DJ18ZgKjpqEf5dEsIiRYeSgQvJlFXcLU/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="button-accent">Resume</a>
            </nav>

            <button class="hamburger-menu" :class="{ 'hamburger-menu--close': $store.state.isMenuOpened }" @click="toggleMenu">
                <div class="hamburger-menu__inner"></div>
            </button>

            <aside class="sidebar" :class="{ 'sidebar--opened': $store.state.isMenuOpened }">
                <nav class="text-center w-full">
                    <ul class="text-neutral text-lg -mt-8 mb-16">
                        <li class="my-8"><router-link to="/" class="block p-4">About</router-link></li>
                        <li class="my-8"><router-link to="/" class="block p-4">Work</router-link></li>
                        <li class="my-8"><router-link to="/" class="block p-4">Contact</router-link></li>
                    </ul>
                    <a href="https://drive.google.com/file/d/1DJ18ZgKjpqEf5dEsIiRYeSgQvJlFXcLU/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="button-accent inline-block">Resume</a>
                </nav>
            </aside>
        </div>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            scrollTop: 0,
            isScrollingDown: false
        }
    },
    methods: {
        toggleMenu() {
            this.$store.dispatch('toggleMenu', !this.$store.state.isMenuOpened);
        },
        scrollHandler() {
            const scroll = window.scrollY || window.pageYOffset;

            if (scroll > this.scrollTop) {
                this.isScrollingDown = true;
            } else {
                this.isScrollingDown = false;
            }
            this.scrollTop = scroll;
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('scroll', this.scrollHandler);
        });
    },
    destroyed() {
        window.removeEventListener('scroll', this.scrollHandler);
    }
}
</script>

<style lang="postcss" scoped>
.hamburger-menu {
    @apply w-16 h-16 -m-4 flex justify-center items-center lg:hidden;
}

.hamburger-menu__inner {
    @apply w-8 h-0.5 relative;
}

.hamburger-menu__inner::before,
.hamburger-menu__inner::after {
    content: '';
    @apply block h-full absolute right-0;
}

.hamburger-menu__inner::before {
    @apply w-4/5 -top-2.5;
}

.hamburger-menu__inner::after {
    @apply w-2/4 top-2.5;
}

.hamburger-menu__inner,
.hamburger-menu__inner::before,
.hamburger-menu__inner::after {
    @apply bg-neutral rounded-full transition-all;
}

.hamburger-menu.hamburger-menu--close .hamburger-menu__inner {
    @apply transform rotate-45
}

.hamburger-menu.hamburger-menu--close .hamburger-menu__inner::before {
    @apply w-0
}

.hamburger-menu.hamburger-menu--close .hamburger-menu__inner::after {
    @apply w-full transform rotate-90 -translate-y-2.5
}

.sidebar {
    @apply w-9/12 h-full bg-secondary-dark fixed -z-1 top-0 -right-full p-5 flex justify-center items-center transition-all sm:w-6/12 sm:p-10 lg:hidden;
}

.sidebar.sidebar--opened {
    @apply right-0;
}
</style>