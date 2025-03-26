<template>
  <div class="child">
    <h2>Child2</h2>
  </div>
</template>
<script>
export default {
  name: 'Child2',
};
</script>
<!--Child1, Child2의 <style>을 <style scoped>로 변경하고,
브라우저 콘솔의 DOM을 확인하세요 -->
<style scoped>
.child {
  background-color: blue;
  border: solid 1px black;
  margin: 1.5em;
  padding: 1em;
}
</style>
