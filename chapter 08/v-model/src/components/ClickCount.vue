<template>
  <div>
    <h1>자식 Click Count : {{ cnt }}</h1>
  </div>
</template>

<script>
import ChildCleackCount from './ChildCleackCount.vue';
export default {
  name: 'ClickCount',
  components: { ChildCleackCount },

  // provide로 제공된 정보 삽입하기
  inject: ['cnt'],
};
</script>
