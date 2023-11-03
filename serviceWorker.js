const storymap = "storymap-v1"
const assets = ["/", "/index.html", "/how-to-use.html", '/images/icons/icon-48x48.png', '/images/icons/icon-72x72.png', '/images/icons/icon-96x96.png', '/images/icons/icon-128x128.png', '/images/icons/icon-144x144.png', '/images/icons/icon-152x152.png', '/images/icons/icon-192x192.png', '/images/icons/icon-384x384.png', '/images/logo-grey.png',]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(caches.open(storymap).then(cache => {
    cache.addAll(assets)
  }))
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
