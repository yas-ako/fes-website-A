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
  }

})
