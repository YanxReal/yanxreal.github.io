self.addEventListener('install', (event) => {
    console.log("Service Worker instalado");
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log("Service Worker activado");
});

self.addEventListener('fetch', (event) => {
    // Puedes añadir lógica de caché aquí si lo necesitas
});
