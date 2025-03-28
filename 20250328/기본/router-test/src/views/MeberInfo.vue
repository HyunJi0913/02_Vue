<template>
  <div className="mt-5">
    <img :src="member.photo" class="image" />
    <h4 class="mt-2">{{ member.name }}({{ member.role }})</h4>
    <p>{{ member.desc }}</p>
    <a
      v-if="member.insta && member.insta !== ''"
      class="fa fa-instagram m-1"
      :href="member.insta"
    ></a>
    <a
      v-if="member.facebook && member.facebook !== ''"
      class="fa fa-facebook m-1"
      :href="member.facebook"
    ></a>
    <a
      v-if="member.youtube && member.youtube !== ''"
      class="fa fa-youtube m-1"
      :href="member.youtube"
    ></a>
    <br />
    <router-link to="/members">멤버 목록으로</router-link>
  </div>
</template>
<script>
import { useRoute } from 'vue-router';
import members from 'C:/KB_Fullstack/02_NodeVue/02_Vue/20250328/기본/router-test/src/members.json';

export default {
  name: 'MemberInfo',
  setup() {
    const currentRoute = useRoute();
    const id = parseInt(currentRoute.params.id, 10);
    const member = members.find((m) => m.id === id);
    return { member };
  },
};
</script>
