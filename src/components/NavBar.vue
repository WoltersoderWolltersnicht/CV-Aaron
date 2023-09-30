<script>
import { ref } from 'vue';

export default {
    setup() {
        const menuOpen = ref(false)

        const openMenu = () => {
            menuOpen.value = !menuOpen.value
        }

        const selectMenuItem = () => {
            openMenu()
            this.$refs.c
        }
        return { openMenu, menuOpen, selectMenuItem }
    }
};
</script>



<template>
    <nav class="bg-dark-header fixed w-screen h-16">
        <a :href="'/CV_AaronSanchezWolters.pdf'" target="_parent" download="CV_AaronSanchezWolters.pdf">
            <button type="button"
                class="fixed m-4  flex bg-accent-base border border-accent-border font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">Download CV</button>
        </a>
        <div class="max-w-screen-xl flex flex-row justify-end mx-auto p-4 sm:justify-between sm:p-1 h-16">
            <div :class="[{ 'my-hidden': !menuOpen }]"
                class="mt-10 sm:!block sm:w-auto sm:mt-0 sm:!visible sm:mx-auto sm:self-center" id="navbar-default">
                <ul
                    class="font-medium flex flex-col sm:p-0 border rounded-lg sm:flex-row sm:space-x-8 sm:border-0 bg-dark-header sm:bg-dark-header border-gray-700">
                    <li>
                        <a href="#" @click="selectMenuItem"
                            class="block py-2 pl-3 pr-4  rounded  sm:border-0  sm:p-0 text-white sm:hover:text-accent-base hover:bg-gray-700 hover:text-accent-base sm:hover:bg-transparent"
                            aria-current="page">Me</a>
                    </li>
                    <li>
                        <a href="#AboutMe" @click="selectMenuItem"
                            class="block py-2 pl-3 pr-4  rounded  sm:border-0  sm:p-0 text-white sm:hover:text-accent-base hover:bg-gray-700 hover:text-accent-base sm:hover:bg-transparent"
                            aria-current="page">About</a>
                    </li>
                    <li>
                        <a href="#Skills" @click="selectMenuItem"
                            class="block py-2 pl-3 pr-4 rounded  sm:border-0  sm:p-0 text-white sm:hover:text-accent-base hover:bg-gray-700 hover:text-accent-base sm:hover:bg-transparent">Skills</a>
                    </li>
                    <li>
                        <a href="#WorkExperiences" @click="selectMenuItem"
                            class="block py-2 pl-3 pr-4 rounded  sm:border-0  sm:p-0 text-white sm:hover:text-accent-base hover:bg-gray-700 hover:text-accent-base sm:hover:bg-transparent">Experiences</a>
                    </li>
                </ul>
            </div>
            <button data-collapse-toggle="navbar-default" type="button" @click="openMenu"
                class="inline-flex items-center w-10 h-10 justify-center text-sm rounded-lg sm:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />s
                </svg>
            </button>

        </div>
    </nav>
</template>

<style>
.my-hidden {
    visibility: hidden;
}</style>