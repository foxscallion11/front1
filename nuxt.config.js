module.exports = {

        modules: [
    
            '@nuxtjs/axios'
    
          ],
    
          axios: {
    
            proxy: true
    
          },
    
          proxy: {
		    
             '/api': 'http://118.31.74.90:8090' 
          
    
    },

  /*
  'http://localhost:8004'
  ** Headers of the page
  */
  head: {
      title: 'MindSchool - 随时随地在线学习',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'keywords', name: 'keywords', content: 'MindSchool在线学习站,IT在线视频教程,Java视频,HTML5视频,前端视频,Python视频,大数据视频' },
        { hid: 'description', name: 'description', content: 'MindSchool在线学习站是国内新兴的IT在线视频学习平台、职业教育平台。MindSchool会同上百个知名开发团队联合制定的Java、HTML5前端、大数据、Python等视频课程，欢迎使用进行学习' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    { src: '~/plugins/nuxt-swiper-plugin.js', ssr: false }
  ],
  
  css: [
    'swiper/dist/css/swiper.css'
  ]
}
