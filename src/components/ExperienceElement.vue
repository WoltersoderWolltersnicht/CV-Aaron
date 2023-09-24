<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <div>
        <li class="mb-5 ml-4 dropdown cursor-pointer" @click="mobileClick">
            <div class="absolute w-4 h-4 rounded-full mt-1.5 -left-2 border border-white bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-white">{{ experience.startDate }} - {{
                experience.endDate
            }}</time>
            <div class="bg-dark-background2 rounded-md p-1.5">
                <div class="flex justify-end align-middle items-baseline">
                    <h3 class="float-left text-lg ml-0 flex-grow font-semibold text-white inline">
                        {{ experience.title }} {{ experience.location }}
                    </h3>
                    <span class="material-symbols-outlined text-dark-fontcolor  float-right " :class="[{'rotate-180': menuOpen}]">expand_more</span>
                </div>
                <div :class="[{ 'h-0': !menuOpen },
                { 'invisible': !menuOpen },
                { 'visible': menuOpen },
                { 'h-auto': menuOpen }]">
                    <p v-for="skill in experience.skills" :key="skill" :skill="skill"
                        class="text-base font-normal text-white">
                        {{ skill }}
                    </p>
                </div>
            </div>
        </li>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const menuOpen = ref(false)

        const mobileClick = () => {
            menuOpen.value = !menuOpen.value
        }
        return { mobileClick, menuOpen }
    },
    props: ['experience'],
};
</script>

