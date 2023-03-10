// Establishing a cache name
const CACHE_NAME = 'version-1'
const urlToCache = ['index.html', 'offline.html']

// Install
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => {
        console.log('Opened Cache')

        return cache.addAll(urlToCache)
      })
  )
})

// Handling the fetch events to state-while-revalidate
self.addEventListener('fetch', evt => {
  if (evt.request.url.startsWith('chrome-extension://')) {
    return;
  }
  evt.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      console.log('intercepting fetch petition')
      return cache.match(evt.request).then(cachedResponse => {
        const fetchedResponse = fetch(evt.request).then(networkResponse => {
          cache.put(evt.request, networkResponse.clone())
        
          return networkResponse
        }).catch(err => {
          console.error(err)
          return caches.match('offline.html')
        })

        return cachedResponse || fetchedResponse
      })
    })
  )
})

// Activate 
self.addEventListener('activate', evt => {
  const cacheWhiteList = []
  cacheWhiteList.push(CACHE_NAME)
  evt.waitUntil(caches.keys().then(cacheNames => {
    return Promise.all(
      cacheNames.map(cacheName => {

        // Delete the cached files if you're not on the whitelist
        return !cacheWhiteList.includes(cacheName) ? caches.delete(cacheName) : console.log('You are OK')
      })
    )
  }))
})