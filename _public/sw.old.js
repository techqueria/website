const VERSION = "2.0.8";

const cacheName = 'techqueria-org';
console.log(`installing sw.js`);

const filesToCache = [
    '/images/logo.png',
    '/images/logo-mid.png',
    '/sass/main.css',
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
    '/',
    '/about/',
    '/code-of-conduct/',
    '/contact/',
    '/events/',
    '/index.html',
    '/merch/',
    '/press/',
    '/welcome-to-slack/',
 ];

this.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
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

this.addEventListener('fetch', function (event) {
    var response;
    event.respondWith(caches.match(event.request).then(function (match) {
        console.log('responding with ', match, 'or', event.request);
        return match || fetch(event.request);
    }).catch(function () {
        console.log('responding with event:  ', event.request);
        return fetch(event.request);
    }).then(function (r) {
        response = r;
        caches.open(cacheName).then(function (cache) {
            cache.put(event.request, response);
        });
        return response.clone();
    }));
});
