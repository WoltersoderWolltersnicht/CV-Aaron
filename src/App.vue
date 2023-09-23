<script setup>
import Header from './components/Header.vue'
import ContactInformation from './components/ContactInformation.vue'
import Skills from './components/Skills.vue'
import Experiences from './components/Experiences.vue'

import configuration from './configuration.json'
</script>

<template>
  <Header :personalData="configuration.personalData" />
  <div class="bg-dark-background px-2 py-4 md:px-5 lg:px-56  xl:px-96">
    <ContactInformation :contact="configuration.contact" />
 
    <h2 class="text-dark-fontcolor text-center mt-10 text-[20px] sm:text-[30px] font-bold" id="Skills">Skills</h2>
    <Skills :skillsGroups="configuration.skills" />
 
    <h2 class="text-dark-fontcolor text-center mt-10 font-bold text-[20px] sm:text-[30px]" id="WorkExperiences">Experiences</h2>
    <Experiences :experiences="configuration.experiences"/>
  </div>
</template>

