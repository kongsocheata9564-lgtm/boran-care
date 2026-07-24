export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],

  devtools: {
    enabled: true
  },

  compatibilityDate: '2025-06-30',

  app: {
    head: {
      title: 'Boran Care',
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/boran-care-logo.png'
        }
      ]
    }
  },

  runtimeConfig: {
    public: {
      web3formsKey: 'e5f39057-cb42-4d40-817b-2862de4a0f18'
    }
  },

  css: [
    '~/assets/css/main.css',
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