<script setup>
  defineProps(['contact'])
</script>

<template>
    <div class="bg-dark-background2 text-dark-fontcolor rounded-md p-5 flex justify-evenly content-center flex-col sm:flex-row">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0" />
        <div class="" >
            <h3 class="text-dark-fontcolor text-lg font-bold">About Me</h3>
            <p>I am a 23 year old passionate and dedicated developer with a love for programming, learning new tecnologies and programing lenguages. Deeply enthusiastic about learing and applying design patterns, and programing architectures. Constantly seeking new challenges and projects to overcome.</p>
        </div>
        <div class="">
            <h3 class="text-dark-fontcolor text-lg font-bold">Contact</h3>
            <div class="contacts">
                <div class="flex flex-row mt-3 mb-3">
                    <span class="material-symbols-outlined">call</span>
                    <p>{{contact.phone}}</p>
                </div>
                <div class="flex flex-row mt-3 mb-3">
                    <span class="material-symbols-outlined">mail</span>
                    <p>{{contact.email}}</p>
                </div>
                <div class="flex flex-row mt-3 mb-3">
                    <span class="material-symbols-rounded">location_on</span>
                    <p>{{contact.adress}}</p>
                </div>
            </div>
        </div>
  </div>
</template>

<style>


        @media (max-width: 700px) {
    
        .about-contact{
           display: flex;
           flex-direction: column;
            justify-content: space-evenly;
        }

        .about{
            width: auto;
            margin:2%;
        }

        .contact{
            width: auto;
            margin:2%;
        }
    }
</style>