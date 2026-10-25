/* Portal del delegado: funciona sin conexión. Primero intenta la red (para tener siempre la última versión) y si no hay, usa la copia guardada. Nunca guarda nada de otros sitios ni de GitHub. */
const CACHE='portal-delegado-97d2b0f6aa2c';
const CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./apple-touch-icon.png','./favicon-32.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('portal-delegado-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const u=new URL(r.url);if(u.origin!==self.location.origin)return;
  const fromCache=()=>caches.match(r,{ignoreSearch:true}).then(m=>m||(r.mode==='navigate'?caches.match('./index.html'):undefined));
  /* la página se pide siempre al servidor (sin la copia del navegador) para que una versión nueva se vea a la primera */
  const req=r.mode==='navigate'?new Request(r.url,{cache:'no-cache',credentials:'same-origin',redirect:'manual'}):r;
  e.respondWith(fetch(req).then(res=>{if(res.type==='opaqueredirect')return res;if(res.ok&&res.type==='basic'){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp))}if(res.status>=500)return fromCache().then(m=>m||res);return res})
    .catch(()=>caches.match(r,{ignoreSearch:true}).then(m=>m||(r.mode==='navigate'?caches.match('./index.html'):undefined)).then(m=>m||new Response('Sin conexión',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}}))));
});
