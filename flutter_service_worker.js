'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "482dbe4e2fe5350fd9eeeefe4b31e51b",
".git/config": "a644dfa9ace7ec5a985feaac8105804d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ad676e7bafce224f79bc20402a0bdbd8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1f38ec08548875743060fe378c88775e",
".git/logs/refs/heads/master": "1950b2656f4011ad5486c52424c8f08b",
".git/logs/refs/remotes/origin/master": "22364b64a4e7fca3586c85608d389374",
".git/objects/00/b1fd6f73bd7a73756bd4cd16e469a267b6b01d": "639f7bd7729711ce0ed6411b61538d25",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/11/758dd9a439b5dd483aa6e97b646777c2135acd": "8ccafb103396b452a8e263cd92d0d632",
".git/objects/14/4e28f60dec128442ac8f16a9000f5b5fa3b1c7": "4e20fb0b27afb089db091d02b72ed7bc",
".git/objects/18/7c799e2a801c0e0544d70a12262a9a42486dff": "875672c1b69f32b51544a8ec8f7a514e",
".git/objects/1a/0bb622b3a56dd4cc8b24bd7a1794b03de0a720": "160d17f5f35920ef0c269c081509e809",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2a/496bcdd55b13203dad862befd281195812702c": "fc092f2925d0b91d10ce69ebabcb2fe1",
".git/objects/2c/76eb3fbef8822d2091a3835d3e32a91fae0d4c": "d0520f67adfcfd999570303e89106f17",
".git/objects/2d/b1e438706e58cf44c1376aea6cd0f60c23a92a": "597abac8b17d5034a031aa1dd1a9c58d",
".git/objects/31/e40791d3806090cb6a42ecef54ba2919eebbe4": "ff5fea30d2c17863b13310b3a8b6a035",
".git/objects/36/31539af5308302bb6e79acafee4a1e4f3ef3cc": "b60e1c4288a764184545b652fcaf9d29",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/39/f79a1e16997dfe8c29c42da5864a9ee1cf8e38": "54c2b3452267a4026e4c30f95a07d9ab",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/3f/edb7e3721d3f2ad6025d826bd39f8c028b96b9": "a649e3bc4cea7efacd5b52ec6651c7be",
".git/objects/41/0ff3ddd8de77e01d730be12617546adfe76f0a": "189681a323222970a48faa4957760827",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/11b9f4cc4e51af58f0f37924b363fa2eb892be": "683c9241d3373331f184f6db88b60834",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4a/3e5d88c3da25a647173f0fd4531f6f1d5579b5": "405980c007e0be00d9d233eac583f27b",
".git/objects/4b/16d27c232a2a4921cf3dd847f90191f29f7950": "5fd52b0b94e7760776c06a9ac7c0e190",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/55/cc4c28e4883acfa7f2a257c4a4a6d5e0a09db7": "6ac50a7feebbde7a1b910b87f8f8bdff",
".git/objects/5a/866e7f75e4a0816725c458c3b8ee9eaeb1b475": "3d362ee75b3b26186f15e189da497e9a",
".git/objects/5d/3aa3a4a2313a62057e40e186801ba2e0b5af6d": "fc1e26673886323ebf9e1ff8325e1b6a",
".git/objects/5d/6600cd6d554289b0782b9593ba2cae0f030e18": "f924aa4556553aa8fb799b687cd6a79c",
".git/objects/5f/533a4b0fdad9aed548490372ce574676fc16ad": "4bc85bd7dd757b5838e69f83f6703795",
".git/objects/6b/7e57c9e69c94552f96c0f1dba46c68b158f899": "8a2e5cde28409e7aa4820f45e5af8bde",
".git/objects/6c/8c677ea0a781f1589841549a3dc6a017220203": "0c2d34589c89aab9a766685386b9d93e",
".git/objects/7e/1fc780b7fd2793beae49628624acc4c19fbe8b": "3a28ae1dbf47f43c56c928c232cdf396",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9b/de258209e3661a4c372b3c6f124af1b5aaa77e": "5b4fba4edacad45d82224ce249319e94",
".git/objects/9b/fd8edae42c87f528494a653bd89b45b8b55a03": "91dc4483c47194a37143cd35381f04f3",
".git/objects/a5/c19d1307b7a061dbb6b29dbe04e54badf0790f": "183da54cc604fbe6dad0715c7fc99150",
".git/objects/ae/0220d03d6f5ff81c5e5e4f695a1fd0b0ea6842": "f29e8a725ed7447a66c7a469a8d52515",
".git/objects/b3/7ccbd088e7fbaea88812b81df5b56a7973b7ef": "c3063c1a47421f0653e1271a81224403",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/8b0d94fc3fd93a59a1c24aedc99ab346ede5e9": "21d190338496bf8fc3afb3cdbcf500d9",
".git/objects/c3/5c564f216847411c88ff11d0a9d52e3de61711": "5dd9e1080c60ad5cb00210b077e7913e",
".git/objects/c6/ecfac803e8cd30ed677f5134617201ccd3b854": "37ee1a58c3778aa1767ff54dd0c1be48",
".git/objects/c9/b88a38bb7180eb762d7460eeda471fe28eff5d": "2d9f57aa499d5cae63760369acda4cb2",
".git/objects/cb/68feb500293534df73b5f85bafb96f5d3115c8": "eac60102d15fd7e6bc264a88eb181760",
".git/objects/cd/21f9bf18000c5b437c9bc0c94e81753fa3d493": "907629bb412f4e3d2e17d61303945017",
".git/objects/cd/c440ff7c33b065ca58b56c77a9ec9f60dd07e8": "d16f9a0cc3b39c793c479eecb5701b5d",
".git/objects/d2/052dc12fd0258bed388e49fbddf4eb708ff5c1": "2dc582473a707872684334082fd02b81",
".git/objects/d3/4ac5bb8bcaa9386e7af41e937185be86a164c2": "a283540978cbd1501c687f0aa401407b",
".git/objects/d4/c4699d3403ee390c674043ace2f3c3fb588da3": "34d0852f1953bb217a75f270b843deff",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/7d6ad808b737803d450c5572c17b26455b6ed4": "5882af5c22e264480bb12a2cfa7d667c",
".git/objects/e1/b01fade53631aaabf917d209d8abed4d19776e": "e43d8a17465d9eb98c362a048f2a9a02",
".git/objects/e1/ce175dde87d25574276bb57405e20e25dcce34": "7d8f4685086c5fe8ffde56f978285223",
".git/objects/e3/3e1dd776ae54983a42d540cef646aad6dc5782": "3f2eb9e960d32e6c3049d1d90c42dfbb",
".git/objects/e7/3ac4c83ec55e4d1e20302f1ff443f5fe06a367": "eeaaa8d773f7bd40dfd3ee06e846d53b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/73617edc5860e7cca45c84e193275d07537918": "af163e4d7fa4228b63c06c1227abc80d",
".git/objects/fa/e27d2ec387419245d6154e4c5fed54bdc2d933": "bde7f66b1f1a484cffb67232fbf30491",
".git/objects/ff/166bfe078ed6a297ea5f9445d7e85d5f22ae49": "86ffae68ad17607a6e90d2d9287d2715",
".git/objects/ff/e1b46572d9b8546673cc88b1e98a6fa2037b03": "43af303cd799d726bc60c81ced6190f5",
".git/refs/heads/master": "11638b861b9cbfb4950d398c5a49e457",
".git/refs/remotes/origin/master": "11638b861b9cbfb4950d398c5a49e457",
"assets/AssetManifest.bin": "d7c87422afc7f1813d2041cbda281cf7",
"assets/AssetManifest.bin.json": "6100ac7170ad17bb29d04db6e6667aeb",
"assets/AssetManifest.json": "d16e805ea64d05a366b472219a326766",
"assets/assets/images/add_image.png": "fb41c34ada3033717efc8d05d18d95cf",
"assets/assets/images/border.png": "0eb3ee57397484f6af58fdb4571e6d5d",
"assets/assets/images/came_gone.png": "8a3f9bf739a7001d393c601666a5745a",
"assets/assets/images/chart.png": "9f7bd9ac1bafd8dc1ad9d408bfd66c83",
"assets/assets/images/face.png": "90076f88c9e5e2d60a51dc176e4a8835",
"assets/assets/images/general_attendance.png": "1cdb0f7efce070b10210a41b4f5d85ff",
"assets/assets/images/hilol_dasturlari.png": "7b696f10ccda3b3054f1ac4f518e423f",
"assets/assets/images/login.png": "fed3720801a8e0870254482e862441a1",
"assets/assets/images/login_ads.png": "131d4cc3c343eeb3f1997815b76c1c41",
"assets/assets/images/monthly_chart1.png": "986930dca2f0b643f39b0b779b84cfe3",
"assets/assets/images/on_time.png": "077c0321c0730cb76224de253fd9a5f0",
"assets/assets/images/team.png": "5d510286fe6163ba8de4186d5a964ef2",
"assets/assets/images/team1.png": "2e5316dc9a0343d0f329fcccb9c4abce",
"assets/assets/images/team2.png": "e0ee9d9fc9d8502954636bb1b823190a",
"assets/assets/images/team3.png": "36c5e7822aad2d497790c43894fc1ea4",
"assets/assets/images/user.png": "ed4b139126437eba11d2bfc5eec2a02d",
"assets/assets/images/user_pic.png": "cf35151957dd6d575a4ffc6be4936091",
"assets/assets/images/weekly_chart.png": "6730fa65fc8e0c2514585be803312004",
"assets/assets/images/weekly_chart1.png": "2ca5ac1ea20c8a78a74fe238c22138ca",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d5f26571e3f9851878732ae2b4b31f9f",
"assets/NOTICES": "1939ab01535edb9bb48fa97394bdfa26",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "22f4690b66d9cc640c2ef35f054ab5e5",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fb221bd0c1bfb236b9478b65acbecc4b",
"/": "fb221bd0c1bfb236b9478b65acbecc4b",
"main.dart.js": "fedf30ee6b3788195752716082245c02",
"manifest.json": "820bc1fc7fe881da0ea1c8a9d90ccdd2",
"version.json": "519311a857eb18014dd1c42edf981926"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
