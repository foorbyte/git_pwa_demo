//Le nm du cache actuel
const staticAmarisSite = "amaris-site-v1"
// Ajout des dossiers et fichiers dans le cache du naigateur pour la prise en compte de l'app en offline par exemple

const assets = [
  "/",
  "/index.html",
  "/dist/css/style.css",
  "/js/main.js",
  "/images/coffee1.jpg",
  "/images/coffee2.jpg",
  "/images/coffee3.jpg",
  "/images/coffee4.jpg",
  "/images/coffee5.jpg",
  "/images/coffee6.jpg",
  "/images/coffee7.jpg",
  "/images/coffee8.jpg",
  "/images/coffee9.jpg",
]

//L'installation de l'application via le cache du navigateur
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticAmarisSite).then(cache => {
      cache.addAll(assets)
    })
  )
})

//Les réponses de l'application après installation(insatllation dans le cache )
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})