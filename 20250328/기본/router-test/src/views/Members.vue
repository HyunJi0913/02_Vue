<template>
  <div>
    <h2 class="m-4">이날치 멤버</h2>
    <div class="vontainer">
      <div class="row">
        <div
          v-for="m in members"
          :key="m.id"
          class="col-6 col-xs col-sm-4 col-md-3 col-lg-2"
        >
          <router-link :to="{ name: 'members/id', params: { id: m.id } }">
            <img
              class="img-thumbnall"
              style="width: 90px; height: 110px"
              :src="m.photo"
              :title="m.name"
            /><br />
            <h6 class="disaplay-6">{{ m.name }}</h6>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import members from 'C:/KB_Fullstack/02_NodeVue/02_Vue/20250328/기본/router-test/src/members.json';

export default {
  name: 'Members',
  setup() {
    return { members };
  },
};
</script>
