self.addEventListener('push', (event) => {
  const data = event.data?.json() || {};

  const title = data.title || '알림';
  const options = {
    body: data.body || '새 소식이 도착했어요!',
    icon: '/icons/icon-192x192.png',
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
