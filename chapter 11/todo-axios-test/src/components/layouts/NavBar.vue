<!-- 기본 레이아웃을 나타내는 컴포넌트 -->

<template>
  <nav class="navbar navbar-expand bg-body-tertiary">
    <div class="container-fluid">
      <div class="collpase navbar-collapse">
        <ul class="navbar-nav">
          <NavItem v-for="menu in menus" :menu="menu"></NavItem>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import NavItem from './NavItem.vue';

//navitem에 전달할 주소/text 배열
const menus = [
  {
    uri: '/',
    text: 'Home',
  },
  {
    uri: '/all',
    text: 'All',
  },
  {
    uri: '/get/1',
    text: 'Get',
  },
  {
    uri: '/post',
    text: 'Post',
  },
];
</script>
