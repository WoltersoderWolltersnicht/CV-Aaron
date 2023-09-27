<script setup>
  import ContactInformation from './ContactInformation.vue';
  import About from './AboutMe.vue';

  defineProps(['personalData'])
</script>

<template>
      <img class="mt-20 w-48 md:w-80"  src="./../assets/image.png">
      <h1 class="text-xl sm:text-5xl font-bold text-white">{{personalData.name}}</h1>
      <h2 class="mt-2 text-lg sm:text-3xl text-white">{{personalData.possition}}</h2>
      <a href="../assets/CV_AaronSanchezWolters" download="CV_AaronSanchezWolters.pdf" >
        <button class="mt-2 align-baseline h-10 bg-accent-base border border-accent-border p-2 pb-8 rounded-full" href="../assets/CV_AaronSanchezWolters.pdf" download="CV_AaronSanchezWolters">Download CV</button>
      </a>

      <ContactInformation :contact="personalData.contact"/>
      <About :about ="personalData.about"/>
</template>