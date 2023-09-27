<script setup>
    defineProps(['about'])
</script>
<template>
    <div class="mt-10 flex flex-col">
        <h3 class="text-xl sm:text-2xl font-bold mb-1.5 text-accent-base scroll-mt-16 " id="AboutMe">About Me</h3>
        <p class="text-dark-fontcolor">{{ about }}</p>
    </div>
</template>