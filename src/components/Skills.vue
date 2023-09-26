<script setup>
defineProps(['skillsGroups'])
</script>

<template>
  <div class="mt-10 min-w-full text-dark-fontcolor">
    <h2 class=" text-[20px] sm:text-[30px] font-bold scroll-mt-20 mb-1.5 " id="Skills">Skills
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 justify-center gap-5">
      <div class="flex flex-col bg-dark-background2 rounded h-full items-center" v-for="(skills) in skillsGroups" :key="(skills)">
        <h3 class="text-lg font-bold">{{ skills.title }}</h3>

        <p v-for="skill in skills.elements" :key="skill" :skill="skill">
          {{ skill.name }}
        </p>

      </div>
    </div>
  </div>
</template>
