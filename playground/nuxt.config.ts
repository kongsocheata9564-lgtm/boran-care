export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],

  devtools: {
    enabled: true
  },

  compatibilityDate: '2025-06-30',

  runtimeConfig: {
    public: {
      web3formsKey: 'e5d9ca62-cfb2-4eed-b7c8-ddfd488f3e7d'
    }
  },

  css: [
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'km',

    detectBrowserLanguage: false,

    locales: [
      {
        code: 'km',
        name: 'Khmer',
        file: 'km.json'
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      }
    ],

    langDir: 'locales/'
  }
})