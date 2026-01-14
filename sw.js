const CACHE_NAME = 'perpus-v1';
const assets = [
  './',
  './index.html',
  './opac.html',
  './manifest.json',
  './logo.ico',
  './logo.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(assets)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});
