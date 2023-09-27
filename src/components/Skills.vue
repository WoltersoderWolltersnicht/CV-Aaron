<script setup>
defineProps(['skillsGroups'])
</script>

<template>
  <div class="mt-10 min-w-full ">
    <h2 class="text-xl sm:text-2xl text-accent-base font-bold scroll-mt-16 mb-1.5" id="Skills">Skills</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 justify-center gap-5">
      <div class="flex flex-col bg-dark-background2 rounded h-full items-center border hover:border-accent-base p-2" v-for="(skills) in skillsGroups" :key="(skills)">
        <h3 class="text-lg sm:text-xl font-bold text-accent-base">{{ skills.title }}</h3>

        <p class="text-dark-fontcolor" v-for="skill in skills.elements" :key="skill" :skill="skill">
          {{ skill.name }}
        </p>

      </div>
    </div>
  </div>
</template>
