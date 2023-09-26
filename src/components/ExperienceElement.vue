<template>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <div>
        <li class="mb-5 ml-4 cursor-pointer">
            <div class="absolute w-4 h-4 rounded-full mt-1.5 -left-2 border border-accent-border bg-accent-base"></div>
            <time class="mb-1 text-sm font-normal leading-none text-white">{{ experience.startDate }} - {{
                experience.endDate
            }}</time>
            <div class="bg-dark-background2 rounded-md p-1.5">
                <div class="flex justify-end align-middle items-baseline">
                    <h3 class="float-left text-lg ml-0 flex-grow font-semibold text-white inline">
                        {{ experience.title }} {{ experience.location }}
                    </h3>
                </div>
                <div>
                    <p v-for="skill in experience.skills" :key="skill" :skill="skill"
                        class="text-base font-normal text-white">
                        {{ skill }}
                    </p>
                </div>
            </div>
        </li>
    </div>
</template>

<script setup>
    defineProps(['experience'])
</script>