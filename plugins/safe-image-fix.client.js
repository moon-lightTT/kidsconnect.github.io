
export default defineNuxtPlugin(() => {
  console.log('🛡️ Safe image fix plugin started')
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      const baseURL = '/kidsconnect.github.io/'
      
      const images = document.querySelectorAll('img')
      
      images.forEach(img => {
        img.addEventListener('error', () => {
          const src = img.getAttribute('src')
          
          if (src && src.startsWith('/') && !src.startsWith(baseURL)) {
            console.log(`🔄 Fixing broken image: ${src}`)

            const newSrc = baseURL + src.slice(1)
            img.src = newSrc
            
            img.onerror = null
            img.style.opacity = '0.5'
          }
        })
      })
      
      const links = document.querySelectorAll('link[rel="preload"][as="image"]')
      links.forEach(link => {
        const href = link.getAttribute('href')
        if (href && href.startsWith('/') && !href.startsWith(baseURL)) {
          link.href = baseURL + href.slice(1)
        }
      })
    }, 1000)
  })
})