<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <router-link class="navbar-brand" to="/">
        <i class="fa-solid fa-house"></i> {{ config.title }}
      </router-link>
      <ul class="navbar-nav ms-4">
        <li v-for="menu in config.menus" :key="menu.title" class="nav-item mx-2">
          <router-link class="nav-link text-white" :to="menu.url">
            <i :class="menu.icon"></i> {{ menu.title }}
          </router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import config from '../config'
  </script>
  