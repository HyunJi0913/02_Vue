<template>
  <div class="card card-body">
    <h2>About</h2>
    <p>요청 경로 : {{ $route.fullPath }}</p>
  </div>
</template>
<script>
export default {
  name: 'About',
  created() {
    console.log(this.$route);
  },
};
</script>

<!--About.vue를 setup() 함수로 다시 정의하세요  -->
<!-- <template>
    <div class="card card-body">
      <h2>About</h2>
      <p>요청 경로 : {{ fullPath }}</p>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const fullPath = route.fullPath
  
  onMounted(() => {
    console.log(route)
  })
  </script> -->

<!-- About.vue를 Composion API로 다시 정의하 -->
<!-- <template>
    <div class="card card-body">
      <h2>About</h2>
      <p>요청 경로 : {{ fullPath }}</p>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const fullPath = route.fullPath
  
  onMounted(() => {
    console.log(route)
  })
  </script>
   -->
