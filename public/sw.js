/* eslint-disable no-unused-vars */
// Initialize Service Worker
self.addEventListener('install', (e) => { console.log('[Service Worker] Install');});
self.addEventListener('fetch', (e) => { e.respondWith(fetch(e.request)); });

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    })
}