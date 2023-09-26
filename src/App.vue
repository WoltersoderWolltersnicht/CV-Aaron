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
    <div class="flex flex-col justify-center items-center  w-4/12 m-auto h-auto" >

    <Header :personalData="configuration.personalData" />
    <Skills :skillsGroups="configuration.skills" />
    <Experiences :experiences="configuration.experiences" />
    </div>
  </div>
</template>

