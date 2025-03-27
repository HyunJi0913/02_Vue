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
export default {
  // 컴포넌트의 이름 정하는 옵션 name
  name: 'Calc1',
  data() {
    return {
      //이름 관련 기능
      name: '',

      //계산 관련 기능
      x: 10,
      y: 20,
      sum1: 30,
    };
  },
  methods: {
    // name 관련 메서드
    changName(inputName) {
      this.name = inputName.toUppercase();
    },
    // 계산 관련 메서드
    calculateSum(num1, num2) {
      this.sum1 = num1 + num2;
    },
  },
};
</script>
