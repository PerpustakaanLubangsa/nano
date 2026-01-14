const CACHE_NAME = 'perpus-v1';
const assets = [
  'index.html',
  'manifest.json',
  'logo.ico'
];

// Tahap Install: Menyimpan file ke cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Tahap Fetch: Mengambil data dari cache saat offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
