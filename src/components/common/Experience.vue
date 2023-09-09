<script setup>
  defineProps(['header', 'startDate', 'endDate', 'secondHeader', 'description'])
</script>

<template>
    <div class="experience-element">
        <div class="experience-header">
            <h3 class="experience-header">{{header}}</h3>
            <h3 class="experience-date">{{startDate}} - {{endDate}}</h3>
        </div>
        <div class="experience-body">
            <h3>{{secondHeader}}</h3>
            <div>{{description}}</div>
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
        padding: 3%;
        font-size: 1,4em;
        white-space: nowrap;
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