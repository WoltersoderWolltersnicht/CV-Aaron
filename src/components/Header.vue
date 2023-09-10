<script setup>
  defineProps(['personalData'])
</script>

<template>
  <div>
    <div class="header">
      <img class="header-img" src="./../assets/image.png">
    </div>
    <div class="content">
      <h1>{{personalData.name}}</h1>
      <h2>{{personalData.possition}}</h2>
    </div>
  </div>
</template>

<style>
  .header{    
    background-color:black; 
    display: flex;
    justify-content: center;
  }

  .content{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3%;
  }

  .header-img{
    width:25%;
    margin: 10% 0 5% 0;
  }
</style>