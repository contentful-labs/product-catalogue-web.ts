webpackJsonp([1],{0:function(e,t,n){var r=n(114),o=n(113),i=n(15),s=n(4),a=n(28),c=n(292);s.enableProdMode(),r.bootstrap(c.ProuductCatalogueApp,[o.HTTP_PROVIDERS,i.ROUTER_PROVIDERS,a.ContentfulService])["catch"](function(e){return console.error(e)})},11:function(e,t){"use strict";function n(e){return"[object Array]"===v.call(e)}function r(e){return"[object ArrayBuffer]"===v.call(e)}function o(e){return"[object FormData]"===v.call(e)}function i(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function s(e){return"string"==typeof e}function a(e){return"number"==typeof e}function c(e){return"undefined"==typeof e}function u(e){return null!==e&&"object"==typeof e}function f(e){return"[object Date]"===v.call(e)}function p(e){return"[object File]"===v.call(e)}function l(e){return"[object Blob]"===v.call(e)}function d(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function h(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function y(e,t){if(null!==e&&"undefined"!=typeof e)if("object"==typeof e||n(e)||(e=[e]),n(e))for(var r=0,o=e.length;o>r;r++)t.call(null,e[r],r,e);else for(var i in e)e.hasOwnProperty(i)&&t.call(null,e[i],i,e)}function m(){function e(e,n){t[n]=e}for(var t={},n=0,r=arguments.length;r>n;n++)y(arguments[n],e);return t}var v=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:r,isFormData:o,isArrayBufferView:i,isString:s,isNumber:a,isObject:u,isUndefined:c,isDate:f,isFile:p,isBlob:l,isStandardBrowserEnv:h,forEach:y,merge:m,trim:d}},28:function(e,t,n){var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,s=3>i?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(3>i?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},o=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},i=n(273),s=n(4),a=n(293),c=function(){function e(){this.isUserSessionStored=!1,this.isUserSpaceLoaded=!1,this.model=new a.ContentfulModel,this.connect()}return e.prototype.connect=function(){var t=sessionStorage.getItem(e.SESSION_STORAGE_SPACEID),n=sessionStorage.getItem(e.SESSION_STORAGE_APIKEY);t&&n&&(console.log("bootstrapped session:\n","spaceId: "+t+"\n","apiKey: "+n+"\n"),this.isUserSessionStored=!0,this.isUserSpaceLoaded=!0,this.model.spaceId=t,this.model.apiKey=n),this.sdkClient=i.createClient({space:this.model.spaceId,accessToken:this.model.apiKey}),this.entriesPromise=this.sdkClient.entries().then(function(e){return e})["catch"](function(e){console.error("Could not connect to space:",this.model.spaceId),console.log(e)})},e.prototype.getSpace=function(){return this.sdkClient.space()},e.prototype.getProducts=function(e){var t=this;return void 0===e&&(e=null),this.entriesPromise.then(function(n){return n.filter(function(n){if(null!=e){var r;for(var o in n.fields.categories)n.fields.categories[o].sys.id!=e||(r=!0);return n.sys.contentType.sys.id==t.model.productContentType&&r}return n.sys.contentType.sys.id==t.model.productContentType})})},e.prototype.getProduct=function(e){return void 0===e&&(e=null),this.entriesPromise.then(function(t){return t.filter(function(t){return t.sys.id==e})})},e.prototype.getCategories=function(){var e=this.model.categoryContentType;return this.entriesPromise.then(function(t){return t.filter(function(t){return t.sys.contentType.sys.id==e})})},e.prototype.setSessionCredentials=function(t,n){console.log("setSessionCredentials\n","spaceId: "+n+"\n","apiKey: "+t+"\n"),this.isUserSessionStored=!0,sessionStorage.setItem(e.SESSION_STORAGE_APIKEY,t),sessionStorage.setItem(e.SESSION_STORAGE_SPACEID,n)},e.prototype.clearSessionCredentials=function(){console.log("removeSessionCredentials"),this.isUserSessionStored=!1,sessionStorage.removeItem(e.SESSION_STORAGE_APIKEY),sessionStorage.removeItem(e.SESSION_STORAGE_SPACEID)},e.SESSION_STORAGE_APIKEY="cfApiKey",e.SESSION_STORAGE_SPACEID="cfSpaceId",e=r([s.Injectable(),o("design:paramtypes",[])],e)}();t.ContentfulService=c},189:function(e,t,n){"use strict";var r=n(190),o=n(11),i=n(264),s=n(269),a=n(271),c=n(268),u=window.btoa||n(263);e.exports=function(e,t,f){var p=a(f.data,f.headers,f.transformRequest),l=o.merge(r.headers.common,r.headers[f.method]||{},f.headers||{});o.isFormData(p)&&delete l["Content-Type"];var d=XMLHttpRequest||ActiveXObject,h="onreadystatechange",y=!1;if(!c(f.url)&&window.XDomainRequest&&(d=window.XDomainRequest,h="onload",y=!0),f.auth){var m=f.auth.username||"",v=f.auth.password||"";l.Authorization="Basic "+u(m+":"+v)}var g=new d("Microsoft.XMLHTTP");if(g.open(f.method.toUpperCase(),i(f.url,f.params,f.paramsSerializer),!0),g.timeout=f.timeout,g[h]=function(){if(g&&(4===g.readyState||y)){var n=y?null:s(g.getAllResponseHeaders()),r=-1!==["text",""].indexOf(f.responseType||"")?g.responseText:g.response,o={data:a(r,n,f.transformResponse),status:g.status,statusText:g.statusText,headers:n,config:f};(g.status>=200&&g.status<300||y&&g.responseText?e:t)(o),g=null}},o.isStandardBrowserEnv()){var S=n(266),w=f.withCredentials||c(f.url)?S.read(f.xsrfCookieName||r.xsrfCookieName):void 0;w&&(l[f.xsrfHeaderName||r.xsrfHeaderName]=w)}if(y||o.forEach(l,function(e,t){p||"content-type"!==t.toLowerCase()?g.setRequestHeader(t,e):delete l[t]}),f.withCredentials&&(g.withCredentials=!0),f.responseType)try{g.responseType=f.responseType}catch(R){if("json"!==g.responseType)throw R}o.isArrayBuffer(p)&&(p=new DataView(p)),g.send(p)}},190:function(e,t,n){"use strict";var r=n(11),o=/^\)\]\}',?\n/,i={"Content-Type":"application/x-www-form-urlencoded"};e.exports={transformRequest:[function(e,t){return r.isFormData(e)?e:r.isArrayBuffer(e)?e:r.isArrayBufferView(e)?e.buffer:!r.isObject(e)||r.isFile(e)||r.isBlob(e)?e:(r.isUndefined(t)||(r.forEach(t,function(e,n){"content-type"===n.toLowerCase()&&(t["Content-Type"]=e)}),r.isUndefined(t["Content-Type"])&&(t["Content-Type"]="application/json;charset=utf-8")),JSON.stringify(e))}],transformResponse:[function(e){if("string"==typeof e){e=e.replace(o,"");try{e=JSON.parse(e)}catch(t){}}return e}],headers:{common:{Accept:"application/json, text/plain, */*"},patch:r.merge(i),post:r.merge(i),put:r.merge(i)},timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"}},258:function(e,t,n){e.exports=n(259)},259:function(e,t,n){"use strict";function r(e){this.defaultConfig=i.merge({headers:{},timeout:o.timeout,transformRequest:o.transformRequest,transformResponse:o.transformResponse},e),this.interceptors={request:new a,response:new a}}var o=n(190),i=n(11),s=n(261),a=n(260),c=n(267),u=n(265),f=n(262);r.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(this.defaultConfig,{method:"get"},e),e.baseURL&&!c(e.url)&&(e.url=u(e.baseURL,e.url)),e.withCredentials=e.withCredentials||o.withCredentials;var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n};var p=new r,l=e.exports=f(r.prototype.request,p);l.create=function(e){return new r(e)},l.defaults=o,l.all=function(e){return Promise.all(e)},l.spread=n(270),l.interceptors=p.interceptors,i.forEach(["delete","get","head"],function(e){r.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))},l[e]=f(r.prototype[e],p)}),i.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(i.merge(r||{},{method:e,url:t,data:n}))},l[e]=f(r.prototype[e],p)})},260:function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(11);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},261:function(e,t,n){(function(t){"use strict";e.exports=function(e){return new Promise(function(r,o){try{"undefined"!=typeof XMLHttpRequest||"undefined"!=typeof ActiveXObject?n(189)(r,o,e):"undefined"!=typeof t&&n(189)(r,o,e)}catch(i){o(i)}})}}).call(t,n(274))},262:function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},263:function(e,t){"use strict";function n(e){this.message=e}function r(e){for(var t,r,i=String(e),s="",a=0,c=o;i.charAt(0|a)||(c="=",a%1);s+=c.charAt(63&t>>8-a%1*8)){if(r=i.charCodeAt(a+=.75),r>255)throw new n("INVALID_CHARACTER_ERR: DOM Exception 5");t=t<<8|r}return s}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=r},264:function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(11);e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else{var s=[];o.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))}))}),i=s.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},265:function(e,t){"use strict";e.exports=function(e,t){return e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,"")}},266:function(e,t,n){"use strict";var r=n(11);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),s===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},267:function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},268:function(e,t,n){"use strict";var r=n(11);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},269:function(e,t,n){"use strict";var r=n(11);e.exports=function(e){var t,n,o,i={};return e?(r.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t&&(i[t]=i[t]?i[t]+", "+n:n)}),i):i}},270:function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},271:function(e,t,n){"use strict";var r=n(11);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},272:function(e,t){"use strict";function n(e){return i(e,r,function(t){return o(e,t)||t}),e.items||[]}function r(e){return e&&e.sys&&"Link"===e.sys.type}function o(e,t){var n=t.sys.linkType,r=t.sys.id,o=function(e){return e.sys.type===n&&e.sys.id===r};return s(e.items,o)||e.includes&&s(e.includes[n],o)}function i(e,t,n){if(t(e))return n(e);if(e&&"object"==typeof e){for(var r in e)e.hasOwnProperty(r)&&(e[r]=i(e[r],t,n));return e}return e}function s(e,t){if(e)for(var n=0,r=e.length;r>n;n++)if(t(e[n]))return e[n]}e.exports=n},273:function(e,t,n){"use strict";function r(e){return new v(e||{})}function o(e){return e&&e.sys&&e.sys.type in A}function i(e){var t=A[e.sys.type];return t.parse(e)}function s(e){return function(t){c(t,o,i);var n=e.resolveLinks?y(t):t.items;return Object.defineProperties(n,{limit:{value:t.limit,enumerable:!1},skip:{value:t.skip,enumerable:!1},total:{value:t.total,enumerable:!1}}),n}}function a(e){return keys(e).reduce(function(t,n){var r=e[n];return t[n]=Array.isArray(r)?r.join(","):r,t},{})}function c(e,t,n){if(t(e))return n(e);if(e&&"object"==typeof e)for(var r in e)e[r]=c(e[r],t,n);return e}function u(e,t){return t?e.then(function(e){return t(null,e),e})["catch"](function(e){throw t(e),e}):e}var f=function(e){return e&&e.__esModule?e["default"]:e},p=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e)){for(var n,r=[],o=e[Symbol.iterator]();!(n=o.next()).done&&(r.push(n.value),!t||r.length!==t););return r}throw new TypeError("Invalid attempt to destructure non-iterable instance")},l=function(){function e(e,t){for(var n in t){var r=t[n];r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};t.createClient=r,Object.defineProperty(t,"__esModule",{value:!0});var h=f(n(258)),y=f(n(272)),m=f(n(277)),v=function(){function e(t){var n=t.accessToken,r=t.space,o=t.secure,i=t.host,s=t.headers,a=t.agent;if(d(this,e),!n)throw new TypeError("Expected property accessToken");if(!r)throw new TypeError("Expected property space");var c=o===!1,u=i&&i.split(":")||[],f=p(u,2),l=f[0],h=f[1];l=l||"cdn.contentful.com",h=h||(c?80:443),this.options={baseUrl:""+(c?"http":"https")+"://"+l+":"+h+"/spaces/"+r,accessToken:n,headers:s||{},resolveLinks:!0},this.agent=a}return l(e,{_request:{value:function(e,t){t||(t={}),t.access_token=this.options.accessToken;var n={headers:this.options.headers,method:"get",url:""+this.options.baseUrl+e+"?"+m.stringify(t)};return this.agent&&(n.agent=this.agent),n.headers["Content-Type"]="application/vnd.contentful.delivery.v1+json",n.headers["X-Contentful-User-Agent"]="contentful.js/2.x",h(n).then(function(e){return e.data})["catch"](function(e){throw e.data})}},asset:{value:function(e,t){return u(this._request("/assets/"+e).then(i),t)}},assets:{value:function(e,t){var n=new b(e),r=this._request("/assets",n).then(s({resolveLinks:this.options.resolveLinks}));return u(r,t)}},contentType:{value:function(e,t){var n=this._request("/content_types/"+e).then(w.parse);return u(n,t)}},contentTypes:{value:function(e,t){var n=new b(e),r=this._request("/content_types",n).then(s({resolveLinks:this.options.resolveLinks}));return u(r,t)}},entry:{value:function(e,t){var n=this._request("/entries/"+e).then(S.parse);return u(n,t)}},entries:{value:function(e,t){var n=new b(e),r=this._request("/entries",n).then(s({resolveLinks:this.options.resolveLinks}));return u(r,t)}},space:{value:function(e){return u(this._request(""),e)}},_pagedSync:{value:function(e){var t=this;return this._request("/sync",e.query).then(function(n){return e.append(n),e.done?{items:e.items,nextSyncToken:e.nextSyncToken}:t._pagedSync(e)})}},sync:{value:function(e,t){if(!e||!e.initial&&!e.nextSyncToken)throw new Error("Please provide either the initial flag or a nextSyncToken for syncing");e.nextSyncToken&&(e.sync_token=e.nextSyncToken,delete e.initial,delete e.nextSyncToken);var n=new b(e),r=s({resolveLinks:!1}),o=this._pagedSync(new _(n)).then(function(e){return e.items=r(e),e});return u(o,t)}}}),e}(),g=function(){function e(t){var n=t.sys,r=t.fields;d(this,e),this.sys=new E(n),this.fields=r}return l(e,null,{parse:{value:function(t){return new e(t)}}}),e}(),S=function(){function e(t){var n=t.sys,r=t.fields;d(this,e),this.sys=new E(n),this.fields=r}return l(e,null,{parse:{value:function(t){return new e(t)}}}),e}(),w=function(){function e(t){var n=t.sys,r=t.fields,o=t.name,i=t.displayField;d(this,e),this.sys=new E(n),this.name=o,this.displayField=i,this.fields=r&&r.map(R.parse)}return l(e,null,{parse:{value:function(t){return new e(t)}}}),e}(),R=function(){function e(t){d(this,e);for(var n in t)this[n]=t[n]}return l(e,null,{parse:{value:function(t){return new e(t)}}}),e}(),b=function(){function e(t){d(this,e);for(var n in t)this[n]=t[n]}return l(e,{toQueryString:{value:function(){return m.stringify(this)}}},{parse:{value:function(t){return new e(a(t))}}}),e}(),C=function(){function e(){var t=void 0===arguments[0]?{}:arguments[0];d(this,e);for(var n in t)this[n]=t[n]}return l(e,null,{parse:{value:function(t){return new e(t)}}}),e}(),E=function(){function e(t){var n=t.id,r=t.revision,o=t.type,i=t.locale,s=t.contentType,a=t.createdAt,c=(t.linkType,t.updatedAt),u=t.space;d(this,e),this.id=n,this.revision=r,this.type=o,this.locale=i,this.space=u&&T.parse(u),this.contentType=s&&new T(s),this.createdAt=a&&new Date(a),this.updatedAt=c&&new Date(c)}return l(e,null,{parse:{value:function(t){return new e(t)}}}),e}(),T=function(){function e(t){var n=t.sys;d(this,e),this.sys=new E(n)}return l(e,null,{parse:{value:function(t){return new e(t)}}}),e}(),_=function(){function e(t){d(this,e),this.query=t,this.items=[],this.done=!1}return l(e,{append:{value:function(e){var t=this;if(this.items=this.items.concat(e.items),e.nextPageUrl){var n=e.nextPageUrl.split("?");this.query=Object.keys(this.query).reduce(function(e,n){return"initial"!==n&&"type"!==n&&"sync_token"!==n&&(e[n]=t.query[n]),e},{}),this.query.sync_token=m.parse(n[1]).sync_token}else if(e.nextSyncUrl){var r=e.nextSyncUrl.split("?");this.nextSyncToken=m.parse(r[1]).sync_token,this.done=!0}}}}),e}(),A={Asset:g,ContentType:w,Entry:S,Space:C}},274:function(e,t){function n(){u=!1,s.length?c=s.concat(c):f=-1,c.length&&r()}function r(){if(!u){var e=setTimeout(n);u=!0;for(var t=c.length;t;){for(s=c,c=[];++f<t;)s&&s[f].run();f=-1,t=c.length}s=null,u=!1,clearTimeout(e)}}function o(e,t){this.fun=e,this.array=t}function i(){}var s,a=e.exports={},c=[],u=!1,f=-1;a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new o(e,t)),1!==c.length||u||setTimeout(r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=i,a.addListener=i,a.once=i,a.off=i,a.removeListener=i,a.removeAllListeners=i,a.emit=i,a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},275:function(e,t){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,r,o){t=t||"&",r=r||"=";var i={};if("string"!=typeof e||0===e.length)return i;var s=/\+/g;e=e.split(t);var a=1e3;o&&"number"==typeof o.maxKeys&&(a=o.maxKeys);var c=e.length;a>0&&c>a&&(c=a);for(var u=0;c>u;++u){var f,p,l,d,h=e[u].replace(s,"%20"),y=h.indexOf(r);y>=0?(f=h.substr(0,y),p=h.substr(y+1)):(f=h,p=""),l=decodeURIComponent(f),d=decodeURIComponent(p),n(i,l)?Array.isArray(i[l])?i[l].push(d):i[l]=[i[l],d]:i[l]=d}return i}},276:function(e,t){"use strict";var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,r,o){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map(function(o){var i=encodeURIComponent(n(o))+r;return Array.isArray(e[o])?e[o].map(function(e){return i+encodeURIComponent(n(e))}).join(t):i+encodeURIComponent(n(e[o]))}).join(t):o?encodeURIComponent(n(o))+r+encodeURIComponent(n(e)):""}},277:function(e,t,n){"use strict";t.decode=t.parse=n(275),t.encode=t.stringify=n(276)},286:function(e,t,n){var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,s=3>i?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(3>i?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},o=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},i=n(4),s=function(){function e(){}return e=r([i.Component({selector:"categories",templateUrl:"app/components/about/about.html",styleUrls:["app/components/about/about.css"],providers:[],directives:[],pipes:[]}),o("design:paramtypes",[])],e)}();t.About=s},287:function(e,t,n){var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,s=3>i?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(3>i?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},o=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},i=n(4),s=n(15),a=n(28),c=function(){function e(e){var t=this;e.getCategories().then(function(e){t.categories=e})}return e=r([i.Component({selector:"categories",templateUrl:"app/components/categories/categories.html",styleUrls:["app/components/categories/categories.css"],providers:[],directives:[s.ROUTER_DIRECTIVES],pipes:[]}),o("design:paramtypes",[a.ContentfulService])],e)}();t.Categories=c},288:function(e,t,n){var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,s=3>i?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(3>i?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},o=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},i=n(4),s=n(15),a=n(28),c=function(){function e(e,t){var n=this;t.getProduct(e.get("productId")).then(function(e){n.product=e[0],n.images=e[0].fields.image})}return e=r([i.Component({selector:"product-detail",templateUrl:"app/components/product-detail/product-detail.html",styleUrls:["app/components/product-detail/product-detail.css"],providers:[],directives:[s.ROUTER_DIRECTIVES],pipes:[]}),o("design:paramtypes",[s.RouteParams,a.ContentfulService])],e)}();t.ProductDetail=c},289:function(e,t,n){var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,s=3>i?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(3>i?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},o=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},i=n(4),s=n(15),a=n(28),c=function(){function e(e,t){this.products=t.getProducts(e.get("categoryId")).then(function(e){return e})}return e=r([i.Component({selector:"products",templateUrl:"app/components/products/products.html",styleUrls:["app/components/products/products.css"],providers:[],directives:[s.ROUTER_DIRECTIVES],pipes:[]}),o("design:paramtypes",[s.RouteParams,a.ContentfulService])],e)}();t.Products=c},290:function(e,t){var n=function(){function e(e,t){void 0===e&&(e=null),void 0===t&&(t=null),this.spaceId=e,this.apiKey=t}return e}();t.SettingsModel=n},291:function(e,t,n){var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,s=3>i?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(3>i?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},o=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},i=n(4),s=n(15),a=n(111),c=n(28),u=n(290),f=function(){function e(e,t,n){this.contentfulService=e,this.model=new u.SettingsModel,this.urlDeepBase=null;var r=t.get("spaceId"),o=t.get("apiKey");o&&r?(console.log("deeplinked:\n","spaceId: "+r+"\n","apiKey: "+o+"\n"),this.model.spaceId=r,this.model.apiKey=o):e.isUserSessionStored&&(this.model.spaceId=e.model.spaceId,this.model.apiKey=e.model.apiKey),this.myForm=n.group({apiKey:[this.model.apiKey,a.Validators.compose([a.Validators.required,this.apiKeyValidator])],spaceId:[this.model.spaceId,a.Validators.compose([a.Validators.required,this.spaceIdValidator])]}),this.urlDeepBase=window.location.host+"/product-catalogue-web.ts/settings?"}return e.prototype.saveSession=function(){this.contentfulService.setSessionCredentials(this.model.apiKey,this.model.spaceId)},e.prototype.removeSession=function(){this.model=new u.SettingsModel,this.contentfulService.clearSessionCredentials()},e.prototype.rebootApp=function(){window.location.href=window.location.origin},e.prototype.spaceIdValidator=function(e){var t=/^[a-z0-9]{12}$/.test(e.value);return t?null:{invalidSpaceId:!0}},e.prototype.apiKeyValidator=function(e){var t=/^[a-z0-9]{64}$/.test(e.value);return t?null:{invalidApiKey:!0}},e=r([i.Component({selector:"settings",templateUrl:"app/components/settings/settings.html",styleUrls:["app/components/settings/settings.css"],providers:[a.FormBuilder],directives:[],pipes:[]}),o("design:paramtypes",[c.ContentfulService,s.RouteParams,a.FormBuilder])],e)}();t.Settings=f},292:function(e,t,n){var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,s=3>i?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(3>i?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},o=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},i=n(4),s=n(15),a=n(289),c=n(287),u=n(288),f=n(286),p=n(291),l=n(28),d=function(){function e(e,t){this.location=e,this.contentfulService=t,this.spaceName=t.getSpace().then(function(e){return e.name})}return e.prototype.isActive=function(e){return e===this.location.path().split("/")[1]},e=r([i.Component({selector:"prouduct-catalogue-app",providers:[],templateUrl:"app/prouduct-catalogue-app.html",styleUrls:["app/prouduct-catalogue-app.css"],directives:[s.ROUTER_DIRECTIVES],pipes:[]}),s.RouteConfig([new s.Route({path:"/products",component:a.Products,name:"Products",useAsDefault:!0}),new s.Route({path:"/products/:categoryId",component:a.Products,name:"ProductsByCategory"}),new s.Route({path:"/productdetail/:productId",component:u.ProductDetail,name:"ProductDetail"}),new s.Route({path:"/categories",component:c.Categories,name:"Categories"}),new s.Route({path:"/about",component:f.About,name:"About"}),new s.Route({path:"/settings",component:p.Settings,name:"Settings"})]),o("design:paramtypes",[s.Location,l.ContentfulService])],e)}();t.ProuductCatalogueApp=d},293:function(e,t){var n=function(){function e(e,t,n,r){void 0===e&&(e="rue07lqzt1co"),void 0===t&&(t="ece0f8fa62ac82fd11f4ceb8876a6afa7a28ef0dad813f890d391406caf1cd0e"),void 0===n&&(n="2PqfXUJwE8qSYKuM0U6w8M"),void 0===r&&(r="6XwpTaSiiI2Ak2Ww0oi6qa"),this.spaceId=e,this.apiKey=t,this.productContentType=n,this.categoryContentType=r}return e}();t.ContentfulModel=n}});