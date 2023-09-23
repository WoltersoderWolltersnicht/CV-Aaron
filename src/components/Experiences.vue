<script setup>
  import Experience from './ExperienceElement.vue'
  defineProps(['experiences'])
</script>

<template>
  <div
    class="bg-dark-background2 rounded-md grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
    <ol class="relative border-l border-white m-5">
        <Experience v-for="experience in experiences" :key="experience"
        :skill="experience" :experience="experience"/>
    </ol>
  </div>
</template>