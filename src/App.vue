<script setup>
import NavBar from './components/NavBar.vue'
import Header from './components/Header.vue'
import Skills from './components/Skills.vue'
import Experiences from './components/Experiences.vue'

import configuration from './configuration.json'
</script>

<template>
  <NavBar />
  <div class="bg-dark-header">
    <div class="flex flex-col justify-center items-center w-10/12 lg:7/12  xl:w-5/12 m-auto h-auto text-lg sm:text-xl">
      <Header :personalData="configuration.personalData"/>
      <Skills :skillsGroups="configuration.skills"/>
      <Experiences :experiences="configuration.experiences"/>
    </div>
  </div>
</template>
