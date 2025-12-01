self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('budget-store v2').then((cache) => cache.addAll([
            'index.html','icon-192.png',
            // אם יש לך אייקונים, תוסיף אותם כאן לרשימה
        ])),
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );

});
