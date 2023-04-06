"use strict";(self.webpackChunknoslate_website=self.webpackChunknoslate_website||[]).push([[2753],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(k,s(s({ref:e},p),{},{components:n})):a.createElement(k,s({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:r,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},s="\u81ea\u5b9a\u4e49 Outbound \u670d\u52a1\u4ee3\u7406",l={unversionedId:"noslate_workers/tutorials/custom_outbound",id:"noslate_workers/tutorials/custom_outbound",title:"\u81ea\u5b9a\u4e49 Outbound \u670d\u52a1\u4ee3\u7406",description:"Aworker \u4f5c\u4e3a Web-interoperable \u8fd0\u884c\u65f6\uff0c\u9664\u4e86\u80fd\u591f\u901a\u8fc7 Fetch API \u8bbf\u95ee HTTP \u8d44\u6e90\u5916\uff0c\u5176\u4ed6\u7684 RPC \u8c03\u7528\u7c7b\u578b\u81ea\u8eab\u662f\u4e0d\u652f\u6301\u7684\u3002\u56e0\u6b64\uff0c\u5728 Data Plane \u4fa7\u63d0\u4f9b\u4e86\u6269\u5c55 Outbound \u670d\u52a1\u4ee3\u7406\u7684\u673a\u5236\uff0c\u672c\u6559\u7a0b\u4ee5\u67e5\u8be2\u6570\u636e\u5e93\u4e3a\u4f8b\uff0c\u4e00\u6b65\u6b65\u5b9e\u73b0\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684 Outbound \u670d\u52a1\u4ee3\u7406\u3002",source:"@site/docs/noslate_workers/tutorials/custom_outbound.md",sourceDirName:"noslate_workers/tutorials",slug:"/noslate_workers/tutorials/custom_outbound",permalink:"/docs/noslate_workers/tutorials/custom_outbound",draft:!1,editUrl:"https://github.com/noslate-project/noslate/tree/main/site/docs/noslate_workers/tutorials/custom_outbound.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"\u81ea\u5b9a\u4e49 Gateway",permalink:"/docs/noslate_workers/tutorials/custom_gateway"},next:{title:"\u5982\u4f55\u542f\u52a8 Noslate Workers",permalink:"/docs/noslate_workers/tutorials/start_noslate_workers"}},i={},u=[{value:"\u52a0\u8f7d\u81ea\u5b9a\u4e49 Outbound \u670d\u52a1\u4ee3\u7406",id:"\u52a0\u8f7d\u81ea\u5b9a\u4e49-outbound-\u670d\u52a1\u4ee3\u7406",level:2},{value:"\u51fd\u6570\u4f7f\u7528",id:"\u51fd\u6570\u4f7f\u7528",level:2}],p={toc:u};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u81ea\u5b9a\u4e49-outbound-\u670d\u52a1\u4ee3\u7406"},"\u81ea\u5b9a\u4e49 Outbound \u670d\u52a1\u4ee3\u7406"),(0,r.kt)("p",null,"Aworker \u4f5c\u4e3a Web-interoperable \u8fd0\u884c\u65f6\uff0c\u9664\u4e86\u80fd\u591f\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"Fetch API")," \u8bbf\u95ee HTTP \u8d44\u6e90\u5916\uff0c\u5176\u4ed6\u7684 RPC \u8c03\u7528\u7c7b\u578b\u81ea\u8eab\u662f\u4e0d\u652f\u6301\u7684\u3002\u56e0\u6b64\uff0c\u5728 Data Plane \u4fa7\u63d0\u4f9b\u4e86\u6269\u5c55 ",(0,r.kt)("a",{parentName:"p",href:"/docs/noslate_workers/references/outbound"},"Outbound \u670d\u52a1\u4ee3\u7406"),"\u7684\u673a\u5236\uff0c\u672c\u6559\u7a0b\u4ee5\u67e5\u8be2\u6570\u636e\u5e93\u4e3a\u4f8b\uff0c\u4e00\u6b65\u6b65\u5b9e\u73b0\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684 Outbound \u670d\u52a1\u4ee3\u7406\u3002"),(0,r.kt)("p",null,"\u5b9e\u4f8b\u4ee3\u7801\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/noslate-project/noslate/tree/main/examples/outbound"},"Outbound \u670d\u52a1\u4ee3\u7406\u793a\u4f8b")," \u67e5\u770b\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u8bbe\u60f3\u4e24\u4e2a\u573a\u666f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u540d\u79f0\u6a21\u7cca\u641c\u7d22\u5546\u54c1\uff08findByName\uff09"),(0,r.kt)("li",{parentName:"ol"},"\u67e5\u8be2\u5e93\u5b58\u5728\u67d0\u4e2a\u6c34\u4f4d\u7ebf\u4e0a\u7684\u5546\u54c1\uff08listStock\uff09")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="\u65b9\u6cd5\u5b9a\u4e49"',title:'"\u65b9\u6cd5\u5b9a\u4e49"'},"findByName(name: string): Promise<Product[]>;\nlistStock(page: number, pageSize: number, count: number): Promise<Product[]>;\n")),(0,r.kt)("p",null,"\u56e0\u6b64\u6211\u4eec\u9700\u8981\u5728 Outbound \u4ee3\u7406\u4e2d\u652f\u6301 findByName \u548c listStock \u4e24\u4e2a\u8c03\u7528\u3002\u56e0\u4e3a findByName \u53ea\u6709\u4e00\u4e2a\u53c2\u6570\uff0c\u6211\u4eec\u9009\u62e9\u7528 invoke \u8c03\u7528\u6765\u5b9e\u73b0\uff0c\u800c listStock \u5219\u901a\u8fc7 binding \u8c03\u7528\u6765\u5b9e\u73b0\u3002\u5b9e\u9645\u4f7f\u7528\u65f6\u53ef\u4ee5\u6309\u7167\u4f60\u7684\u9700\u8981\u6765\u8bbe\u8ba1\uff0c\u53ef\u4ee5\u53ea\u4f7f\u7528\u4e00\u79cd\u5f62\u5f0f\uff0c\u4e5f\u53ef\u4ee5\u4e24\u79cd\u90fd\u4f7f\u7528\uff0c\u8fd9\u91cc\u4ec5\u7528\u6765\u5c55\u793a\u4e24\u4e2a\u5b9e\u73b0\u65b9\u5f0f\u3002"),(0,r.kt)("p",null,"invoke \u8c03\u7528\u63a5\u53d7\u4e09\u4e2a\u53c2\u6570\uff0cappId\uff0cmethodName\uff0cdata\u3002\u524d\u4e24\u8005\u4e3a string \u7c7b\u578b\uff0c\u7528\u6765\u8bc6\u522b\u5177\u4f53\u8c03\u7528\uff0cdata \u5219\u4e3a Buffer \u7c7b\u578b\uff0c\u627f\u8f7d\u8c03\u7528\u6570\u636e\u3002"),(0,r.kt)("p",null,"binding \u8c03\u7528\u63a5\u53d7\u56db\u4e2a\u53c2\u6570\uff0cname\uff0cmetadata\uff0coperation\uff0cdata\u3002name \u548c operation \u4e3a string \u7c7b\u578b\uff0c\u7528\u6765\u8bc6\u522b\u5177\u4f53\u8c03\u7528\uff1bmetadata \u5219\u7528\u4e8e\u4f20\u9012\u8c03\u7528\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u5982 listStock \u4e2d\u7684 page \u548c pageSize\u3002data \u540c\u4e0a\uff0c\u4e3a Buffer \u7c7b\u578b\uff0c\u627f\u8f7d\u8c03\u7528\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u4e24\u8005\u7684\u8fd4\u56de\u5747\u4e3a\u7edf\u4e00\u7684\u7ed3\u6784\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="\u7c7b\u578b\u5b9a\u4e49"',title:'"\u7c7b\u578b\u5b9a\u4e49"'},"interface DaprResponse {\n  status: number;\n  data: Buffer;\n}\n")),(0,r.kt)("p",null,"\u63a5\u6536\u65b9\u53ef\u4ee5\u901a\u8fc7 status \u6765\u5224\u65ad\u662f\u5426\u6267\u884c\u6210\u529f\uff0c\u4e00\u822c\u6211\u4eec\u4f1a\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"},"HTTP response status codes")," \u6765\u8bbe\u8ba1\u5bf9\u5e94\u7684\u503c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u793a\u4f8b"',title:'"\u793a\u4f8b"'},"async invoke(options) {\n  const { appId, methodName, data } = options;\n\n  if (appId !== 'sqlite') {\n    return {\n      status: 404,\n      data: `appId: ${appId} not support`\n    };\n  }\n\n  if (methodName !== 'findByName') {\n    return {\n      status: 404,\n      data: `methodName: ${methodName} not support`\n    };\n  }\n\n  return this.findByName(data.toString());\n}\n\nasync binding(options) {\n  const { name, metadata, operation, data } = options;\n\n  if (name !== 'sqlite') {\n    return {\n      status: 404,\n      data: `${name} not support`\n    };\n  }\n\n  if (operation !== 'listStock') {\n    return {\n      status: 404,\n      data: `operation: ${operation} not support`\n    }\n  }\n\n  return this.listStock(metadata.page, metadata.pageSize, data.toString());\n}\n")),(0,r.kt)("h2",{id:"\u52a0\u8f7d\u81ea\u5b9a\u4e49-outbound-\u670d\u52a1\u4ee3\u7406"},"\u52a0\u8f7d\u81ea\u5b9a\u4e49 Outbound \u670d\u52a1\u4ee3\u7406"),(0,r.kt)("p",null,"\u5bfc\u51fa\u6a21\u5757\u65f6\u8981\u6ce8\u610f\u4f7f\u7528 CommonJS \u683c\u5f0f\uff0c\u4e0d\u7136\u53ef\u80fd\u4f1a\u65e0\u6cd5\u52a0\u8f7d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = class OutboundProxy {\n  // Data Plane \u4f1a\u6ce8\u5165 Logger \u7528\u6765\u8f93\u51fa\u65e5\u5fd7\n  constructor({ logger }) {}\n}\n")),(0,r.kt)("p",null,"\u6211\u4eec\u5728 NoslatedClient \u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u4ee5\u8bbe\u7f6e Outbound \u670d\u52a1\u4ee3\u7406\u6a21\u5757\u7684\u5f15\u7528\u8def\u5f84\uff0c\u4e4b\u540e\u4f1a\u5728 Data Plane \u4e2d\u6839\u636e\u8be5\u6a21\u5757\u521b\u5efa\u4ee3\u7406\u5b9e\u4f8b\u3002\u56e0\u4e3a\u6d89\u53ca\u8de8\u8fdb\u7a0b\u901a\u4fe1\uff0c\u6240\u4ee5\u53ea\u80fd\u4f20\u9012\u6587\u672c\u5f62\u5f0f\u7684\u5f15\u7528\u8def\u5f84\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await client.setDaprAdaptor(${OutboundModulePath});\n")),(0,r.kt)("h2",{id:"\u51fd\u6570\u4f7f\u7528"},"\u51fd\u6570\u4f7f\u7528"),(0,r.kt)("p",null,"Aworker \u51fd\u6570\u53ef\u4ee5\u901a\u8fc7\u5168\u5c40\u53d8\u91cf aworker \u83b7\u53d6\u5230\u8c03\u7528\u4ee3\u7406\u7684\u65b9\u6cd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u793a\u4f8b"',title:'"\u793a\u4f8b"'},"const dapr = aworker.Dapr['1.0'];\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="invoke \u8c03\u7528"',title:'"invoke','\u8c03\u7528"':!0},"const response = await dapr.invoke({\n  app: 'sqlite',\n  method: 'findByName',\n  body: 'Sugar',\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="binding \u8c03\u7528"',title:'"binding','\u8c03\u7528"':!0},"const response = await dapr.binding({\n  name: 'sqlite',\n  metadata: {\n    page: 1,\n    pageSize: 10\n  },\n  operation: 'listStock',\n  body: '50',\n});\n")))}c.isMDXComponent=!0}}]);