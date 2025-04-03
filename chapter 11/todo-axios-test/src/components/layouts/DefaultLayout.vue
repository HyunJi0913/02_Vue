<!-- 기본 레이아웃을 나타내는 컴포넌트 -->

<template>
  <div class="container">
    <slot name="Header"> </slot>
    <slot name="NavBar"> </slot>
  </div>

  <div class="content my-5 px-3">
    <!-- v-slot:default -->
    <slot></slot>
  </div>
</template>

<script setup></script>
