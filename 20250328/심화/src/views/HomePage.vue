<template>
  <div class="container mt-5">
    <h1>Welcome to {{ title }}</h1>
    <p>{{ subtitle }}</p>
  </div>
</template>

<script setup>
import config from '../config'
const { title, subtitle } = config
</script>
