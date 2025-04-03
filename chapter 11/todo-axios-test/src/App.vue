<template>
  <!-- 첫 페이지 열자마자  defaultlayout 뜨게끔  -->
  <DefaultLayout>
    <!-- 렌더링시 화면에 보이지 않음 . -->
    <!-- header slot에 Header 컴포넌트 끼워넣기 -->
    <template v-slot:Header><Header></Header></template>

    <!-- navbar slot에 NavBar 컴포넌트 끼워넣기 -->
    <template v-slot:NavBar><NavBar></NavBar></template>

    <!-- <slot>에 라우트된 페이지 끼워넣기 끼워넣기 -->
    <template v-slot:default><RouterView></RouterView></template>
  </DefaultLayout>
</template>

<script setup>
import { RouterView } from 'vue-router';
import DefaultLayout from './components/layouts/DefaultLayout.vue';
import Header from './components/layouts/Header.vue';
import NavBar from './components/layouts/Navbar.vue';
</script>
