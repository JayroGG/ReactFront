// Establishing a cache name
const cacheName = 'version-1'
const urlToCache = ['index.html', 'offline.html']

// Install
this.addEventListener('install', evt => {
  evt.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Opened Cache')
        
        return cache.addAll(urlToCache)
      })
  )
})

// Handling the fetch events to state-while-revalidate
this.addEventListener('fetch', evt => {
  if (evt.request.destination === 'css') {
    evt.respondWith(caches.open(cacheName)).then(cache => {
      return cache.match(evt.request).then(cachedResponse => {
        const fetchedResponse = fetch(evt.request).then(networkResponse => {
          cache.put(evt.request, networkResponse.clone())

          return networkResponse
        })
        
        return cachedResponse || fetchedResponse
      })
    })
  }
})

// Activate 
this.addEventListener('activate', evt => {
  const cacheWhiteList = []
  cacheWhiteList.push(cacheName)
  evt.waitUntil(caches.keys().then(cacheNames => {
    Promise.all(
      cacheNames.map(cacheName => {
        
        // Delete the cached files if you're not on the whitelist
        return !cacheWhiteList.includes(cacheName) ? caches.delete(cacheName) : console.log('You are OK')
      })
    )
  }))
})