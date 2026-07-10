export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  devtools: { enabled: true },

  compatibilityDate: '2025-06-30',

  runtimeConfig: {
    public: {
      web3formsKey: 'e5d9ca62-cfb2-4eed-b7c8-ddfd488f3e7d'
    }
  },

  css: [
    '@fortawesome/fontawesome-free/css/all.min.css'
  ]
})