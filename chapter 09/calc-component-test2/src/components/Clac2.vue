<!-- options API 적용 -->
<template>
  <div>
    <h3>Optoions API</h3>
    <!-- :는 v-bind 축약형으로써 단방향 통신이다. 모델에서 뷰쪽으로 단방향이다 
     화면이 바뀌어도 스크립트는 바뀌지 않음  -->
    <input
      type="text"
      placeholder="입력하면 대문자로 변환"
      :value="name"
      @input="changeName($event.target.value)"
    />
  </div>

  <div>
    X : <input type="text" /><br />
    Y : <input type="text" /><br />

    <button @click="calculateSum(x, y)">계산하기</button>
    <p>X + Y = {{ sum1 }}</p>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  name: 'Clac2',

  setup() {
    const name = ref('');
    const changeName = (inputName) => {
      name.value = inputName.toUpperCase();
    };

    const x = ref(5);
    const y = ref(7);
    const sum1 = ref(!2);

    const calculateSum = (num1, num2) => {
      sum1.value = num1 + num2;
    };

    return {
      name,
      changeName,
    };
  },
};
</script>
