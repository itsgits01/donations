'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f2f43598425351e9f8ad38fef569861d",
".git/config": "6c8893191e60fa68eead3bf813be39f0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "adf75d5520d94b8ef3054492cd19ee14",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0b3fbfab7d2a8b4651b7fa1ae65efe44",
".git/logs/refs/heads/main": "d24eb7396cf5d381f07859065876a226",
".git/logs/refs/remotes/origin/main": "f0be0124e44e621572e181825d3d6db4",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "48d2b5ae68448358d54e3be04bf7430d",
".git/objects/03/e2ee172b5e34699e5e2ddd85c833829a010b9f": "d4fcd43d3aac29db319e126f4449bbe7",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/09/a4a30068109ed8ca68961f02d806936dce75c4": "3b578902a5652cbb83027fd3296f547d",
".git/objects/0d/a2964f24feb06ad4e0145d76ffe164d46ae248": "d581345f70a3a920d28f56307eea13b3",
".git/objects/11/ec5a5d5335bff374c8a5603adf3efee7cf186a": "b2b598df8de80caf21042498b4fd088c",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/18/0dd02fd656757bd8207c844a2ca003783e3a38": "8161dd2c081e09cd6d65d5af99e67c2d",
".git/objects/1b/415e5b57e3f5b66f759ae6310428819bacf785": "7ef69875529d02eaa3250e29a012fbfe",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/dd6391e368532e424f2b966b7de80dfeebc74c": "caa6abb4c6dc183142a4d0d6b94accaa",
".git/objects/27/de2b67028986c4ee21b3848f26cde2e242cdbb": "9ff18a36092779f08ebad558f3b3abc1",
".git/objects/28/8c332606f1b2ee0cf7ce004b8b92e55ec25aab": "c30ca944b821139ffd4b9a1f387d233a",
".git/objects/3a/4a14712c06a87c2df41413a8a9c4f8d6681def": "401285c0ab3b0941542cea686976a2df",
".git/objects/3c/7d19df4acce0e4140a669e020b6ebb7ebd39dc": "35b4b0c122ad180f0702c1258de14151",
".git/objects/42/8b223b793b3f3d6267a3b92911df02e61033b0": "87223030338497062814ff034cf49349",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/52/9bd0e468113380309e1aa97479949b7faf227e": "8dbe1ca34c7b1ddc6067454a9a29ca68",
".git/objects/57/5e3da0e8396001448244fd327163b045eb74d5": "6fe2f80648b75149eaf42d85a110113d",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/5c6c4d418b3c379247c28134f973481292356d": "1f9135f9fd51668bf528632410c02339",
".git/objects/61/fb1868aa801a915996a06f43698509c9d53733": "8cfc57b629658a9a550009d320ba37ad",
".git/objects/63/e2d049e2cc97e11c0733cc6284f36378906ab3": "5373a89b798088564fa06770e90ea565",
".git/objects/6c/e6608fd0cac34fd363dbe0d485879cd6e0872b": "e4f5df65ab7ce2121abf7199b1a67d8d",
".git/objects/6c/f13ee37c863c02bb0a49555865040863345da7": "b57e21a04f3c969d04d4f330751dd8b7",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/44240a26df36e9bf1829dcb215e7320b18c9ee": "a368fe8406e5b1f5cc4dae152e0b4ac8",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/91097a98b99b0901294046c2d80251fda6f4d1": "9069717e9f6966c3fdae5eaa5dd2bf8c",
".git/objects/73/d673e350af2a74ee60e1e9b0587140b498d6a3": "686fb4415954ebd8438def9c5bdb9db0",
".git/objects/74/950cd7c5ef278993e52c1e879f49372b4b5e90": "8e0c31e1645a81f0249842b9675c1d23",
".git/objects/7e/99debf464c5dc458a0ad5bd4c7b24253bb7af3": "5f95cef7ce5f86d72c95b564bc2580a9",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/c862d5f286dddc037225f733d1c9bb9f5510e7": "32758d5f38335b636605fd284541b88a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/9613eb3fe3d8970b9ea46a22cdbd0f3bd7bf24": "60c869032f3caa69d03177da9d71080e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/4767bd37e080cd9c420f4c8eb23c2e9d8b6fa6": "30030879c99a6df70ac5f40d8c48d2a8",
".git/objects/90/d409de2b06de4e2d54e5a36003b48d8d5779fd": "b54e889382241420b8b04a8bb05a9806",
".git/objects/93/1c0eaee20d100ace10fb9160d2008f247c1fc3": "4b6e7fd318ee9e1884fcd1731851dba7",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/9b/333860e1b2083e23ba86b8d2b038087c0bafc3": "c544da9828e7c2e3e2507368b7fa995b",
".git/objects/a0/e5c23425f0e5497950df9cadc006edf4c02324": "12e57804fb9f198af531cd538f840fb5",
".git/objects/a8/59b70975b31632b2c77cd036814860292dfb57": "1c6448b4ba306b793f7973c99c1060d0",
".git/objects/ab/b4d526fd3feea3f3f333d3bb22dff822b7bde3": "3bf267907450159233427a337bc51eb0",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b2/44c717449c1e853e7ba61c5d170e2c142f0b40": "9e7af5efd53ebcd1dbcc4533ab22f58d",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/50acc02fa8a45a37acd22f596f0dc56ca9551e": "039ecd512010e9bf5e77515130100d3d",
".git/objects/b6/e3ca807d4f34590e7f95d2884a33a79d274899": "8c29671bc740794bf4dec8533f0ff4e6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/97a82996644957e5bbfbfae48359287ff2b25a": "908ab43294b99cd64cb217cb2a7ff547",
".git/objects/c3/77de5e8c2b24bd23b83ce574127162e0c2c99b": "b128c118e1747560743117a69cd6fb11",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c8/32b188539ec1cda7f78bb37519d695f354e873": "dddbd414cde4d407ffe460cbd35eeec5",
".git/objects/c8/32bef1943bf13362e508b16f83a009a5bc7c3b": "533ace0c3db7190fd3cb3b790d441792",
".git/objects/cc/fd9b455f2e08b18229adc10c7f0d7e80011f2a": "82e9e1e30c36bd3e188ede01f4172d78",
".git/objects/d0/04c91a575e158d8c5cb01318fdca59d21569c6": "9a0acf7efcce68f438ef7d503fa37058",
".git/objects/d1/8af01a774de5a7c7a4fe8e399535d6c946de7f": "c9a9defc00850f4f36756ec9d1eba8ef",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/d08602041a991a6c1b65df5a5a147282261e1c": "a45241f6910002bbb971fb5fc1e752b9",
".git/objects/d9/cb43c6e8cb61279653f0bb66454b9989481bf8": "b8d7205e33743e5bdd189bfd721aab45",
".git/objects/da/12d00ff5f6a1f372080035711218ba2586d585": "9d71c408ebae430c77d8233cc2b42e5a",
".git/objects/dc/d4fa38274b6fe74118faeef175b7a485ca6bb4": "56b7e313d041dd8cddc50602b3cb4bbd",
".git/objects/df/bea81b185addec69788a4048399dc734e146af": "82df84a9da82b67fbb160497228cdf26",
".git/objects/e1/15238a9879cf5cebb838d9d73b8b1a1bbf25c8": "b3bd0dcc2f9044f0182ff799478d598d",
".git/objects/e4/97a15181845fe06b822c4d8737020fed437dc7": "1ca3a3764f9d97e0d1d1d34639880498",
".git/objects/e5/517ba7817d2978e8e3e5e91ef1648f80ce2b3a": "acdaf6841188dd8f1a443a0d7bce11e6",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/d4fd1fe81bda119b708014c9e41a9bd5b31b7b": "9e59be2267aee15d33c5259c5f4c5b38",
".git/objects/ea/e6999094735e21e756be6d7c17826deb014b24": "77a416b8839aca69ebce7fc86737ef46",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/1be339489a6726afc49a88dd08fae6478f28df": "1db78f5397b330776fc205f0cf8f817e",
".git/objects/ff/9803e8761ccb23d617cd7fd1c82a005f872c15": "9273279ef06624b5a81c732c12570382",
".git/objects/ff/a3f1006339480015ffc746c442c33f0d335ff2": "1ba0275e6581698d42ba161db6d89f54",
".git/refs/heads/main": "36e5ebd2d34d94e82ff1a7dce5fd5f0e",
".git/refs/remotes/origin/main": "36e5ebd2d34d94e82ff1a7dce5fd5f0e",
"assets/AssetManifest.bin": "950f3be92d6ffe633683c44cbfc6df97",
"assets/AssetManifest.bin.json": "6a967e801ff0c2f39a17da76b89f4552",
"assets/AssetManifest.json": "3fe4d12986bd273266554afb3737c7a5",
"assets/assets/images/front_anaya.jpg": "1f8fbad9cd07b48082837f85cd5b4f35",
"assets/assets/images/front_page.jpg": "3d0d67c381bd34f585023364a5ef6b57",
"assets/assets/images/front_three.jpg": "6340c6a51f22b82764c7ab4358f86ccf",
"assets/assets/images/front_two.jpg": "d9b7fcfd96208c7d8ee0b9abfe129d39",
"assets/assets/images/mandir_photo.jpg": "636fd3220d1ca42d97a9d8e65a9ff214",
"assets/assets/images/santu_mata.jpg": "1e34ea1b27fd8387c14d4152837ca601",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "479edda550e2d03f1d625432ff35dd60",
"assets/NOTICES": "bbc2de9e1e1b0290057bd73aa97d1b0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "beb22ea0b4545ef17d00c5f55feac30a",
"/": "beb22ea0b4545ef17d00c5f55feac30a",
"main.dart.js": "66b0771f5b4c2c7fb6b2cc46c556a4e8",
"manifest.json": "102d6f5d29a72d84b5518214a729c572",
"version.json": "f3401347654816fbb78dd4e4d875e7f9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
