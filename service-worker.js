// service-worker.js
const _self = this;

console.log('In service worker.');

_self.addEventListener('install', function () {
    console.log('Install success');
});

_self.addEventListener('activate', function () {
    console.log('Activated');
});

_self.addEventListener('message', function(event) {
    console.log(event.data);
});

// service worker给主页面发送消息
_self.clients.matchAll().then(function(clients) {
    clients.forEach(function(client) {
        client.postMessage('Service worker attached.');
    })
});

const HOST_NAME = location.host;
const VERSION_NAME = 'CACHE-v1';
const CACHE_NAME = HOST_NAME + '-' + VERSION_NAME;
const CACHE_HOST = [HOST_NAME, 'cdn.bootcss.com'];

// const handleFetchRequest = function(request) {
//     return caches.match(request)
//         .then(function(response) {
//             return response || fetch(request)
//                 .then(function(response) {
//                     const clonedResponse = response.clone();

//                     caches.open(CACHE_NAME)
//                         .then(function(cache) {
//                             cache.put(request, clonedResponse);
//                         });

//                     return response;
//                 });
//         });
// };

const isNeedCache = function(url) {
    return CACHE_HOST.some(function(host) {
        return url.search(host) !== -1;
    });
};

const isCORSRequest = function(url, host) {
    return url.search(host) === -1;
};

const isValidResponse = function(response) {
    return response && response.status >= 200 && response.status < 400;
};

const handleFetchRequest = function(req) {
    if (isNeedCache(req.url)) {
        const request = isCORSRequest(req.url, HOST_NAME) ? new Request(req.url, {mode: 'cors'}) : req;
        return caches.match(request)
            .then(function(response) {
                // Cache hit - return response directly
                if (response) {
                    // Update Cache for next time enter
                    fetch(request)
                        .then(function(response) {

                            // Check a valid response
                            if(isValidResponse(response)) {
                                caches
                                    .open(CACHE_NAME)
                                    .then(function (cache) {
                                        cache.put(request, response);
                                    });
                            } else {
                                sentMessage('Update cache ' + request.url + ' fail: ' + response.message);
                            }
                        })
                        .catch(function(err) {
                            sentMessage('Update cache ' + request.url + ' fail: ' + err.message);
                        });
                    return response;
                }

                // Return fetch response
                return fetch(request)
                    .then(function(response) {
                        // Check if we received an unvalid response
                        if(!isValidResponse(response)) {
                            return response;
                        }

                        const clonedResponse = response.clone();

                        caches
                            .open(CACHE_NAME)
                            .then(function(cache) {
                                cache.put(request, clonedResponse);
                            });

                        return response;
                    });
            });
    } else {
        return fetch(req);
    }
};

const onActive = function(event) {
    event.waitUntil(
        caches
            .keys()
            .then(function(cacheNames) {
                return Promise.all(
                    cacheNames.map(function(cacheName) {
                        // Remove expired cache response
                        if (CACHE_NAME.indexOf(cacheName) === -1) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
    );
};

_self.addEventListener('activate', onActive);

const onFetch = function(event) {
    event.respondWith(handleFetchRequest(event.request));
};

_self.addEventListener('fetch', onFetch);
