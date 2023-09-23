<script setup>
import Header from './components/Header.vue'
import ContactInformation from './components/ContactInformation.vue'
import Skills from './components/Skills.vue'
import Experiences from './components/Experiences.vue'

import configuration from './configuration.json'
</script>

<template>
  <Header :personalData="configuration.personalData" />
  
  <div class="bg-dark-background p-2 md:p-5 lg:px-20">
    <ContactInformation :contact="configuration.contact" />
 
    <h2 class="text-dark-fontcolor text-center mt-10 font-bold" id="Skills">Skills</h2>
    <Skills :skillsGroups="configuration.skills" />
 
    <h2 class="text-dark-fontcolor text-center mt-10 font-bold" id="WorkExperiences">Experiences</h2>
    <Experiences :experiences="configuration.experiences"/>
  </div>
</template>

