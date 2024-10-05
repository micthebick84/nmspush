export const state = () => ({
  isLoggedIn: false as boolean, // 타입 명시
});

export type RootState = ReturnType<typeof state>;
