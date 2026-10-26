// Keeps Pocket Budget working offline. Bump VERSION when you change any file.
const VERSION = 'pocket-budget-v7';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon.svg', './icon-180.png', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
// The page itself comes from the network when it can (falling back to the cache when offline or after 3 seconds),
// so a new version shows on the next open. Icons and the manifest are served from the cache and refreshed in the background.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.open(VERSION).then(async (cache) => {
    const cached = await cache.match(e.request, { ignoreSearch: true });
    const fresh = fetch(e.request).then((res) => { if (res.ok) cache.put(e.request, res.clone()); return res; }).catch(() => cached || Response.error());
    if (e.request.mode !== 'navigate') return cached || fresh;
    return cached ? Promise.race([fresh, new Promise((r) => setTimeout(() => r(cached), 3000))]) : fresh;
  }));
});
