(function(e){function n(n){for(var r,c,u=n[0],i=n[1],s=n[2],d=0,f=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(n);while(f.length)f.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var i=t[c];0!==o[i]&&(r=!1)}r&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},a=[];function c(e){return u.p+"js/"+({game:"game"}[e]||e)+"."+{game:"95561928"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(e);var s=new Error;a=function(n){i.onerror=i.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,t[1](s)}o[e]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/chessio/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var l=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"35cd":function(e,n,t){"use strict";t("87a1")},"78fc":function(e,n,t){},"87a1":function(e,n,t){},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23");function o(e,n,t,o,a,c){var u=Object(r["i"])("Game");return Object(r["e"])(),Object(r["b"])(u)}var a=Object(r["k"])("data-v-0716026b");Object(r["g"])("data-v-0716026b");var c={key:1,class:"placeholder"};Object(r["f"])();var u=a((function(e,n,t,o,a,u){return a.downloaded?(Object(r["e"])(),Object(r["b"])("div",{key:0,id:a.containerId},null,8,["id"])):(Object(r["e"])(),Object(r["b"])("div",c," Downloading ... "))})),i=(t("d3b7"),t("96cf"),t("1da1")),s={name:"Game",data:function(){return{downloaded:!1,gameInstance:null,containerId:"game-container"}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.e("game").then(t.bind(null,"1156"));case 2:r=n.sent,e.downloaded=!0,e.$nextTick((function(){e.gameInstance=r.launch(e.containerId)}));case 5:case"end":return n.stop()}}),n)})))()},unmounted:function(){this.gameInstance.destroy(!1)}};t("35cd");s.render=u,s.__scopeId="data-v-0716026b";var d=s,l=Object(r["c"])({name:"App",components:{Game:d}});t("e8b7");l.render=o;var f=l,p=t("5502"),b=Object(p["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["a"])(f).use(b).mount("#app")},e8b7:function(e,n,t){"use strict";t("78fc")}});
//# sourceMappingURL=app.f2c7187c.js.map