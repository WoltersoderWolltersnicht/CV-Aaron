<script setup>
import Experience from './ExperienceElement.vue'
defineProps(['experiences'])
</script>

<template>
  <div class="min-w-full">
    <h2 class="text-dark-fontcolor mt-10 mb-1 font-bold text-[20px] sm:text-[30px] scroll-mt-20" id="WorkExperiences">
      Experiences</h2>
    <div class="mb-20">
      <ol class="relative border-l border-accent-border mx-auto ">
        <Experience v-for="experience in experiences" :key="experience" :skill="experience" :experience="experience" />
      </ol>
    </div>
  </div>
</template>