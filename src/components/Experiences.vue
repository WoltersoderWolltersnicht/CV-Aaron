<script setup>
import Experience from './ExperienceElement.vue'
defineProps(['experiences'])
</script>

<template>
  <div class="min-w-full mt-10" >
    <h2 class="text-xl sm:text-2xl mb-1 font-bold scroll-mt-16  text-accent-base" id="WorkExperiences">
      Experiences</h2>
    <div class="mb-10">
      <ol class="relative border-l border-accent-border mx-auto ">
        <Experience v-for="experience in experiences" :key="experience" :skill="experience" :experience="experience" />
      </ol>
    </div>
  </div>
</template>