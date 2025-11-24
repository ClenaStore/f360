self.addEventListener("install", (e) => {
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  clients.claim();
});

// Modo proxy para funcionar dentro do iframe
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
