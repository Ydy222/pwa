import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();

registerRoute(
    ({ request }) => request.mode === 'navigate',
    new NetworkFirst()
);

self.addEventListener('push', (event) => {
    console.log('event',event);
    const data = event.data?.json() || {
        title: '기본 제목',
        body: '기본 내용',
        url: '/'
    }

    const options = {
        body: data.body,
        icon: '/icons/icon-48x48.png',
        data: {
            url: data.url // 나중에 클릭 시 이동할 경로
        }
    }
    // notification 보여줘라..
    event.waitUntil(
        self.registration.showNotification(data.title, options)
    )
});