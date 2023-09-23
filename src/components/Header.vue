<script setup>
  defineProps(['personalData'])
</script>

<template>
    <div class="bg-dark-header p-5	flex  flex-col justify-center items-center h-screen" >
      <img class="w-64"  src="./../assets/image.png">
      <h1 class="text-[22px] lg:text-[33px] font-bold dark:text-white">{{personalData.name}}</h1>
      <h2 class="text-lg text-white">{{personalData.possition}}</h2>
    </div>
</template>