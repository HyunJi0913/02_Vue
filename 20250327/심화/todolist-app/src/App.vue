<!-- vueinit : vue3 기본 형태 스니펫 -->

<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">🕒 TodoList App (Composition API Version)💻</div>
    </div>

    <div class="card card-default card-borderless">
      <div class="card-body">
        <!-- 입력용 컴포넌트 
          방출(add-todo)된 이벤트가 감지 되었을 때 
          addTodo() 메서드 호출
        -->
        <InputTodo @add-todo="addTodo" />

        <!-- 카운트 컴포넌트 -->
        <TodoCount :todoList="state.todoList" />

        <!-- 목록 컴포넌트 -->
        <TodoList
          v-bind:todoList="sortedList"
          @toggle-completed="toggleCompleted"
          @delete-todo="deleteTodo"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, computed } from 'vue';

// import 태그명 from '경로';
import InputTodo from './components/InputTodo.vue';
import TodoList from './components/TodoList.vue';
import TodoCount from './components/TodoCount.vue';

/* 반응형 데이터 생성 */
const state = reactive({ todoList: [] });

/* 컴포넌트 마운트 시 실행 */
onMounted(() => {
  state.todoList.push({
    id: Date.now(),
    todo: '자전거 타기',
    completed: false,
  });
  state.todoList.push({
    id: Date.now() + 1,
    todo: '딸과 공원 산책',
    completed: true,
  });
  state.todoList.push({
    id: Date.now() + 2,
    todo: '일요일 애견 카페',
    completed: false,
  });
  state.todoList.push({
    id: Date.now() + 3,
    todo: 'Vue 원고 집필',
    completed: false,
  });
});

/* 할 일 추가 메서드 */
// receiveTodo : InputTodo 컴포넌트의
// this.$emit('add-todo', this.todo); 에서 전달된 this.todo(payload)
const addTodo = (receiveTodo) => {
  state.todoList.push({
    id: Date.now(),
    todo: receiveTodo,
    completed: false,
  });
};

/* 할 일 완료 여부 변경 메서드 */
// 매개변수 id : TodoListItem 에서 부터 전달된 id
const toggleCompleted = (id) => {
  let index = state.todoList.findIndex((item) => id === item.id);
  state.todoList[index].completed = !state.todoList[index].completed;
};

/* 할 일 삭제 메서드 */
// 매개변수 id : TodoListItem 에서 부터 전달된 id
const deleteTodo = (id) => {
  let index = state.todoList.findIndex((item) => id === item.id);
  state.todoList.splice(index, 1);
};

// computed() 사용
const sortedList = computed(() => {
  state.todoList.sort((t1, t2) => {
    if (t1.completed > t2.completed) {
      return 1; // 양수 반환 시 자리 바뀜
    }

    if (t1.completed < t2.completed) {
      return -1; // 음수 반환 시 자리 바꿈 X
    }
    const todo1 = t1.todo.toLowerCase();
    const todo2 = t2.todo.toLowerCase();

    if (todo1 > todo2) return 1; // 자리 교체
    else if (todo1 === todo2) return 0; // 유지
    else return -1; // 유지
  });

  // 정렬된 todoList 반환
  return state.todoList;
});
</script>
