
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' },
      { rel: 'stylesheet', href: '@/assets/plugins/fontawesome-free/css/all.min.css' },
      { rel: 'stylesheet', href: '@/assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css' },
      { rel: 'stylesheet', href: '@/assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css' },
      { rel: 'stylesheet', href: '@/assets/plugins/jqvmap/jqvmap.min.css' },
      { rel: 'stylesheet', href: '@/assets/dist/css/adminlte.min.css' },
      { rel: 'stylesheet', href: '@/assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css' },
      { rel: 'stylesheet', href: '@/assets/plugins/daterangepicker/daterangepicker.css' },
      { rel: 'stylesheet', href: '@/assets/plugins/summernote/summernote-bs4.min.css' }
    ],
    script:[
        // {type: "text/javascript",src:"~/assets/plugins/jquery/jquery.min.js"},
        // {type: "text/javascript",src:"~/assets/plugins/jquery-ui/jquery-ui.min.js"},
        // {type: "text/javascript",src:"~/assets/plugins/jquery-ui/jquery-ui.min.js"},
        // {type: "text/javascript",src:"~/assets/plugins/bootstrap/js/bootstrap.bundle.min.js"},
        // {type: "text/javascript",src:"~/assets/plugins/chart.js/Chart.min.js"},
        // {type: "text/javascript",src:"~/assets/plugins/sparklines/sparkline.js"},
        // {type: "text/javascript",src:"~/assets/plugins/jqvmap/jquery.vmap.min.js"},
        // {type: "text/javascript",src:"~/assets/plugins/jqvmap/maps/jquery.vmap.usa.js"},
        // {type: "text/javascript",src:"~/assets/plugins/jquery-knob/jquery.knob.min.js"},
        // {type: "text/javascript",src:"~/assets/plugins/moment/moment.min.js"},
        // {type: "text/javascript",src:"~/assets/plugins/daterangepicker/daterangepicker.js"},
        // {type: "text/javascript",src:"~/assets/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"},
        // {type: "text/javascript",src:"~/assets/plugins/summernote/summernote-bs4.min.js"},
        // {type: "text/javascript",src:"~/assets/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"},
        // {type: "text/javascript",src:"~/assets/dist/js/adminlte.js"},
        // {type: "text/javascript",src:"~/assets/dist/js/demo.js"},
        // {type: "text/javascript",src:"~/assets/dist/js/pages/dashboard.js"}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
     '@/assets/AdminLTE-3.1.0/plugins/fontawesome-free/css/all.min.css',
    '@/assets/AdminLTE-3.1.0/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css',
    '@/assets/AdminLTE-3.1.0/plugins/icheck-bootstrap/icheck-bootstrap.min.css',
    '@/assets/AdminLTE-3.1.0/plugins/jqvmap/jqvmap.min.css',
    // '@/assets/AdminLTE-3.1.0/dist/css/adminlte.min.css',
    '@/assets/AdminLTE-3.1.0/plugins/overlayScrollbars/css/OverlayScrollbars.min.css',
    '@/assets/AdminLTE-3.1.0/plugins/daterangepicker/daterangepicker.css',
    '@/assets/AdminLTE-3.1.0/plugins/summernote/summernote-bs4.min.css'
  ],

  js: [
    '~/assets/plugins/jquery/jquery.min.js',
    '~/assets/plugins/jquery-ui/jquery-ui.min.js',
    '~/assets/plugins/jquery-ui/jquery-ui.min.js',
    '~/assets/plugins/bootstrap/js/bootstrap.bundle.min.js',
    "~/assets/plugins/chart.js/Chart.min.js",
    '~/assets/plugins/sparklines/sparkline.js',
    '~/assets/plugins/jqvmap/jquery.vmap.min.js',
    '~/assets/plugins/jqvmap/maps/jquery.vmap.usa.js',
    '~/assets/plugins/jquery-knob/jquery.knob.min.js',
    '~/assets/plugins/moment/moment.min.js',
    '~/assets/plugins/daterangepicker/daterangepicker.js',
    '~/assets/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js',
    '~/assets/plugins/summernote/summernote-bs4.min.js',
    '~/assets/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js',
    '~/assets/dist/js/adminlte.js',
    '~/assets/dist/js/demo.js',
    '~/assets/dist/js/pages/dashboard.js'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
