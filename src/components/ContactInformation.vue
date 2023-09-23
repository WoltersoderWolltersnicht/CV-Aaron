<script setup>
  defineProps(['contact'])
</script>

<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0" />
    <div class="bg-dark-background2 text-dark-fontcolor rounded-md p-6 flex flex-col sm:flex-row" >
        <div class="sm:w-1/2">
            <h3 class="text-dark-fontcolor text-[20px] sm:text-[30px] font-bold">About Me</h3>
            <p class="mt-1.5">I am a 23 year old passionate and dedicated developer with a love for programming, learning new tecnologies and programing lenguages. Deeply enthusiastic about learing and applying design patterns, and programing architectures. Constantly seeking new challenges and projects to overcome.</p>
        </div>
        <div class="sm:w-1/2 mt-5 sm:mt-0 sm:ml-12">
            <h3 class="text-dark-fontcolor text-[20px] sm:text-[30px] font-bold">Contact</h3>
            <div class="flex-col justify-evenly items-stretch">
                <div class="flex flex-row mt-1.5">
                    <span class="material-symbols-outlined">call</span>
                    <p>{{contact.phone}}</p>
                </div>
                <div class="flex flex-row mt-3">
                    <span class="material-symbols-outlined">mail</span>
                    <p>{{contact.email}}</p>
                </div>
                <div class="flex flex-row mt-3">
                    <span class="material-symbols-rounded">location_on</span>
                    <p>{{contact.adress}}</p>
                </div>
            </div>
        </div>
  </div>
</template>