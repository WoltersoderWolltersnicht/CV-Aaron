<script setup>
  defineProps(['skill'])
</script>

<template>
  <div class="skill">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <h3 class="skillname">{{skill.name}}</h3>
  <div class="stars">
    <div v-for="index in 5" :key="index">
      <span v-if="index<=skill.level" class="fa fa-star checked"/>
      <span v-else class="fa fa-star not-checked"/>
    </div>
  </div>
  </div>
</template>

<style>

  .skillname{
    min-width: 20%;
    font-weight: 400;
    font-size: large;
    white-space: nowrap;
  }

  .skill:hover .checked{
    color: orange;
  }

  .skill:hover .skillname{
    font-weight: 800;
  }


  .skill{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .stars{
    display: flex;
  }

  .checked {
    color: black;
  }

  .not-checked{
    color:gray
  }
</style>