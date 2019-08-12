const bodyParser = require('body-parser')

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: 'yellow',
    failedColor: 'yellow',
    height: '20px',
    duration: 50000
  },
  loadingIndicator: {
    name: 'circle',
    color: '#fa923f'
  },
  /*
   ** Global CSS
   */
  css: [
    '~assets/styles/main.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/date-filter.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: "*",
        component: resolve(__dirname, 'pages/index.vue')
      })
    },
    middleware: 'log'
  },
  // generate: {
  //   dir: './public'
  // },
  // transition: {
  //   name: 'fade',
  //   mode: 'out-in',
  // }
  env: {
    baseUrl: process.env.BASE_URL || 'https://heavysol-dc615.firebaseio.com',
    fbAPIKey: 'AIzaSyByCBZBDWWFK8ZiBP9anT8HjIrDnIQSnB8'
  },
  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ]
}
