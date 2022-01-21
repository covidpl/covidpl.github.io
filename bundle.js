!function a(c,i,o){function r(n,e){if(!i[n]){if(!c[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(d)return d(n,!0);throw(t=new Error("Cannot find module '"+n+"'")).code="MODULE_NOT_FOUND",t}t=i[n]={exports:{}},c[n][0].call(t.exports,function(e){return r(c[n][1][e]||e)},t,t.exports,a,c,i,o)}return i[n].exports}for(var d="function"==typeof require&&require,e=0;e<o.length;e++)r(o[e]);return r}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.liftoff=void 0;var u=e("./fields"),i=e("./map"),e=e("./magma"),d=new Map((0,u.init_fields)().map(function(e){return[e.id,e]})),s=(0,e.magma)();function o(n,t){var a=document.getElementById("time");a.setAttribute("min",""+n.t0),a.setAttribute("max",""+(n.t0+n.frames-1)),a.value=n.t,a.disabled=0==n.w,document.getElementById("dsc").innerHTML=n.longer||"";var e=document.getElementById("sfield");e.innerHTML=[].concat(function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}(d.keys())).map(function(e){return'<option value="'+e+'"'+(e===n.id?" selected":"")+">"+d.get(e).desc+"</option>"}).join(""),e.onchange=function(){w(e.value,n.w,n.t,m?m.id:void 0,m&&m.selection||void 0)},-1==(c=[0,7,14,21,28]).indexOf(n.w)&&c.push(n.w);var c=c.filter(n.allow_w).sort(function(e,n){return e*n==0?0==e?1:-1:e-n}),i=document.getElementById("sw");i.innerHTML=c.map(function(e){return'<option value="'+e+'"'+(e===n.w?" selected":"")+">"+(0==(e=e)?"Cały zakres":1==e?"Dzień":7==e?"Tydzień":14==e?"Dwa tygodnie":21==e?"Trzy tygodnie":28==e?"Cztery tygodnie":e+" dni")+"</option>"}).join(""),i.onchange=function(){w(n.id,+i.value,n.t,m?m.id:void 0,m&&m.selection||void 0)};var o,r=document.getElementById("smap");r.innerHTML=[["carto","Kartogram"],["map","Mapa"]].map(function(e){return'<option value="'+e[0]+'"'+(e[0]===t?" selected":"")+">"+e[1]+"</option>"}).join(""),r.onchange=function(){w(n.id,n.w,n.t,r.value,m&&m.selection||void 0)},0==n.w?(a.onchange=null,a.ontouchmove=a.onmousemove=null):(o=function(){var e=+a.value;e!=n.t&&(n.t=e,z())},a.onchange=function(){o(),p()},a.ontouchmove=o,a.onmousemove=o)}var l=!1,r=!1;var m=!1,f=!1;async function w(e,n,t,a,c){await Promise.all([async function(e,n,t,a){l&&l.id===e&&l.w===n&&l.t===t||(d.has(e)||(console.warn("Unknown field name "+e+", switching to defaults"),e=d.keys().next().value),r=!0,y(),o(l=await d.get(e).build(n,t),a),r=!1,y())}(e,n,t,a),async function(e,n){if(!m||m.id!==e){f=!0,y(),m=await(0,i.build_map)(e,n,function(){z(),p()});for(var t=document.getElementById("mc");t.lastChild;)t.removeChild(t.lastChild);document.getElementById("mc").appendChild(m.element),f=!1,y()}}(a,c)]),document.getElementById("wrap").style.display="",z(),p()}function p(){var e,n=function(){{if(l&&m){var e="";return m.selection&&(e="&selected="+m.selection),"?field="+l.id+"&w="+l.w+"&map="+m.id+e+"#"+l.t}return""}}();l&&(document.title=d.get(l.id).desc+", "+(0==(e=l.w)?"za cały zakres czasu":1==e?"dziennie":7==e?"tygodniowo":14==e?"dwutygodniowo":21==e?"trzytygodniowo":28==e?"czterotygodniowo":"za okres "+e+" dni")),window&&window.history.replaceState({},null,n)}function y(){var e=f||r;document.getElementById("ld").style.display=e?"":"none"}t.liftoff=function(){function e(){var e,n=new URL(document.location.toString()).searchParams;w(n.get("field"),(e=n.get("w"),e=parseInt(e),isFinite(e)?e:void 0),(e=document.location.hash,e=parseInt(e.substr(1)),isFinite(e)?e:void 0),n.get("map"),n.get("selected"))}e(),window.onpopstate=e,fetch(new Request("https://mbq.me/x.json",{cache:"no-cache"})).then(function(e){return e}).catch(function(e){return e})};var b=document.getElementById("range"),v=document.getElementById("sel");function a(){var a,c,i,e,o,r,d,n,t,f;m&&l&&(a=l.vmin,c=l.vmax,i=l.t-l.t0,e=l.unit,o=0,r=m.plot,d=m.selection,l.v.map(function(e){var n=e[0],t=(e[1][i]-a)/(c-a),t=Math.pow(t,.5),t=s[Math.round(255*t)];r.get(n).setAttribute("fill",t),d===n&&(o=e[1][i])}),b.innerText=(n=l.t,t=l.w,f=l.te,0===t?"Cały zakres: "+(0,u.convert_date)(n)+" — "+(0,u.convert_date)(f):1===t?(0,u.convert_date)(n):(0,u.convert_date)(n)+" — "+(0,u.convert_date)(n+t-1)),v.innerText=d?"Powiat "+m.names.get(d)+": "+((t=o)<.01?t.toPrecision(2):t.toFixed(2))+e:"")}var c=!1;function z(){!c&&l&&m&&(c=!0,window.requestAnimationFrame(function(e){a(),c=!1}))}},{"./fields":3,"./magma":4,"./map":6}],2:[function(e,n,t){"use strict";function a(e){return e.flatMap(function(e){return e<0?Array.from({length:1-e},function(e){return 0}):[e]})}Object.defineProperty(t,"__esModule",{value:!0}),t.window_sum=t.decode_array_cml=t.decode_array=void 0,t.decode_array=a,t.decode_array_cml=function(e){var n=0;return(e=a(e).map(function(e){return n+=e})).unshift(0),e},t.window_sum=function(e,n){var t=e.slice(0,-n);return e.slice(n).map(function(e,n){return e-t[n]})}},{}],3:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.init_fields=t.convert_date=void 0;var b=e("./decode");async function v(e){return Promise.all(e.map(async function(e){return(await fetch(new Request(e,{cache:"no-cache"}))).json()}))}function z(e){return[e.reduce(function(e,n){return Math.min(e,n[1].reduce(function(e,n){return Math.min(e,n)},1/0))},1/0),e.reduce(function(e,n){return Math.max(e,n[1].reduce(function(e,n){return Math.max(e,n)},-1/0))},-1/0)]}function a(u,e,s,l,m,w,p,y){return{id:u,desc:e,build:async function(e,n){void 0===e&&(e=s);var t=await v([l,m]),a=t[0].t,c=a[1]-a[0]+1;c<e&&(e=c);var i=t[0].d,o=t[1].pow,r=new Map(o),d=0==e?a[1]-a[0]+1:e,f=0==e?w[1]:w[0]/d,t=i.map(function(n){return[n[0],(0,b.window_sum)((0,b.decode_array_cml)(n[1]),d).map(function(e){return e/r.get(n[0])*f})]}),o=t[0]&&t[0][1]?t[0][1].length:0,i=z(t);return(n=(n=void 0===n?o+a[0]-1:n)<a[0]?a[0]:n)>o+a[0]-1&&(n=o+a[0]-1),{id:u,t:n,v:t,vmin:i[0],vmax:i[1],t0:a[0],te:a[1],frames:o,tj:1,w:e,allow_w:function(e){return 0<=e&&e<=c},unit:0==e?p[1]:p[0],longer:0==e?y[1]:y[0]}}}}function c(d,e,f,u,s,l,m,w){return{id:d,desc:e,build:async function(n,e){n=f;var t=await v([u,s]),a=t[0].t,c=(a[1],a[0],t[0].d),i=t[1].pow,o=new Map(i),r=0==n?a[1]-a[0]+1:n,t=c.map(function(e){for(var n=(0,b.decode_array)(e[1]),t=o.get(e[0])/l,a=[],c=0;c<n.length-r+1;c++)a.push(Math.max(0,function(e){var a=e.length,n=e.reduce(function(e,n){return e+n/a},0);return(e.reduce(function(e,n,t){return e+t*n/a},0)-(a-1)/2*n)/((a*a-1)/12)}(n.slice(c,c+r)))/t);return[e[0],a]}),i=t[0]&&t[0][1]?t[0][1].length:0,c=z(t);return(e=(e=void 0===e?i+a[0]-1:e)<a[0]?a[0]:e)>i+a[0]-1&&(e=i+a[0]-1),{id:d,t:e,v:t,vmin:c[0],vmax:c[1],t0:a[0],te:a[1],frames:i,tj:1,w:n,allow_w:function(e){return e==f||e==n},unit:m,longer:w}}}}t.convert_date=function(e){return(e=new Date(24*e*60*60*1e3)).getUTCDate()+" "+["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"][e.getUTCMonth()]+" "+e.getUTCFullYear()},t.init_fields=function(){return[a("cases","Przypadki COVID-19",7,"covidc.json","powp.json",[1e5,100],["/100k/dzień","/100"],["Średnia dzienna liczba przypadków COVID-19 na 100 tysięcy mieszkańców.","Sumaryczna liczba przypadków COVID-19 na 100 mieszkanców."]),a("deaths","Zgony na COVID-19",7,"covidd.json","powp.json",[1e6,1e3],["/M/dzień","/1k"],["Średnia dzienna liczba zgonów powiązanych z COVID-19 w przeliczeniu na milion mieszkańców.","Sumaryczna liczba zgonów powiązanych z COVID-19 w przeliczeniu na tysiąc mieszkańców."]),a("boosters","Szczepienia przypominające",7,"vaxb.json","powp.json",[1e5,100],["/100k/dzień","/100"],["Średnia dzienna liczba podanych dawek przypominających na 100 tysięcy mieszkańców.","Sumaryczna iczba podanych dawek przypominających na 100 mieszkańców."]),a("tests","Testy na SARS-CoV-2",7,"tst.json","powp.json",[1e5,100],["/100k/dzień","/100"],["Średnia dzienna liczba wykonanych testów na 100 tysięcy mieszkańców.","Sumaryczna iczba wykonanych testów na 100 mieszkańców."]),(u=7,s="tstp.json",l="tst.json",m=["Procent pozytywnych wyników wykonanych testów na SARS-CoV-2.","Procent pozytywnych wyników wykonanych testów na SARS-CoV-2."],{id:f="positive_tests",desc:"Udział pozytywnych testów",build:async function(e,n){void 0===e&&(e=u);var t=await v([s,l]),a=t[0].t,c=a[1]-a[0]+1,i=0==(e=c<e?c:e)?a[1]-a[0]+1:e,o=t[0].d,r=t[1].d,d=new Map(r),t=o.map(function(e){var t=(0,b.window_sum)((0,b.decode_array_cml)(d.get(e[0])),i),n=(0,b.window_sum)((0,b.decode_array_cml)(e[1]),i).map(function(e,n){return 0!=t[n]?e/t[n]*100:0});return[e[0],n]}),r=t[0]&&t[0][1]?t[0][1].length:0,o=z(t);return(n=(n=void 0===n?r+a[0]-1:n)<a[0]?a[0]:n)>r+a[0]-1&&(n=r+a[0]-1),{id:f,t:n,v:t,vmin:o[0],vmax:o[1],t0:a[0],te:a[1],frames:r,tj:1,w:e,allow_w:function(e){return 0<=e&&e<=c},unit:"%",longer:0==e?m[1]:m[0]}}}),c("cases_trend_up","Trend wzrostowy przypadków",21,"covidc.json","powp.json",1e6,"/M/dzień^2","Średni przyrost dziennej liczby nowych przypadków COVID-19 na milion mieszkańców, z regresji liniowej metodą najmniejszych kwadratów. Spadek przypadków jest zaokrąglany do zera.")];var f,u,s,l,m}},{"./decode":2}],4:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.magma=void 0;var a=["#000004","#010005","#010106","#010108","#020109","#02020b","#02020d","#03030f","#030312","#040414","#050416","#060518","#06051a","#07061c","#08071e","#090720","#0a0822","#0b0924","#0c0926","#0d0a29","#0e0b2b","#100b2d","#110c2f","#120d31","#130d34","#140e36","#150e38","#160f3b","#180f3d","#19103f","#1a1042","#1c1044","#1d1147","#1e1149","#20114b","#21114e","#221150","#241253","#251255","#271258","#29115a","#2a115c","#2c115f","#2d1161","#2f1163","#311165","#331067","#341069","#36106b","#38106c","#390f6e","#3b0f70","#3d0f71","#3f0f72","#400f74","#420f75","#440f76","#451077","#471078","#491078","#4a1079","#4c117a","#4e117b","#4f127b","#51127c","#52137c","#54137d","#56147d","#57157e","#59157e","#5a167e","#5c167f","#5d177f","#5f187f","#601880","#621980","#641a80","#651a80","#671b80","#681c81","#6a1c81","#6b1d81","#6d1d81","#6e1e81","#701f81","#721f81","#732081","#752181","#762181","#782281","#792282","#7b2382","#7c2382","#7e2482","#802582","#812581","#832681","#842681","#862781","#882781","#892881","#8b2981","#8c2981","#8e2a81","#902a81","#912b81","#932b80","#942c80","#962c80","#982d80","#992d80","#9b2e7f","#9c2e7f","#9e2f7f","#a02f7f","#a1307e","#a3307e","#a5317e","#a6317d","#a8327d","#aa337d","#ab337c","#ad347c","#ae347b","#b0357b","#b2357b","#b3367a","#b5367a","#b73779","#b83779","#ba3878","#bc3978","#bd3977","#bf3a77","#c03a76","#c23b75","#c43c75","#c53c74","#c73d73","#c83e73","#ca3e72","#cc3f71","#cd4071","#cf4070","#d0416f","#d2426f","#d3436e","#d5446d","#d6456c","#d8456c","#d9466b","#db476a","#dc4869","#de4968","#df4a68","#e04c67","#e24d66","#e34e65","#e44f64","#e55064","#e75263","#e85362","#e95462","#ea5661","#eb5760","#ec5860","#ed5a5f","#ee5b5e","#ef5d5e","#f05f5e","#f1605d","#f2625d","#f2645c","#f3655c","#f4675c","#f4695c","#f56b5c","#f66c5c","#f66e5c","#f7705c","#f7725c","#f8745c","#f8765c","#f9785d","#f9795d","#f97b5d","#fa7d5e","#fa7f5e","#fa815f","#fb835f","#fb8560","#fb8761","#fc8961","#fc8a62","#fc8c63","#fc8e64","#fc9065","#fd9266","#fd9467","#fd9668","#fd9869","#fd9a6a","#fd9b6b","#fe9d6c","#fe9f6d","#fea16e","#fea36f","#fea571","#fea772","#fea973","#feaa74","#feac76","#feae77","#feb078","#feb27a","#feb47b","#feb67c","#feb77e","#feb97f","#febb81","#febd82","#febf84","#fec185","#fec287","#fec488","#fec68a","#fec88c","#feca8d","#fecc8f","#fecd90","#fecf92","#fed194","#fed395","#fed597","#fed799","#fed89a","#fdda9c","#fddc9e","#fddea0","#fde0a1","#fde2a3","#fde3a5","#fde5a7","#fde7a9","#fde9aa","#fdebac","#fcecae","#fceeb0","#fcf0b2","#fcf2b4","#fcf4b6","#fcf6b8","#fcf7b9","#fcf9bb","#fcfbbd","#fcfdbf"];t.magma=function(){return a.reverse()}},{}],5:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),(0,e("./app").liftoff)()},{"./app":1}],6:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.build_map=void 0,t.build_map=async function(e,n,t){var a="http://www.w3.org/2000/svg",c="",c="carto"===e?"carto.json":"map"===e?"pow.json":(e="carto","carto.json"),c=await(await fetch(new Request(c))).json(),i=document.createElementNS(a,"svg");function o(e){e=e.target.getAttribute("id"),d.selection&&r.has(d.selection)&&r.get(d.selection).setAttribute("class",""),d.selection=d.selection!==e&&e,d.selection&&(r.get(d.selection).setAttribute("class","sel"),i.insertBefore(r.get(d.selection),null)),t()}i.setAttribute("viewBox","-40 -40 "+(c.dim[0]+80)+" "+(c.dim[1]+80));var r=new Map,d={id:e,element:i,plot:r,selection:n||!1,names:new Map};return c.map.map(function(e){var n=document.createElementNS(a,"path");n.setAttributeNS(null,"id",e[0]),n.setAttributeNS(null,"d",e[1]),n.setAttributeNS(null,"fill","#fff"),e[0]==d.selection&&n.setAttribute("class","sel"),n.onclick=o,r.set(e[0],n),d.names.set(e[0],e[2]),i.appendChild(n)}),n&&i.insertBefore(r.get(n),null),d}},{}]},{},[5]);