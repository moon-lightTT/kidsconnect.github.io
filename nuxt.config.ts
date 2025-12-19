export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  ssr: false,
  
  app: {
    baseURL: '/kidsconnect.github.io/',
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@600&family=Montserrat:wght@100..900&display=swap'
        }
      ]
    }
  },
  
  nitro: {
    prerender: {
      routes: [
        '/',           
        '/search',    
        '/section/1', 
        '/section/2',
        '/section/3',
        '/section/4',
        '/section/5',
        '/section/6',
        '/section/7',
        '/section/8',
        '/section/9',
        '/section/10',
        '/section/11' 
      ],
      crawlLinks: true
    },
    output: {
      dir: 'dist'
    }
  }

})