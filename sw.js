importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

const {registerRoute} = workbox.routing;
const {NetworkFirst, CacheFirst} = workbox.strategies;

// پاشەکەوتکردنی فایلە بنچینەییەکان (HTML, CSS, JS)
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

// پاشەکەوتکردنی وێنە و فۆنتەکان بە شێوەی Cache First
registerRoute(
  ({request}) => request.destination === 'image' || request.destination === 'font',
  new CacheFirst({
    cacheName: 'quran-assets',
  })
);

// پاشەکەوتکردنی دەقی سورەتەکان بە Network First
registerRoute(
  ({request}) => request.destination === 'document',
  new NetworkFirst({
    cacheName: 'quran-content',
  })
);