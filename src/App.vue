<script setup>
  import Header from "./components/Header.vue";
  import About from "./components/About.vue";
  import Contact from "./components/Contact.vue";
  import Tecnologies from "./components/Skills.vue";
  import WorkExperiences from "./components/WorkExperiences.vue";
</script>

<template>
    <Header/>
  <div class="display">
    <About/>
    <Contact/>
    <WorkExperiences/>
    <Tecnologies/>
  </div>
</template>

<style>
@media (min-width: 600px) {
  .display{
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: 1fr min-content;
    grid-auto-flow: column;
    gap: 5%;
  }
}
  
</style>

