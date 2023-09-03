<template>
<div>
        <div class="header">
            <img src="./../assets/image.png">
        </div>
        <div class="content">
            <h1>Aaron Sanchez Wolters</h1>
            <h3>Software Developer</h3>
        </div>
        </div>
</template>

<style>
  .header{    
    background-color:black; 
    width:100%; 
    padding: 0 0 30%;
    position: relative;
  }

  .content{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 7%;
  }

  img{
    width:30%;
    position: absolute;
    left: 0;
    right: 0;
    top: 20%;
    margin-left: auto;
    margin-right: auto;
  }
</style>