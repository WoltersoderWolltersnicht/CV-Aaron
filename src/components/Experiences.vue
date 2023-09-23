<script setup>
  import Experience from './ExperienceElement.vue'
  defineProps(['experiences'])
</script>

<template>
  <div class="flex">
    <ol class="relative border-l border-white my-5 mx-auto">
        <Experience v-for="experience in experiences" :key="experience"
        :skill="experience" :experience="experience"/>
    </ol>
  </div>
</template>