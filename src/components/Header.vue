<script setup>
  import ContactInformation from './ContactInformation.vue';
  import About from './About.vue';

  defineProps(['personalData'])
</script>

<template>
      <img class="mt-20 w-64 sm:w-80"  src="./../assets/image.png">
      <h1 class="text-[24px] sm:text-[48px] font-bold text-white">{{personalData.name}}</h1>
      <h2 class="text-[20px] sm:text-[40px] text-white">{{personalData.possition}}</h2>
      <ContactInformation :contact="personalData.contact"/>
      <About/>
</template>