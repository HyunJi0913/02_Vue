<!-- NavItem 컴포넌트 -->

<template>
  <li class="nav-item">
    <!-- 클릭시 주소가 /가 되고 <RouterView>자리에 컴포넌트 랜더링 -->
    <RouterLink :to="menu.uri" class="nav-link">{{
      props.menu.text
    }}</RouterLink>
  </li>
</template>

<script setup>
const props = defineProps({
  menu: {
    type: Object,
    required: true,
  },
});
</script>
