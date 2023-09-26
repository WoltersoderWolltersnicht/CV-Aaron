<script setup>
  import ContactInformation from './ContactInformation.vue';
  import About from './About.vue';

  defineProps(['personalData'])
</script>

<template>
      <img class="mt-20 w-48 md:w-80"  src="./../assets/image.png">
      <h1 class="text-2xl sm:text-5xl font-bold text-white">{{personalData.name}}</h1>
      <h2 class="mt-2 text-lg sm:text-3xl text-white">{{personalData.possition}}</h2>
      <ContactInformation :contact="personalData.contact"/>
      <About/>
</template>