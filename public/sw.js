if(!self.define){let e,i={};const r=(r,n)=>(r=new URL(r+".js",n).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,c)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let s={};const a=e=>r(e,f),b={module:{uri:f},exports:s,require:a};i[f]=Promise.all(n.map((e=>b[e]||a(e)))).then((e=>(c(...e),s)))}}define(["./workbox-ba6366b3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/styles.css",revision:"5d2652ed61718864e05f2ad382e8f072"},{url:"img/asp net core.png",revision:"a8313b92fc9b57b2be50ffe8fcf69111"},{url:"img/c_sharp.png",revision:"51fd37208a8c9cfd835f5fb071888f83"},{url:"img/css.png",revision:"3bbe38ecdb84cb0d4ee47f334b1dd69d"},{url:"img/Dart.png",revision:"9d8ec3264f1312b686d256efaecd0c5c"},{url:"img/flask.png",revision:"7f14ed9911f7ee249e1273e1b9a2017b"},{url:"img/flutter.png",revision:"85afad5b9e3d82311724b55474aa0978"},{url:"img/foto.jpg",revision:"c6e623efb35d0e863d820d2d35ac38cd"},{url:"img/html.png",revision:"e42fd4cb7a977d58487227f87029c738"},{url:"img/icon.png",revision:"2be8f1c8e058aebbd21c0ba72290bca5"},{url:"img/java.png",revision:"ab7fca936a4c2c439faaa731c55a8da4"},{url:"img/javascript.webp",revision:"b08f5b342afbec2f40485ae9120d002d"},{url:"img/laravel.png",revision:"60be0f4a9cc78fc087a4eb3500200a0e"},{url:"img/MERLIN.webp",revision:"09263c7130d0a80641924ce71309f789"},{url:"img/PHP.png",revision:"02cf57b3902939b60113be878053f445"},{url:"img/Python.png",revision:"369bcb96cf2ee0b26a18c84fadf6c091"},{url:"img/r.png",revision:"3ea18530bb1605940b6d6e941150428a"},{url:"img/react-native.png",revision:"5f067e240247eacffe3678258c579d56"},{url:"img/Ruby_On_Railspng.png",revision:"e4b772f4e234cec8f795709cbb47c35f"},{url:"img/ruby.png",revision:"69840808820a0962f3c7c40debeaeb47"},{url:"img/sql-logo.png",revision:"3ad7d4623b8bb182f4cccb51917577d1"},{url:"img/VB.NET.png",revision:"10f8189b2f354751e0f1e92297879987"},{url:"index.html",revision:"1bdc5733f53addd0ab29508bd955df5f"},{url:"manifest.json",revision:"f6a73cea3de6a346e7497d1d6743d3b5"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
