const CACHE_NAME = 'v1';
const OFFLINE_URL = '/offline.html';
const CACHE_ASSETS = [
    '/',
    '/index.html',
    '/favicon.ico',
    '/logo192.png',
    '/logo512.png',
    '/manifest.json',
    '/index.css',
    '/App.css',
    // Add other assets as needed
];

// Install event
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(CACHE_ASSETS);
        })
    );
});

// Fetch event
self.addEventListener('fetch', (event) => {
    // network first strategy for api requests
    if (event.request.url.includes('/api/')) {
        event.respondWith(
            fetch(event.request)
                .then((res) => {
                    const clone = res.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                    return res;
                })
                .catch(() => caches.match(event.request))
        )
    }
    // cache first strategy for static data
    else {
        event.respondWith(
            caches.match(event.request)
                .then(cache => {
                    return cache || fetch(event.request).catch(() => caches.match(OFFLINE_URL));
                })
        );
    }
});

// Activate event
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
