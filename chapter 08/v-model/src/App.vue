<template>
  <h1>Teleport Text</h1>

  <button @click="changeModal">isModal 상태 변경</button>

  <!-- id="modal" 요소에 모달 컴포넌트 렌더링 -->
  <teleport to="#modal">
    <Modal v-if="isModal" />
  </teleport>
</template>

<script>
import Modal from './components/Modal.vue';
export default {
  name: 'App',
  components: { Modal },
  data() {
    return { isModal: false };
  },
  methods: {
    changeModal() {
      this.isModal = true;
      setTimeout(() => {
        this.isModal = false;
      }, 2000);
    },
  },
};
</script>
