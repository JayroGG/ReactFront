const CACHE_NAME = 'version-1'
const urlToCache = ['index.html', 'offline.html']

// Install
this.addEventListener('install', evt => {
  evt.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => {
        console.log('Opened Cache')
        return cache.addAll(urlToCache)
      })
  )
})

// Fetch handler
this.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(res => {
      return fetch(evt.request).catch(() => caches.match('offline.html'))
    })
  )
})

// Activate 
this.addEventListener('activate', evt => {
  const cacheWhiteList = []
  cacheWhiteList.push(CACHE_NAME)
  evt.waitUntil(caches.keys().then(cacheNames => {
    Promise.all(
      cacheNames.map(cacheName => {
        if (!cacheWhiteList.includes(cacheName)) {
          return caches.delete(cacheName)
        }
      })
    )
  }))
})