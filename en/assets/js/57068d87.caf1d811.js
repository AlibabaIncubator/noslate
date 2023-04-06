"use strict";(self.webpackChunknoslate_website=self.webpackChunknoslate_website||[]).push([[4047],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),v=a,k=u["".concat(s,".").concat(v)]||u[v]||d[v]||l;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2342:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={},o="Web API",i={unversionedId:"noslate_workers/aworker/web-api",id:"noslate_workers/aworker/web-api",title:"Web API",description:"Aworker implements a specification similar to Service Worker API, providing a basic Request-Response service API.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/noslate_workers/aworker/web-api.md",sourceDirName:"noslate_workers/aworker",slug:"/noslate_workers/aworker/web-api",permalink:"/en/docs/noslate_workers/aworker/web-api",draft:!1,editUrl:"https://github.com/noslate-project/noslate/tree/main/site/docs/noslate_workers/aworker/web-api.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Aworker Introduction",permalink:"/en/docs/noslate_workers/aworker/intro"},next:{title:"Serialize API",permalink:"/en/docs/noslate_workers/aworker/serialize-api"}},s={},p=[{value:"Aworker lifecycle",id:"aworker-lifecycle",level:2},{value:"Event: <code>&#39;install&#39;</code>",id:"event-install",level:3},{value:"Event: <code>&#39;activate&#39;</code>",id:"event-activate",level:3},{value:"Event: <code>&#39;fetch&#39;</code>",id:"event-fetch",level:3}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"web-api"},"Web API"),(0,a.kt)("p",null,"Aworker implements a specification similar to ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/service-workers/"},"Service Worker API"),", providing a basic ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/service-workers/#fetchevent"},"Request-Response")," service API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"addEventListener('fetch', event => {\n  event.respondWith(new Response('hello world'));\n});\n")),(0,a.kt)("p",null,"Aworker provides common Web APIs defined in ServiceWorkerGlobalScope, WorkerGlobalScope or WindowOrWorkerGlobalScope. Typically, this includes the following web APIs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/AbortController"},"AbortController")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal"},"AbortSignal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Console"},"Console")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Event"},"Event")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget"},"EventTarget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},"fetch")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Request"},"Request")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Response"},"Response")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder"},"TextEncoder")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder"},"TextDecoder")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/URL_API"},"URL"))),(0,a.kt)("h2",{id:"aworker-lifecycle"},"Aworker lifecycle"),(0,a.kt)("p",null,"Aworker will have the following events from loading user code initialization to starting to receive requests:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'install'"),": The first event received after the user code is fully loaded. The program can start loading the cache in this event."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'activate'"),": Represents that Aworker is ready to receive requests."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'fetch'"),": Represents a request event.")),(0,a.kt)("p",null,"There will be no events until the Worker instance is destroyed. It is usually guaranteed by the runtime that the Worker instance will be recycled after all requests have been responded to."),(0,a.kt)("p",null,"Aworker's events can be monitored through the Web EventTarget API, such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"addEventListener('install', event => {\n  // initializing cache...\n});\n")),(0,a.kt)("h3",{id:"event-install"},"Event: ",(0,a.kt)("inlineCode",{parentName:"h3"},"'install'")),(0,a.kt)("p",null,"MDN: ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/install_event"},"https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/install_event")),(0,a.kt)("p",null,"Parameters: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"event <",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent"},"ExtendableEvent"),">")),(0,a.kt)("p",null,"The first event received after the user code is fully loaded"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"addEventListner('install', event => {\n  event.waitUntil(Promise.all([\n    cacheReady('http://example.com'),\n  ]));\n});\n")),(0,a.kt)("h3",{id:"event-activate"},"Event: ",(0,a.kt)("inlineCode",{parentName:"h3"},"'activate'")),(0,a.kt)("p",null,"MDN: ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/activate_event"},"https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/activate_event")),(0,a.kt)("p",null,"Parameters: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"event <",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent"},"ExtendableEvent"),">")),(0,a.kt)("p",null,"Represents that the Worker instance is ready to receive requests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"addEventListner('activate', event => {\n  event.waitUntil(asyncOperation());\n});\n")),(0,a.kt)("h3",{id:"event-fetch"},"Event: ",(0,a.kt)("inlineCode",{parentName:"h3"},"'fetch'")),(0,a.kt)("p",null,"Parameters: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"event <",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent"},"FetchEvent"),">")),(0,a.kt)("p",null,"Represents a request event."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"addEventListener('fetch', event => {\n  event.respondWith(new Response('hello world'));\n});\n")))}d.isMDXComponent=!0}}]);