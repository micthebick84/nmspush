<template>
  <div>
    <h1>Login Page</h1>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '~/stores/auth';

const username = ref<string>('');
const password = ref<string>('');

const authStore = useAuthStore();
const router = useRouter();

const login = () => {
  authStore.login(username.value, password.value);

  if (authStore.isAuthenticated) {
    router.push('/'); // 로그인 성공 후 메인 페이지로 이동
  }
};
</script>
