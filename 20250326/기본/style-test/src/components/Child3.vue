<template>
  <!-- Child3.vue을 <style>을 module로 설정한 경우 다음 코드를 완성하세요 -->
  <div class :class="$style.child">
    <h2>Child3</h2>
  </div>
</template>
<script>
export default {
  name: 'Child3',
  created() {
    console.log(this.$style);
  },
};
</script>
<style module>
.child {
  background-color: orange;
  border: solid 1px black;
  margin: 1.5em;
  padding: 1em;
}
</style>
