<template>
    <div class="header text-white text-center py-4" :style="bgStyle">
      <h1>{{ config.title }}</h1>
      <p>{{ config.subtitle }}</p>
    </div>
  </template>
  
  <script setup>
  import config from '../config'
  
  const bgStyle = {
    backgroundImage: "url('@/assets/bg.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
  </script>
  
  <style scoped>
  .header {
    min-height: 150px;
  }
  </style>
  