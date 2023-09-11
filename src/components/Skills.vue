<script setup>
    defineProps(['skillsGroups'])
</script>

<template>
    <div class = "bg-dark-background2 rounded-md grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3" > 
      <div class="flex flex-col mx-5 my-2.5" v-for="(skills) in skillsGroups" :key="(skills)">
        <h3 class="text-dark-fontcolor text-lg font-bold">{{skills.title}}</h3>
        
        <p class="text-dark-fontcolor"
        v-for="skill in skills.elements" :key="skill"
        :skill="skill">
        {{skill.name}}
        </p> 
     
      </div> 
    </div>
</template>
