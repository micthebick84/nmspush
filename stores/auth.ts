import { defineStore } from 'pinia';

interface AuthState {
  isAuthenticated: boolean;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    isAuthenticated: false,
  }),
  actions: {
    login(username: string, password: string) {
      // 실제 로그인 로직 수행 (예: API 호출)
      if (username === 'admin' && password === 'password') {
        this.isAuthenticated = true;
      }
    },
    logout() {
      this.isAuthenticated = false;
    },
  },
});
