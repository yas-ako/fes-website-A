// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: [
    '@nuxtjs/supabase',
    '@nuxt/content'
  ],
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
  },
  content: {
    // sources: {
    // overwrite default source AKA `content` directory
    // content: {
    // driver: 'fs', prefix: 'for-students/docs',
    // All contents inside this source will be prefixed with `/docs`
    // base: resolve(__dirname, 'content')
    // }
    // }
  },
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        // { src: 'https://awesome-lib.js' }
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        // { rel: 'stylesheet', href: 'https://awesome-lib.css' }
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ],
      noscript: [
        // <noscript>Javascript is required</noscript>
        { children: 'Javascript is required' }
      ]
    }
  },
  css: [
    '/assets/css/reset.css',
    '/assets/css/style.css'
  ],
})
