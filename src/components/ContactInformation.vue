<script setup>
    defineProps(['contact'])
</script>

<template>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0" />
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0" />
        <div class="flex flex-col text-dark-fontcolor rounded p-3 m-5 bg-dark-background2 border border-accent-base sm:text-lg">
            <div class="flex mt-1.5 ">
                <span class="material-symbols-outlined">call</span>
                <p class="ml-2">{{ contact.phone }}</p>
            </div>
            <div class="flex mt-3">
                <span class="material-symbols-outlined">mail</span>
                <p class="ml-2">{{ contact.email }}</p>
            </div>
            <a class="hover:text-accent-base hover:font-bold" :href="contact.gitlab">
                <div class="flex flex-row mt-3">
                    <img class="w-6 h-6" src="./../assets/github.png" />
                    <p class="ml-2">Github</p>
                </div>
            </a>
            <a class="hover:text-accent-base hover:font-bold" >
                <div class="flex flex-row mt-3">
                    <img class="w-6 h-6" src="./../assets/linkedin.png" />
                    <p class="ml-2">LinkedIn</p>
                </div>
            </a>
        </div>
</template>