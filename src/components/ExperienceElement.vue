<script setup>
  defineProps(['experience'])
</script>

<template>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-white">{{ experience.startDate }} - {{ experience.endDate }}</time>
        <h3 class="text-lg font-semibold text-white">
            {{ experience.title }} {{ experience.location }}
        </h3>
        <p v-for="skill in experience.skills" 
            :key="skill"
            :skill="skill" 
            class="text-base font-normal text-white" >
            {{skill}}
        </p>
    </li>
</template>