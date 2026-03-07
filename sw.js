const CACHE_NAME = "redoor-cache-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/icon.png",
  "https://cdn.jsdelivr.net/npm/fullcalendar@6.1.15/index.global.min.css",
  "https://cdn.jsdelivr.net/npm/fullcalendar@6.1.15/index.global.min.js"
];

// 설치
self.addEventListener("install", event => {

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );

});

// 요청 처리
self.addEventListener("fetch", event => {

  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );

});
