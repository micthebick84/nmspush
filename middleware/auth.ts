import { useAuthStore } from '~/stores/auth';

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  // 로그인되지 않은 경우 로그인 페이지로 리다이렉트
  if (!authStore.isAuthenticated && to.path !== '/login') {
    return navigateTo('/login');
  }
});
