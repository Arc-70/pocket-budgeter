// Keeps Pocket Budget working offline. Bump VERSION when you change any file.
const VERSION = 'pocket-budget-v10';
// The slip reader in vendor/ is big and rarely changes, so it has its own cache that survives app updates. Bump when vendor/ changes.
const VENDOR = 'pocket-budget-vendor-1';
// Slips shared to the app from the gallery wait here until the page picks them up
const SHARED = 'pocket-budget-shared';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon.svg', './icon-180.png', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => ![VERSION, VENDOR, SHARED].includes(k)).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  // Images shared from the gallery (Android): keep them, then open the app to import them
  if (e.request.method === 'POST' && url.pathname.endsWith('/share-target')) {
    e.respondWith((async () => {
      const files = (await e.request.formData()).getAll('slips').filter((f) => f && f.size);
      const cache = await caches.open(SHARED);
      for (const k of await cache.keys()) await cache.delete(k);
      await Promise.all(files.map((f, i) => cache.put(`shared/${i}`, new Response(f, { headers: { 'Content-Type': f.type || 'image/jpeg' } }))));
      return Response.redirect(`./?shared=${files.length}`, 303);
    })());
    return;
  }
  if (e.request.method !== 'GET') return;
  // The slip reader: from its own cache once downloaded
  if (url.pathname.includes('/vendor/')) {
    e.respondWith(caches.open(VENDOR).then(async (cache) => (await cache.match(e.request)) || fetch(e.request).then((res) => { if (res.ok) cache.put(e.request, res.clone()); return res; })));
    return;
  }
  // The page itself comes from the network when it can (falling back to the cache when offline or after 3 seconds),
  // so a new version shows on the next open. Icons and the manifest are served from the cache and refreshed in the background.
  e.respondWith(caches.open(VERSION).then(async (cache) => {
    const cached = await cache.match(e.request, { ignoreSearch: true });
    const fresh = fetch(e.request).then((res) => { if (res.ok) cache.put(e.request, res.clone()); return res; }).catch(() => cached || Response.error());
    if (e.request.mode !== 'navigate') return cached || fresh;
    return cached ? Promise.race([fresh, new Promise((r) => setTimeout(() => r(cached), 3000))]) : fresh;
  }));
});
