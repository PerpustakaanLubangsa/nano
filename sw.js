const CACHE_NAME = 'perpus-v2'; // Berubah ke v2 untuk memaksa update
const assets = [
  './',
  './index.html',
  './opac.html',
  './manifest.json',
  './logo-perpus.png' // Nama file baru Anda
];

// Proses Install: Mengambil aset baru
self.addEventListener('install', (e) => {
  self.skipWaiting(); // Memaksa SW baru langsung aktif
  e.waitUntil(
    caches.open(CACHE_NAME).then((c) => {
      console.log('Caching assets...');
      return c.addAll(assets);
    })
  );
});

// Proses Aktivasi: Menghapus cache lama (v1)
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
});

// Proses Fetch: Mengambil dari cache jika offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => {
      return r || fetch(e.request);
    })
  );
});
