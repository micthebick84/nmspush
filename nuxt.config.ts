// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  router: {
    // middleware: 'auth',
  },
  typescript: {
    typeCheck: true,
  },
  modules: ['nuxt-quasar-ui', '@pinia/nuxt'],
  quasar: {},
});
