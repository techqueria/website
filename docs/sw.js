const VERSION = "1.0.11";

const cacheName = 'techqueria';

console.log(`installing sw.js`);

const filesToCache = [
    '/images/logo.png',
    '/css/main.css',
    '/',
    '/index.html',
    '/images/icons/icon-logo-techqueria-128x128.png',
    '/images/icons/icon-logo-techqueria-144x144.png',
    '/images/icons/icon-logo-techqueria-152x152.png',
    '/images/icons/icon-logo-techqueria-192x192.png',
    '/images/icons/icon-logo-techqueria-256x256.png',
    '/images/t-shirt-1-small.png',
    '/images/t-shirt-2-small.png',
    '/images/t-shirt-3-small.png',
    '/images/t-shirt-1.png',
    '/images/t-shirt-2.png',
    '/images/t-shirt-3.png',    
    '/about/',
    '/contact/',
    '/events/',
    '/code-of-conduct/',
    '/merch/'
 ];

this.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});
 
this.addEventListener('activate',function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

this.addEventListener('fetch', function(event) {
  var response;
  event.respondWith(caches.match(event.request).then(function (match) {
    return match || fetch(event.request);
  }).catch(function() {
    return fetch(event.request);
  }).then(function(r) {
    response = r;
    caches.open(cacheName).then(function(cache) {
      cache.put(event.request, response);
    });
    return response.clone();
  }));
});
