<template>
  <div class="row mb-3">
    <div class="col">
      <div class="input-group">
        <input
          id="msg"
          type="text"
          class="form-control"
          name="msg"
          placeholder="할일을 여기에 입력!"
          v-model.trim="todo"
          @keyup.enter="addTodoHandler"
        />

        <!-- 추가 버튼 클릭 시 작성된 할 일 내용을 todolist에 추가 -->
        <span class="btn btn-primary input-group-addon" @click="addTodoHandler"
          >추가</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputTodo',
  data() {
    return { todo: '' };
  },
  methods: {
    //추가 동작
    addTodoHandler() {
      if (this.todo.length >= 3) {
        //작성된 할일 (this.todo)을 부모 컴포넌트(App.vue)로 전달하기 !
        // -> 이벤트 발신,방출 (emit)을 이용한다. !!

        //$emit(이벤트명, 페이로드) : 이벤트 발신 메서드
        // 페이로드는 전달하고 싶은 값을 의미함 .

        this.$emit('add-todo', this.todo);

        this.todo = ''; //입력된 내용을 삭제하자 ~~
      } else {
        alert('할 일은 3글자 이상으로 작성해주세요. ');
      }
    },
  },
};
</script>
