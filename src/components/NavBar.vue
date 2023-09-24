<script>
import { ref } from 'vue';

export default {
    setup() {
        const menuOpen = ref(false)

        const openMenu = () => {
            menuOpen.value = !menuOpen.value
        }
        return { openMenu, menuOpen }
    }
};
</script>



<template>
    <nav class="bg-dark-header fixed w-screen h-16">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:p-1">
            <div href="https://flowbite.com/" class="flex items-center">
                </div>
            <button data-collapse-toggle="navbar-default" type="button" @click="openMenu"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />s
                </svg>
            </button>
            <div class="w-full md:block md:w-auto md:mx-auto" :class="[{'hidden': !menuOpen}]" id="navbar-default">
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:border-0 bg-dark-header md:bg-dark-header border-gray-700">
                    <li>
                        <a href="#"
                            @click="openMenu"
                            class="block py-2 pl-3 pr-4  rounded  md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                            aria-current="page">Me</a>
                    </li>
                    <li>
                        <a href="#Contact"
                            @click="openMenu"
                            class="block py-2 pl-3 pr-4  rounded  md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Contact</a>
                    </li>
                    <li>
                        <a href="#Skills"
                            @click="openMenu"
                            class="block py-2 pl-3 pr-4 rounded  md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Skills</a>
                    </li>
                    <li>
                        <a href="#WorkExperiences"
                            @click="openMenu"
                            class="block py-2 pl-3 pr-4 rounded  md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Experiences</a>
                    </li>
            </ul>
        </div>
    </div>
</nav></template>