(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))e(u);new MutationObserver(u=>{for(const i of u)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&e(f)}).observe(document,{childList:!0,subtree:!0});function t(u){const i={};return u.integrity&&(i.integrity=u.integrity),u.referrerPolicy&&(i.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?i.credentials="include":u.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(u){if(u.ep)return;u.ep=!0;const i=t(u);fetch(u.href,i)}})();const Fn=n=>{const r=document.createElement("img");return r.src="assets/cartas/"+n+".png",r.classList.add("carta"),r};var Cn="1.13.7",Nn=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||Function("return this")()||{},W=Array.prototype,un=Object.prototype,Pn=typeof Symbol<"u"?Symbol.prototype:null,Fr=W.push,F=W.slice,L=un.toString,Cr=un.hasOwnProperty,$n=typeof ArrayBuffer<"u",$r=typeof DataView<"u",zr=Array.isArray,In=Object.keys,Sn=Object.create,Bn=$n&&ArrayBuffer.isView,Jr=isNaN,Gr=isFinite,zn=!{toString:null}.propertyIsEnumerable("toString"),Tn=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],Hr=Math.pow(2,53)-1;function m(n,r){return r=r==null?n.length-1:+r,function(){for(var t=Math.max(arguments.length-r,0),e=Array(t),u=0;u<t;u++)e[u]=arguments[u+r];switch(r){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var i=Array(r+1);for(u=0;u<r;u++)i[u]=arguments[u];return i[r]=e,n.apply(this,i)}}function N(n){var r=typeof n;return r==="function"||r==="object"&&!!n}function Ur(n){return n===null}function Jn(n){return n===void 0}function Gn(n){return n===!0||n===!1||L.call(n)==="[object Boolean]"}function Wr(n){return!!(n&&n.nodeType===1)}function h(n){var r="[object "+n+"]";return function(t){return L.call(t)===r}}const fn=h("String"),Hn=h("Number"),Xr=h("Date"),Qr=h("RegExp"),Yr=h("Error"),Un=h("Symbol"),Wn=h("ArrayBuffer");var Xn=h("Function"),Zr=Nn.document&&Nn.document.childNodes;typeof/./!="function"&&typeof Int8Array!="object"&&typeof Zr!="function"&&(Xn=function(n){return typeof n=="function"||!1});const g=Xn,Qn=h("Object");var Yn=$r&&(!/\[native code\]/.test(String(DataView))||Qn(new DataView(new ArrayBuffer(8)))),ln=typeof Map<"u"&&Qn(new Map),Kr=h("DataView");function xr(n){return n!=null&&g(n.getInt8)&&Wn(n.buffer)}const G=Yn?xr:Kr,P=zr||h("Array");function O(n,r){return n!=null&&Cr.call(n,r)}var K=h("Arguments");(function(){K(arguments)||(K=function(n){return O(n,"callee")})})();const an=K;function kr(n){return!Un(n)&&Gr(n)&&!isNaN(parseFloat(n))}function Zn(n){return Hn(n)&&Jr(n)}function Kn(n){return function(){return n}}function xn(n){return function(r){var t=n(r);return typeof t=="number"&&t>=0&&t<=Hr}}function kn(n){return function(r){return r==null?void 0:r[n]}}const H=kn("byteLength"),br=xn(H);var jr=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;function nt(n){return Bn?Bn(n)&&!G(n):br(n)&&jr.test(L.call(n))}const bn=$n?nt:Kn(!1),d=kn("length");function rt(n){for(var r={},t=n.length,e=0;e<t;++e)r[n[e]]=!0;return{contains:function(u){return r[u]===!0},push:function(u){return r[u]=!0,n.push(u)}}}function jn(n,r){r=rt(r);var t=Tn.length,e=n.constructor,u=g(e)&&e.prototype||un,i="constructor";for(O(n,i)&&!r.contains(i)&&r.push(i);t--;)i=Tn[t],i in n&&n[i]!==u[i]&&!r.contains(i)&&r.push(i)}function v(n){if(!N(n))return[];if(In)return In(n);var r=[];for(var t in n)O(n,t)&&r.push(t);return zn&&jn(n,r),r}function tt(n){if(n==null)return!0;var r=d(n);return typeof r=="number"&&(P(n)||fn(n)||an(n))?r===0:d(v(n))===0}function nr(n,r){var t=v(r),e=t.length;if(n==null)return!e;for(var u=Object(n),i=0;i<e;i++){var f=t[i];if(r[f]!==u[f]||!(f in u))return!1}return!0}function c(n){if(n instanceof c)return n;if(!(this instanceof c))return new c(n);this._wrapped=n}c.VERSION=Cn;c.prototype.value=function(){return this._wrapped};c.prototype.valueOf=c.prototype.toJSON=c.prototype.value;c.prototype.toString=function(){return String(this._wrapped)};function Dn(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,H(n))}var Ln="[object DataView]";function x(n,r,t,e){if(n===r)return n!==0||1/n===1/r;if(n==null||r==null)return!1;if(n!==n)return r!==r;var u=typeof n;return u!=="function"&&u!=="object"&&typeof r!="object"?!1:rr(n,r,t,e)}function rr(n,r,t,e){n instanceof c&&(n=n._wrapped),r instanceof c&&(r=r._wrapped);var u=L.call(n);if(u!==L.call(r))return!1;if(Yn&&u=="[object Object]"&&G(n)){if(!G(r))return!1;u=Ln}switch(u){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!=+n?+r!=+r:+n==0?1/+n===1/r:+n==+r;case"[object Date]":case"[object Boolean]":return+n==+r;case"[object Symbol]":return Pn.valueOf.call(n)===Pn.valueOf.call(r);case"[object ArrayBuffer]":case Ln:return rr(Dn(n),Dn(r),t,e)}var i=u==="[object Array]";if(!i&&bn(n)){var f=H(n);if(f!==H(r))return!1;if(n.buffer===r.buffer&&n.byteOffset===r.byteOffset)return!0;i=!0}if(!i){if(typeof n!="object"||typeof r!="object")return!1;var l=n.constructor,o=r.constructor;if(l!==o&&!(g(l)&&l instanceof l&&g(o)&&o instanceof o)&&"constructor"in n&&"constructor"in r)return!1}t=t||[],e=e||[];for(var a=t.length;a--;)if(t[a]===n)return e[a]===r;if(t.push(n),e.push(r),i){if(a=n.length,a!==r.length)return!1;for(;a--;)if(!x(n[a],r[a],t,e))return!1}else{var s=v(n),p;if(a=s.length,v(r).length!==a)return!1;for(;a--;)if(p=s[a],!(O(r,p)&&x(n[p],r[p],t,e)))return!1}return t.pop(),e.pop(),!0}function et(n,r){return x(n,r)}function C(n){if(!N(n))return[];var r=[];for(var t in n)r.push(t);return zn&&jn(n,r),r}function on(n){var r=d(n);return function(t){if(t==null)return!1;var e=C(t);if(d(e))return!1;for(var u=0;u<r;u++)if(!g(t[n[u]]))return!1;return n!==ur||!g(t[cn])}}var cn="forEach",tr="has",sn=["clear","delete"],er=["get",tr,"set"],ut=sn.concat(cn,er),ur=sn.concat(er),it=["add"].concat(sn,cn,tr);const ft=ln?on(ut):h("Map"),lt=ln?on(ur):h("WeakMap"),at=ln?on(it):h("Set"),ot=h("WeakSet");function B(n){for(var r=v(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e}function ct(n){for(var r=v(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e}function ir(n){for(var r={},t=v(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r}function k(n){var r=[];for(var t in n)g(n[t])&&r.push(t);return r.sort()}function vn(n,r){return function(t){var e=arguments.length;if(r&&(t=Object(t)),e<2||t==null)return t;for(var u=1;u<e;u++)for(var i=arguments[u],f=n(i),l=f.length,o=0;o<l;o++){var a=f[o];(!r||t[a]===void 0)&&(t[a]=i[a])}return t}}const fr=vn(C),U=vn(v),lr=vn(C,!0);function st(){return function(){}}function ar(n){if(!N(n))return{};if(Sn)return Sn(n);var r=st();r.prototype=n;var t=new r;return r.prototype=null,t}function vt(n,r){var t=ar(n);return r&&U(t,r),t}function ht(n){return N(n)?P(n)?n.slice():fr({},n):n}function pt(n,r){return r(n),n}function or(n){return P(n)?n:[n]}c.toPath=or;function $(n){return c.toPath(n)}function hn(n,r){for(var t=r.length,e=0;e<t;e++){if(n==null)return;n=n[r[e]]}return t?n:void 0}function cr(n,r,t){var e=hn(n,$(r));return Jn(e)?t:e}function gt(n,r){r=$(r);for(var t=r.length,e=0;e<t;e++){var u=r[e];if(!O(n,u))return!1;n=n[u]}return!!t}function pn(n){return n}function V(n){return n=U({},n),function(r){return nr(r,n)}}function gn(n){return n=$(n),function(r){return hn(r,n)}}function z(n,r,t){if(r===void 0)return n;switch(t??3){case 1:return function(e){return n.call(r,e)};case 3:return function(e,u,i){return n.call(r,e,u,i)};case 4:return function(e,u,i,f){return n.call(r,e,u,i,f)}}return function(){return n.apply(r,arguments)}}function sr(n,r,t){return n==null?pn:g(n)?z(n,r,t):N(n)&&!P(n)?V(n):gn(n)}function mn(n,r){return sr(n,r,1/0)}c.iteratee=mn;function y(n,r,t){return c.iteratee!==mn?c.iteratee(n,r):sr(n,r,t)}function mt(n,r,t){r=y(r,t);for(var e=v(n),u=e.length,i={},f=0;f<u;f++){var l=e[f];i[l]=r(n[l],l,n)}return i}function vr(){}function dt(n){return n==null?vr:function(r){return cr(n,r)}}function yt(n,r,t){var e=Array(Math.max(0,n));r=z(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e}function b(n,r){return r==null&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}const R=Date.now||function(){return new Date().getTime()};function hr(n){var r=function(i){return n[i]},t="(?:"+v(n).join("|")+")",e=RegExp(t),u=RegExp(t,"g");return function(i){return i=i==null?"":""+i,e.test(i)?i.replace(u,r):i}}const pr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},wt=hr(pr),_t=ir(pr),At=hr(_t),Et=c.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var Q=/(.)^/,Ot={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Mt=/\\|'|\r|\n|\u2028|\u2029/g;function Nt(n){return"\\"+Ot[n]}var Pt=/^\s*(\w|\$)+\s*$/;function It(n,r,t){!r&&t&&(r=t),r=lr({},r,c.templateSettings);var e=RegExp([(r.escape||Q).source,(r.interpolate||Q).source,(r.evaluate||Q).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(a,s,p,On,Mn){return i+=n.slice(u,Mn).replace(Mt,Nt),u=Mn+a.length,s?i+=`'+
((__t=(`+s+`))==null?'':_.escape(__t))+
'`:p?i+=`'+
((__t=(`+p+`))==null?'':__t)+
'`:On&&(i+=`';
`+On+`
__p+='`),a}),i+=`';
`;var f=r.variable;if(f){if(!Pt.test(f))throw new Error("variable is not a bare identifier: "+f)}else i=`with(obj||{}){
`+i+`}
`,f="obj";i=`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
`+i+`return __p;
`;var l;try{l=new Function(f,"_",i)}catch(a){throw a.source=i,a}var o=function(a){return l.call(this,a,c)};return o.source="function("+f+`){
`+i+"}",o}function St(n,r,t){r=$(r);var e=r.length;if(!e)return g(t)?t.call(n):t;for(var u=0;u<e;u++){var i=n==null?void 0:n[r[u]];i===void 0&&(i=t,u=e),n=g(i)?i.call(n):i}return n}var Bt=0;function Tt(n){var r=++Bt+"";return n?n+r:r}function Dt(n){var r=c(n);return r._chain=!0,r}function gr(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var i=ar(n.prototype),f=n.apply(i,u);return N(f)?f:i}var T=m(function(n,r){var t=T.placeholder,e=function(){for(var u=0,i=r.length,f=Array(i),l=0;l<i;l++)f[l]=r[l]===t?arguments[u++]:r[l];for(;u<arguments.length;)f.push(arguments[u++]);return gr(n,e,this,this,f)};return e});T.placeholder=c;const mr=m(function(n,r,t){if(!g(n))throw new TypeError("Bind must be called on a function");var e=m(function(u){return gr(n,e,r,this,t.concat(u))});return e}),w=xn(d);function I(n,r,t,e){if(e=e||[],!r&&r!==0)r=1/0;else if(r<=0)return e.concat(n);for(var u=e.length,i=0,f=d(n);i<f;i++){var l=n[i];if(w(l)&&(P(l)||an(l)))if(r>1)I(l,r-1,t,e),u=e.length;else for(var o=0,a=l.length;o<a;)e[u++]=l[o++];else t||(e[u++]=l)}return e}const Lt=m(function(n,r){r=I(r,!1,!1);var t=r.length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=mr(n[e],n)}return n});function Vt(n,r){var t=function(e){var u=t.cache,i=""+(r?r.apply(this,arguments):e);return O(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return t.cache={},t}const dr=m(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),Rt=T(dr,c,1);function qt(n,r,t){var e,u,i,f,l=0;t||(t={});var o=function(){l=t.leading===!1?0:R(),e=null,f=n.apply(u,i),e||(u=i=null)},a=function(){var s=R();!l&&t.leading===!1&&(l=s);var p=r-(s-l);return u=this,i=arguments,p<=0||p>r?(e&&(clearTimeout(e),e=null),l=s,f=n.apply(u,i),e||(u=i=null)):!e&&t.trailing!==!1&&(e=setTimeout(o,p)),f};return a.cancel=function(){clearTimeout(e),l=0,e=u=i=null},a}function Ft(n,r,t){var e,u,i,f,l,o=function(){var s=R()-u;r>s?e=setTimeout(o,r-s):(e=null,t||(f=n.apply(l,i)),e||(i=l=null))},a=m(function(s){return l=this,i=s,u=R(),e||(e=setTimeout(o,r),t&&(f=n.apply(l,i))),f});return a.cancel=function(){clearTimeout(e),e=i=l=null},a}function Ct(n,r){return T(r,n)}function dn(n){return function(){return!n.apply(this,arguments)}}function $t(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}}function zt(n,r){return function(){if(--n<1)return r.apply(this,arguments)}}function yr(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}const Jt=T(yr,2);function wr(n,r,t){r=y(r,t);for(var e=v(n),u,i=0,f=e.length;i<f;i++)if(u=e[i],r(n[u],u,n))return u}function _r(n){return function(r,t,e){t=y(t,e);for(var u=d(r),i=n>0?0:u-1;i>=0&&i<u;i+=n)if(t(r[i],i,r))return i;return-1}}const yn=_r(1),Ar=_r(-1);function Er(n,r,t,e){t=y(t,e,1);for(var u=t(r),i=0,f=d(n);i<f;){var l=Math.floor((i+f)/2);t(n[l])<u?i=l+1:f=l}return i}function Or(n,r,t){return function(e,u,i){var f=0,l=d(e);if(typeof i=="number")n>0?f=i>=0?i:Math.max(i+l,f):l=i>=0?Math.min(i+1,l):i+l+1;else if(t&&i&&l)return i=t(e,u),e[i]===u?i:-1;if(u!==u)return i=r(F.call(e,f,l),Zn),i>=0?i+f:-1;for(i=n>0?f:l-1;i>=0&&i<l;i+=n)if(e[i]===u)return i;return-1}}const Mr=Or(1,yn,Er),Gt=Or(-1,Ar);function j(n,r,t){var e=w(n)?yn:wr,u=e(n,r,t);if(u!==void 0&&u!==-1)return n[u]}function Ht(n,r){return j(n,V(r))}function E(n,r,t){r=z(r,t);var e,u;if(w(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var i=v(n);for(e=0,u=i.length;e<u;e++)r(n[i[e]],i[e],n)}return n}function M(n,r,t){r=y(r,t);for(var e=!w(n)&&v(n),u=(e||n).length,i=Array(u),f=0;f<u;f++){var l=e?e[f]:f;i[f]=r(n[l],l,n)}return i}function Nr(n){var r=function(t,e,u,i){var f=!w(t)&&v(t),l=(f||t).length,o=n>0?0:l-1;for(i||(u=t[f?f[o]:o],o+=n);o>=0&&o<l;o+=n){var a=f?f[o]:o;u=e(u,t[a],a,t)}return u};return function(t,e,u,i){var f=arguments.length>=3;return r(t,z(e,i,4),u,f)}}const Y=Nr(1),Vn=Nr(-1);function S(n,r,t){var e=[];return r=y(r,t),E(n,function(u,i,f){r(u,i,f)&&e.push(u)}),e}function Ut(n,r,t){return S(n,dn(y(r)),t)}function Rn(n,r,t){r=y(r,t);for(var e=!w(n)&&v(n),u=(e||n).length,i=0;i<u;i++){var f=e?e[i]:i;if(!r(n[f],f,n))return!1}return!0}function qn(n,r,t){r=y(r,t);for(var e=!w(n)&&v(n),u=(e||n).length,i=0;i<u;i++){var f=e?e[i]:i;if(r(n[f],f,n))return!0}return!1}function A(n,r,t,e){return w(n)||(n=B(n)),(typeof t!="number"||e)&&(t=0),Mr(n,r,t)>=0}const Wt=m(function(n,r,t){var e,u;return g(r)?u=r:(r=$(r),e=r.slice(0,-1),r=r[r.length-1]),M(n,function(i){var f=u;if(!f){if(e&&e.length&&(i=hn(i,e)),i==null)return;f=i[r]}return f==null?f:f.apply(i,t)})});function wn(n,r){return M(n,gn(r))}function Xt(n,r){return S(n,V(r))}function Pr(n,r,t){var e=-1/0,u=-1/0,i,f;if(r==null||typeof r=="number"&&typeof n[0]!="object"&&n!=null){n=w(n)?n:B(n);for(var l=0,o=n.length;l<o;l++)i=n[l],i!=null&&i>e&&(e=i)}else r=y(r,t),E(n,function(a,s,p){f=r(a,s,p),(f>u||f===-1/0&&e===-1/0)&&(e=a,u=f)});return e}function Qt(n,r,t){var e=1/0,u=1/0,i,f;if(r==null||typeof r=="number"&&typeof n[0]!="object"&&n!=null){n=w(n)?n:B(n);for(var l=0,o=n.length;l<o;l++)i=n[l],i!=null&&i<e&&(e=i)}else r=y(r,t),E(n,function(a,s,p){f=r(a,s,p),(f<u||f===1/0&&e===1/0)&&(e=a,u=f)});return e}var Yt=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Ir(n){return n?P(n)?F.call(n):fn(n)?n.match(Yt):w(n)?M(n,pn):B(n):[]}function Sr(n,r,t){if(r==null||t)return w(n)||(n=B(n)),n[b(n.length-1)];var e=Ir(n),u=d(e);r=Math.max(Math.min(r,u),0);for(var i=u-1,f=0;f<r;f++){var l=b(f,i),o=e[f];e[f]=e[l],e[l]=o}return e.slice(0,r)}function Zt(n){return Sr(n,1/0)}function Kt(n,r,t){var e=0;return r=y(r,t),wn(M(n,function(u,i,f){return{value:u,index:e++,criteria:r(u,i,f)}}).sort(function(u,i){var f=u.criteria,l=i.criteria;if(f!==l){if(f>l||f===void 0)return 1;if(f<l||l===void 0)return-1}return u.index-i.index}),"value")}function X(n,r){return function(t,e,u){var i=r?[[],[]]:{};return e=y(e,u),E(t,function(f,l){var o=e(f,l,t);n(i,f,o)}),i}}const xt=X(function(n,r,t){O(n,t)?n[t].push(r):n[t]=[r]}),kt=X(function(n,r,t){n[t]=r}),bt=X(function(n,r,t){O(n,t)?n[t]++:n[t]=1}),jt=X(function(n,r,t){n[t?0:1].push(r)},!0);function ne(n){return n==null?0:w(n)?n.length:v(n).length}function re(n,r,t){return r in t}const Br=m(function(n,r){var t={},e=r[0];if(n==null)return t;g(e)?(r.length>1&&(e=z(e,r[1])),r=C(n)):(e=re,r=I(r,!1,!1),n=Object(n));for(var u=0,i=r.length;u<i;u++){var f=r[u],l=n[f];e(l,f,n)&&(t[f]=l)}return t}),te=m(function(n,r){var t=r[0],e;return g(t)?(t=dn(t),r.length>1&&(e=r[1])):(r=M(I(r,!1,!1),String),t=function(u,i){return!A(r,i)}),Br(n,t,e)});function Tr(n,r,t){return F.call(n,0,Math.max(0,n.length-(r==null||t?1:r)))}function Z(n,r,t){return n==null||n.length<1?r==null||t?void 0:[]:r==null||t?n[0]:Tr(n,n.length-r)}function J(n,r,t){return F.call(n,r==null||t?1:r)}function ee(n,r,t){return n==null||n.length<1?r==null||t?void 0:[]:r==null||t?n[n.length-1]:J(n,Math.max(0,n.length-r))}function ue(n){return S(n,Boolean)}function ie(n,r){return I(n,r,!1)}const Dr=m(function(n,r){return r=I(r,!0,!0),S(n,function(t){return!A(r,t)})}),fe=m(function(n,r){return Dr(n,r)});function nn(n,r,t,e){Gn(r)||(e=t,t=r,r=!1),t!=null&&(t=y(t,e));for(var u=[],i=[],f=0,l=d(n);f<l;f++){var o=n[f],a=t?t(o,f,n):o;r&&!t?((!f||i!==a)&&u.push(o),i=a):t?A(i,a)||(i.push(a),u.push(o)):A(u,o)||u.push(o)}return u}const le=m(function(n){return nn(I(n,!0,!0))});function ae(n){for(var r=[],t=arguments.length,e=0,u=d(n);e<u;e++){var i=n[e];if(!A(r,i)){var f;for(f=1;f<t&&A(arguments[f],i);f++);f===t&&r.push(i)}}return r}function rn(n){for(var r=n&&Pr(n,d).length||0,t=Array(r),e=0;e<r;e++)t[e]=wn(n,e);return t}const oe=m(rn);function ce(n,r){for(var t={},e=0,u=d(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t}function se(n,r,t){r==null&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),i=0;i<e;i++,n+=t)u[i]=n;return u}function ve(n,r){if(r==null||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(F.call(n,e,e+=r));return t}function _n(n,r){return n._chain?c(r).chain():r}function Lr(n){return E(k(n),function(r){var t=c[r]=n[r];c.prototype[r]=function(){var e=[this._wrapped];return Fr.apply(e,arguments),_n(this,t.apply(c,e))}}),c}E(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var r=W[n];c.prototype[n]=function(){var t=this._wrapped;return t!=null&&(r.apply(t,arguments),(n==="shift"||n==="splice")&&t.length===0&&delete t[0]),_n(this,t)}});E(["concat","join","slice"],function(n){var r=W[n];c.prototype[n]=function(){var t=this._wrapped;return t!=null&&(t=r.apply(t,arguments)),_n(this,t)}});const he=Object.freeze(Object.defineProperty({__proto__:null,VERSION:Cn,after:zt,all:Rn,allKeys:C,any:qn,assign:U,before:yr,bind:mr,bindAll:Lt,chain:Dt,chunk:ve,clone:ht,collect:M,compact:ue,compose:$t,constant:Kn,contains:A,countBy:bt,create:vt,debounce:Ft,default:c,defaults:lr,defer:Rt,delay:dr,detect:j,difference:Dr,drop:J,each:E,escape:wt,every:Rn,extend:fr,extendOwn:U,filter:S,find:j,findIndex:yn,findKey:wr,findLastIndex:Ar,findWhere:Ht,first:Z,flatten:ie,foldl:Y,foldr:Vn,forEach:E,functions:k,get:cr,groupBy:xt,has:gt,head:Z,identity:pn,include:A,includes:A,indexBy:kt,indexOf:Mr,initial:Tr,inject:Y,intersection:ae,invert:ir,invoke:Wt,isArguments:an,isArray:P,isArrayBuffer:Wn,isBoolean:Gn,isDataView:G,isDate:Xr,isElement:Wr,isEmpty:tt,isEqual:et,isError:Yr,isFinite:kr,isFunction:g,isMap:ft,isMatch:nr,isNaN:Zn,isNull:Ur,isNumber:Hn,isObject:N,isRegExp:Qr,isSet:at,isString:fn,isSymbol:Un,isTypedArray:bn,isUndefined:Jn,isWeakMap:lt,isWeakSet:ot,iteratee:mn,keys:v,last:ee,lastIndexOf:Gt,map:M,mapObject:mt,matcher:V,matches:V,max:Pr,memoize:Vt,methods:k,min:Qt,mixin:Lr,negate:dn,noop:vr,now:R,object:ce,omit:te,once:Jt,pairs:ct,partial:T,partition:jt,pick:Br,pluck:wn,property:gn,propertyOf:dt,random:b,range:se,reduce:Y,reduceRight:Vn,reject:Ut,rest:J,restArguments:m,result:St,sample:Sr,select:S,shuffle:Zt,size:ne,some:qn,sortBy:Kt,sortedIndex:Er,tail:J,take:Z,tap:pt,template:It,templateSettings:Et,throttle:qt,times:yt,toArray:Ir,toPath:or,transpose:rn,unescape:At,union:le,uniq:nn,unique:nn,uniqueId:Tt,unzip:rn,values:B,where:Xt,without:fe,wrap:Ct,zip:oe},Symbol.toStringTag,{value:"Module"}));var tn=Lr(he);tn._=tn;const pe=(n,r)=>{if(!n)throw new Error("tiposDeCarta es obligatorio");if(!n.length>0)throw new Error("tiposDeCarta tiene que un arreglo de string's");if(!r)throw new Error("tiposEspeciales es obligatorio");if(!r.length>0)throw new Error("tiposEspeciales tiene que un arreglo de string's");let t=[];for(let e=2;e<=10;e++)for(let u of n)t.push(e+u);for(let e of n)for(let u of r)t.push(u+e);return tn.shuffle(t)},Vr=n=>{if(n.length===0)throw"No hay cartas en el deck";const r=n.length%2===1?n[n.length-1]:n[n.length/2];return n=n.filter(t=>t!==r),r},ge=n=>{const r=n.substring(0,n.length-1);return isNaN(r)?r==="A"?11:10:Number(r)};let An=[];const me=["C","D","H","S"],de=["A","J","Q","K"];let _=[];const D=document.querySelector("#btnPedir"),ye=document.querySelector("#btnNuevo"),q=document.querySelector("#btnDetener"),En=document.querySelectorAll(".divCartas"),Rr=document.querySelectorAll("small"),we=(n=2)=>{An=pe(me,de),_=[];for(let r=0;r<n;r++)_.push(0);Rr.forEach(r=>r.innerText="0"),En.forEach(r=>r.innerHTML=""),q.disabled=!1,D.disabled=!1},qr=(n,r)=>(_[r]=_[r]+ge(n),Rr[r].innerText=_[r],_[r]),_e=()=>{const[n,r]=_;setTimeout(()=>{let t="";n>21?t="El Jugador Perdió":r===n?t="Nadie Ganó":r>21?t="El Jugador Ganó":r>n&&(t="Computadora Gana"),alert(t)},100)},en=n=>{let r=0;do{const t=Vr(An);r=qr(t,_.length-1);const e=Fn(t,_.length-1);En[_.length-1].append(e)}while(r<n&&n<=21);_e()};D.addEventListener("click",()=>{const n=Vr(An),r=qr(n,0),t=Fn(n);En[0].append(t),(r>21||r===21)&&(D.disabled=!0,q.disabled=!0,en(r))});q.addEventListener("click",()=>{q.disabled=!0,D.disabled=!0,en(_[0])});ye.addEventListener("click",()=>{we()});
