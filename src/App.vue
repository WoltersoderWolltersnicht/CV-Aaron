<script setup>
  import Header from "./components/Header.vue";
  import Contact from "./components/AboutContact.vue";
  import Tecnologies from "./components/common/Skill.vue";
  import Experiences from "./components/common/Experience.vue";
  import configuration from './configuration.json'
  
</script>

<template>
  <Header :personalData="configuration.personalData"/>
    
    <div class="box">
      <Contact :contact="configuration.contact"/>
    </div>
    
    <h2 class="app-header"  id="Skills">Skills</h2>
    <div class = "grid" > 
      <div class="skill-group" v-for="(skills) in configuration.skills" :key="(skills)">
        <h4 class="skill-group-title">{{skills.title}}</h4>
        <Tecnologies 
        v-for="skill in skills.elements" :key="skill"
        :skill="skill"/>
      </div> 
    </div>

    <h2 class="app-header"  id="WorkExperiences">Experiences</h2>
    <div class="transparent-box">
    <Experiences 
      v-for="experience in configuration.experiences" :key="experience" 
      :header= "experience.companyName"
      :startDate= "experience.startDate"
      :endDate= "experience.endDate"
      :secondHeader= "experience.possition"
      :description= "experience.description"/>
    </div>

    <h2 class="app-header"  id="Education">Education</h2>
    <div class="transparent-box">
    <Experiences 
      v-for="education in configuration.educations" :key="education" 
      :header= "education.title"
      :startDate= "education.startDate"
      :endDate= "education.endDate"
      :secondHeader= "education.school"
      :description= "education.description"/>
    </div>
</template>

<style>
  .grid{
    display: flex;
    background-color: #ffffff;
    border-radius: 1%;
    padding: 1%;
    margin: auto 10%;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px 2%;
  }

   @media (max-width: 500px) {
    
        .grid{
          justify-content: center;
        }
        
    }

  .skill-group{
    display: flex;
    flex-direction: column;
    min-width:40%;
  }

  .skill-group-title{
    margin: 1% 0%;
  }

  .transparent-box{
     margin: auto 10%;
  }

  .box{
    background-color: #ffffff;
    border-radius: 1%;
    padding: 1%;
    margin: auto 10%;
  }

  .app-header{
    margin-top: 100px;
    text-align: center;
  }
</style>

