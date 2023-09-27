<template>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <div>
        <li class="mb-5 ml-4 cursor-pointer">
            <div class="absolute w-4 h-4 rounded-full mt-1.5 -left-2 border border-accent-border bg-accent-base"></div>
            <time class="mb-1 text-sm font-normal leading-none text-white">{{ experience.startDate }} - {{
                experience.endDate
            }}</time>
            <div class="bg-dark-background2 rounded-md border hover:border-accent-base">
                <div class="flex flex-col justify-end align-middle items-baseline">
                    <h3 class="float-left text-lg sm:text-xl mx-3 flex-grow font-semibold text-accent-base">
                        {{ experience.title }} {{ experience.location }}
                    </h3>
                    <p v-for="skill in experience.skills" :key="skill" :skill="skill"
                        class="text-base font-normal text-white mx-3 my-1.5">
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