<script setup>
    defineProps(['skillsGroups'])
</script>

<template>
    <div class = "grid grid-cols-1 sm:grid-cols-2 place-items-start gap-5"> 
      <div class="flex flex-col mx-auto p-3 bg-dark-background2 rounded-md w-60 h-full items-center" v-for="(skills) in skillsGroups" :key="(skills)">
        <h3 class="text-dark-fontcolor text-lg font-bold">{{skills.title}}</h3>
        
        <p class="text-dark-fontcolor"
        v-for="skill in skills.elements" :key="skill"
        :skill="skill">
        {{skill.name}}
        </p> 
     
      </div> 
    </div>
</template>
