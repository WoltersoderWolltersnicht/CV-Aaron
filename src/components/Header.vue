<script setup>
  defineProps(['personalData'])
</script>

<template>
    <div class="bg-dark-header	flex  flex-col justify-center items-center h-screen" >
      <img class="w-64 sm:w-96"  src="./../assets/image.png">
      <h1 class="text-[24px] sm:text-[48px] font-bold dark:text-white">{{personalData.name}}</h1>
      <h2 class="text-[20px] sm:text-[40px] text-white">{{personalData.possition}}</h2>
    </div>
</template>