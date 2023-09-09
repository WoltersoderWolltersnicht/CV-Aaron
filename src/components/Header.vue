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
      <h3>{{personalData.possition}}</h3>
    </div>
  </div>
</template>

<style>
  .header{    
    background-color:black; 
    padding: 0 0 27%;
    position: relative;
  }

  .content{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
  }

  .header-img{
    width:25%;
    position: absolute;
    left: 0;
    right: 0;
    top: 20%;
    margin-left: auto;
    margin-right: auto;
  }
</style>