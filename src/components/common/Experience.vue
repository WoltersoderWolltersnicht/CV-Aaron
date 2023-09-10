<script setup>
  defineProps(['header', 'startDate', 'endDate', 'secondHeader', 'description'])
</script>

<template>
    <div class="experience-element">
        <div class="experience-header">
            <h3 class="experience-header">{{header}}</h3>
            <h4 class="experience-date">{{startDate}} - {{endDate}}</h4>
        </div>
        <div class="experience-body">
            <h3>{{secondHeader}}</h3>
            <p>{{description}}</p>
        </div>
    </div>
</template>

<style>     
    .experience-element{
        display: flex;
    }

    .experience-header{
        background-color: #378c3f;
        color: #ffffff;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 3% 0;
        text-align: center;
    }


    .experience-body{
        background-color: #ffffff;
        padding: 2%;
        width: 90%;
    }

    @media (max-width: 800px) {
    
        .experience-element{
            display: flex;
            flex-flow: column;
        }

        .experience-body{
            width:auto;
        }
        
    }


</style>