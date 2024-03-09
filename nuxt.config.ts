// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Disable Server-Side Rendering
  target: 'static', // Ideal for static hosting,
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  buildModules: [
    '@nuxtjs/pwa',
  ],
  pwa: {
    manifest: {
      name: 'TradeShow LeadGen',
      short_name: 'TradeShowGen',
      description: 'Easily capture leads at trade shows and events',
      theme_color: '#ffffff',
      lang: 'en',
    },
  }
})
