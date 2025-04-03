<!-- 기본 레이아웃을 나타내는 컴포넌트 -->

<template>
  <div>
    <h1>/get/:id(단건 조회)</h1>
    <hr />
    <h3>조회할 Todo의 id 입력</h3>
    <div>
      <input type="text" placeholder="id 입력" v-model="id" />
      <!-- 클릭 감지 시  getTodo 함수 호출 -->
      <button @click="getTodo">조회</button>
    </div>

    <div>
      <h3>조회 결과</h3>
      <ul>
        <li>id : {{ state.todo.id }}</li>
        <li>todo : {{ state.todo.todo }}</li>
        <li>desc : {{ state.todo.desc }}</li>
        <li>done : {{ state.todo.done }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const currentRoute = useRoute();
//입력된 아이디

const id = ref(currentRoute.params.id);
const state = reactive({ todo: {} });

//조회 버튼 클릭 동작
const getTodo = async () => {
  // /api = http://localhost:3001
  //ref() == rorcp -> 데이터 접근 시 .value 이용
  const response = await axios.get(`/api/todos/${id.value}`);

  state.todo = response.data;
  //reactive를 활용하여 화면 다시 렌더링
};

//화면에 컴포넌트가 렌더링 될 때 getTodo함수 호출 띠
onMounted(() => {
  getTodo();
});
</script>
