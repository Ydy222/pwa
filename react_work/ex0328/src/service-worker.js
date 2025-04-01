const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/offline.html',
];

// ⭐ 설치 이벤트 - 캐시 저장
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching app shell...');
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting(); // 바로 활성화
});

self.__WB_MANIFEST;

// 🔁 활성화 이벤트 - 이전 캐시 정리
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            console.log('[Service Worker] Removing old cache:', name);
            return caches.delete(name);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// 🌐 fetch 이벤트 - 네트워크 → 실패 시 캐시
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request).then((res) => {
        return res || caches.match('/offline.html');
      });
    })
  );
});

// 🔔 push 이벤트 - 푸시 알림 처리
self.addEventListener('push', (event) => {
  const data = event.data?.json() || {};
  const title = data.title || '알림';
  const options = {
    body: data.body || '새 소식이 도착했어요!',
    icon: '/icons/icon-192x192.png',
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
