<template>
  <div>
    <NoSlotTest />
    <SlotTest />
  </div>
</template>
<script>
import CheckBox1 from './components/CheckBox1.vue';
import NoSlotTest from './components/NoSlotTest.vue';
import SlotTest from './components/SlotTest.vue';
export default {
  name: 'App',
  // App.vue를 다음과 같이 정의하고, 결과를 확인하세요
  // components: { NoSlotTest, CheckBox1 },
  components: { NoSlotTest, SlotTest },
};
</script>
