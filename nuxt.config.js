export default {
  mode: "universal",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtjs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      // {rel: 'stylesheet',  type: 'image/x-icon', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' },
      { rel: 'icon', href: '/favicon.ico' },
    ],
    // script: [
    //   { src:'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js', type:'text/javascript'},
    //   { src:'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js', type:'text/javascript'},
    //   { src:'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js', type:'text/javascript'},
    // ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    //import css in our project to here if we have
    '@/assets/styles/main.css'
  ],

  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/scrollto.js', {
    src:'@/plugins/vueselect.js',
    ssr:false
  }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
