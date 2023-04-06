"use strict";(self.webpackChunknoslate_website=self.webpackChunknoslate_website||[]).push([[8138],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={},o="\u81ea\u5b9a\u4e49 Gateway",s={unversionedId:"noslate_workers/tutorials/custom_gateway",id:"noslate_workers/tutorials/custom_gateway",title:"\u81ea\u5b9a\u4e49 Gateway",description:"\u8ddf\u968f\u672c\u6559\u7a0b\uff0c\u6211\u4eec\u5c06\u5b9e\u73b0\u4e00\u4e2a\u57fa\u4e8e HTTP \u7684\u81ea\u5b9a\u4e49 Gateway \u6a21\u5757\uff0c\u901a\u8fc7\u76d1\u542c 9000 \u7aef\u53e3\uff0c\u5904\u7406\u8c03\u7528\u8bf7\u6c42\u3002",source:"@site/docs/noslate_workers/tutorials/custom_gateway.md",sourceDirName:"noslate_workers/tutorials",slug:"/noslate_workers/tutorials/custom_gateway",permalink:"/docs/noslate_workers/tutorials/custom_gateway",draft:!1,editUrl:"https://github.com/noslate-project/noslate/tree/main/site/docs/noslate_workers/tutorials/custom_gateway.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Gateway",permalink:"/docs/noslate_workers/references/gateway"},next:{title:"\u81ea\u5b9a\u4e49 Outbound \u670d\u52a1\u4ee3\u7406",permalink:"/docs/noslate_workers/tutorials/custom_outbound"}},i={},p=[{value:"\u914d\u7f6e\u5b58\u50a8",id:"\u914d\u7f6e\u5b58\u50a8",level:2},{value:"Gateway \u5b9e\u73b0",id:"gateway-\u5b9e\u73b0",level:2},{value:"Noslated Client",id:"noslated-client",level:3},{value:"\u8bfb\u53d6\u6570\u636e\u5e93\u914d\u7f6e\u5e76\u751f\u6548",id:"\u8bfb\u53d6\u6570\u636e\u5e93\u914d\u7f6e\u5e76\u751f\u6548",level:3},{value:"invokeHandler",id:"invokehandler",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u81ea\u5b9a\u4e49-gateway"},"\u81ea\u5b9a\u4e49 Gateway"),(0,a.kt)("p",null,"\u8ddf\u968f\u672c\u6559\u7a0b\uff0c\u6211\u4eec\u5c06\u5b9e\u73b0\u4e00\u4e2a\u57fa\u4e8e HTTP \u7684\u81ea\u5b9a\u4e49 Gateway \u6a21\u5757\uff0c\u901a\u8fc7\u76d1\u542c 9000 \u7aef\u53e3\uff0c\u5904\u7406\u8c03\u7528\u8bf7\u6c42\u3002"),(0,a.kt)("p",null,"\u672c\u6559\u7a0b\u4e2d\u6d89\u53ca\u7684\u4ee3\u7801\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/noslate-project/noslate/tree/main/examples/gateway"},"Custom Gateway")),(0,a.kt)("h2",{id:"\u914d\u7f6e\u5b58\u50a8"},"\u914d\u7f6e\u5b58\u50a8"),(0,a.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u4f53\u9a8c Gateway \u7684\u6548\u679c\uff0c\u6211\u4eec\u5f15\u5165 sqlite3 \u5c06 Noslated Workers \u7684\u51fd\u6570\u914d\u7f6e\u4fe1\u606f\u6301\u4e45\u5316\u5b58\u50a8\u3002"),(0,a.kt)("p",null,"\u521d\u59cb\u5316\u6570\u636e\u5e93\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="\u521b\u5efa gateway.db"',title:'"\u521b\u5efa','gateway.db"':!0},"sqlite3 gateway.db\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="\u521b\u5efa function_profile \u53ca service_profile \u6570\u636e\u8868"',title:'"\u521b\u5efa',function_profile:!0,"\u53ca":!0,service_profile:!0,'\u6570\u636e\u8868"':!0},"CREATE TABLE function_profile (\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\n  createdAt TEXT NOT NULL,\n  updatedAt TEXT NOT NULL,\n  name CHAR(50) NOT NULL,\n  codeInfo TEXT NOT NULL,\n  namespace CHAR(50),\n  workerConfig TEXT,\n  environments TEXT,\n  resourceLimit TEXT,\n  rateLimit TEXT\n);\n\nCREATE TABLE service_profile (\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\n  createdAt TEXT NOT NULL,\n  updatedAt TEXT NOT NULL,\n  name CHAR(50) NOT NULL,\n  type CHAR(50) NOT NULL,\n  selectors TEXT NOT NULL\n);\n")),(0,a.kt)("h2",{id:"gateway-\u5b9e\u73b0"},"Gateway \u5b9e\u73b0"),(0,a.kt)("p",null,"\u672c\u6559\u7a0b\u4e2d\u6211\u4eec\u9009\u62e9 ",(0,a.kt)("a",{parentName:"p",href:"https://expressjs.com/"},"Express")," \u4f5c\u4e3a Gateway \u7684\u670d\u52a1\u6846\u67b6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u719f\u7ec3\u7684 Web \u6846\u67b6\u6765\u66ff\u4ee3\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install express --save\n")),(0,a.kt)("p",null,"\u5728 Gateway \u4e2d\u6211\u4eec\u4f1a\u6d89\u53ca\u914d\u7f6e\u7684\u589e\u5220\u6539\u67e5\u4ee5\u53ca\u51fd\u6570\u7684\u8c03\u7528\uff0c\u56e0\u6b64\u4f1a\u63d0\u4f9b\u5982\u4e0b\u5982\u6709\u4f9b\u8bbf\u95ee\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Gateway \u8def\u7531"',title:'"Gateway','\u8def\u7531"':!0},"// \u51fd\u6570\u3001\u670d\u52a1\u8c03\u7528\napp.post('/invoke', this.invokeHandler);\n\n// \u65b0\u589e\u51fd\u6570\napp.post('/addFunction', this.addFunction);\n// \u65b0\u589e\u670d\u52a1\napp.post('/addService', this.addService);\n// \u67e5\u770b\u51fd\u6570\napp.get('/listFunction', this.listFunction);\n// \u67e5\u770b\u670d\u52a1\napp.get('/listService', this.listService);\n// \u79fb\u9664\u51fd\u6570\napp.post('/removeFunction', this.removeFunction);\n// \u79fb\u9664\u670d\u52a1\napp.post('/removeService', this.removeService);\n")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u4e3b\u8981\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"/invoke")," \u7684 invokeHandler \u5c55\u5f00\u8bb2\u89e3\uff0c\u5176\u4ed6\u7684\u589e\u5220\u6539\u67e5\u5b9e\u73b0\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://github.com/noslate-project/noslate/tree/main/examples/gateway"},"\u793a\u4f8b\u4ee3\u7801"),"\u6216\u8005\u6309\u7167\u81ea\u5df1\u7684\u9700\u6c42\u5b9e\u73b0\u3002"),(0,a.kt)("h3",{id:"noslated-client"},"Noslated Client"),(0,a.kt)("p",null,"Noslated Client \u8d1f\u8d23\u5c06 Noslated \u548c Gateway \u8fdb\u884c\u8fde\u63a5\uff0c\u901a\u8fc7\u5b83\u53ef\u4ee5\u5c06\u8bf7\u6c42\u8f6c\u53d1\u5230 Noslated Workers \u7cfb\u7edf\u4e2d\u6267\u884c\u3002\u56e0\u6b64\uff0c\u9700\u8981\u5148\u5c06\u5b83\u521d\u59cb\u5316\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u521d\u59cb\u5316 Noslated Client"',title:'"\u521d\u59cb\u5316',Noslated:!0,'Client"':!0},"const NoslatedClient = require(process.env.NOSLATE_PATH).NoslatedClient;\nthis.agent = new NoslatedClient();\n\nawait this.agent.start();\nawait this.updateFunctionProfiles();\nawait this.updateServiceProfiles();\n")),(0,a.kt)("h3",{id:"\u8bfb\u53d6\u6570\u636e\u5e93\u914d\u7f6e\u5e76\u751f\u6548"},"\u8bfb\u53d6\u6570\u636e\u5e93\u914d\u7f6e\u5e76\u751f\u6548"),(0,a.kt)("p",null,"\u6211\u4eec\u5c06\u51fd\u6570\u914d\u7f6e\u5b58\u50a8\u5728\u6570\u636e\u5e93\u4e2d\uff0c\u542f\u52a8\u65f6\u9700\u8981\u8bfb\u53d6\u51fa\u6765\u5e76\u8bbe\u7f6e\u5230 Noslated \u4e2d\u3002\u5c06\u914d\u7f6e\u8bfb\u53d6\u51fa\u6765\uff0c\u5e76\u8f6c\u6362\u6210\u6240\u9700\u683c\u5f0f\u540e\uff0c\u8c03\u7528 NoslatedClient \u63d0\u4f9b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"setFunctionProfile")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"setServiceProfile")," \u66f4\u65b0\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u683c\u5f0f\u53c2\u8003\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/noslate_workers/references/function_profile"},"Worker \u51fd\u6570\u914d\u7f6e")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/noslate_workers/references/service_profile"},"\u670d\u52a1\u8def\u7531\u914d\u7f6e"))),(0,a.kt)("p",null,"\u76ee\u524d Noslated \u6ca1\u6709\u5185\u7f6e\u914d\u7f6e\u7ba1\u7406\u80fd\u529b\uff0c\u5f53\u65b0\u914d\u7f6e\u5230\u6765\u65f6\uff0c\u4f1a\u548c\u4e4b\u524d\u7684\u914d\u7f6e\u5bf9\u6bd4\u5dee\u5f02\uff08\u5904\u7406\u5bb9\u5668\u53d8\u5316\uff09\uff0c\u5e76\u5168\u91cf\u8986\u76d6\uff0c\u6240\u4ee5\u6bcf\u6b21\u914d\u7f6e\u53d1\u751f\u53d8\u5316\u65f6\uff08\u5982\uff1a\u589e\u3001\u5220\u3001\u6539\uff09\u90fd\u9700\u8981\u91cd\u65b0\u8bbe\u7f6e\u751f\u6548\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u66f4\u65b0\u914d\u7f6e"',title:'"\u66f4\u65b0\u914d\u7f6e"'},"// \u66f4\u65b0 Worker \u51fd\u6570\u914d\u7f6e\nasync updateFunctionProfiles() {\n  let profiles = await FunctionProfile.findAll({\n    raw: true\n  });\n\n  profiles = profiles.map((profile) => {\n    return Object.assign({\n      name: profile.name,\n      namespace: profile.namespace,\n      worker: JSON.parse(profile.workerConfig),\n      resourceLimit: JSON.parse(profile.resourceLimit),\n      environments: JSON.parse(profile.environments),\n      rateLimit: JSON.parse(profile.rateLimit)\n    }, JSON.parse(profile.codeInfo));\n  });\n\n  await this.client.setFunctionProfile(profiles);\n}\n\n// \u66f4\u65b0\u670d\u52a1\u8def\u7531\u914d\u7f6e\nasync updateServiceProfiles() {\n  let profiles = await ServiceProfile.findAll({\n    raw: true\n  });\n\n  profiles = profiles.map((profile) => {\n    let item = {\n      name: profile.name,\n      type: profile.type\n    };\n\n    const selectors = JSON.parse(profile.selectors);\n\n    if (profile.type === 'default') {\n      item.selector = selectors[0].selector;\n    } else {\n      item.selectors = selectors;\n    }\n\n    return item;\n  });\n\n  await this.client.setServiceProfile(profiles);\n}\n")),(0,a.kt)("h3",{id:"invokehandler"},"invokeHandler"),(0,a.kt)("p",null,"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u7ea6\u5b9a\u901a\u8fc7 HTTP Headers \u91cc\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"x-noslated-dispatch")," \u6765\u8bc6\u522b\u8c03\u7528\u7684\u662f\u54ea\u4e2a\u670d\u52a1\u6216\u51fd\u6570\uff0c\u683c\u5f0f\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"(function|service):${name}"),"\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="curl \u8c03\u7528\u793a\u4f8b"',title:'"curl','\u8c03\u7528\u793a\u4f8b"':!0},"curl http://127.0.0.1:9000/invoke -X POST -H 'x-noslated-dispatch: service:A' -H 'x-noslated-request-id: 123'\ncurl http://127.0.0.1:9000/invoke -X POST -H 'x-noslated-dispatch: function:B' -H 'x-noslated-request-id: 456'\n")),(0,a.kt)("p",null,"\u53e6\u5916\uff0c\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"x-noslated-request-id")," \u6765\u8ddf\u8e2a\u8bf7\u6c42\u5728 Noslated \u7684\u6267\u884c\u60c5\u51b5\u3002"),(0,a.kt)("p",null,"NoslatedClient \u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"invoke")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"invokeService")," \u65b9\u6cd5\uff0c\u7528\u6765\u5904\u7406\u4e0d\u540c\u8c03\u7528\u7c7b\u578b\uff0c\u5177\u4f53\u7684\u65b9\u6cd5\u7b7e\u540d\u53ef\u4ee5\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://noslate-project.github.io/noslated/classes/NoslatedClient.html"},"API References"),"\u3002"),(0,a.kt)("p",null,"\u4e24\u4e2a\u65b9\u6cd5\u90fd\u63a5\u53d7\u6d41\u4e3a\u5165\u53c2\uff0c\u5e76\u8fd4\u56de\u6d41\u4f5c\u4e3a\u7ed3\u679c\uff0c\u56e0\u6b64\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://expressjs.com/en/4x/api.html#req"},"Request")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"https://expressjs.com/en/4x/api.html#res"},"Response")," \u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"\u8c03\u7528\u9700\u8981\u4f20\u5165\u7684 metadata\uff0c\u5176\u4e2d\u7684 method\u3001url\u3001headers \u5728\u51fd\u6570\u4e2d\u90fd\u53ef\u4ee5\u83b7\u53d6\u5230\uff0c\u7528\u6765\u8bc6\u522b\u8c03\u7528\u4fe1\u606f\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f headers \u7684\u4f20\u5165\u683c\u5f0f\u6bd4\u8f83\u7279\u6b8a\uff0c\u9700\u8981\u5c06 KeyValue \u7684 Map \u88c5\u6362\u6210 Array\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u8f6c\u6362\u793a\u4f8b"',title:'"\u8f6c\u6362\u793a\u4f8b"'},'// \u8f6c\u6362\u524d\n{\n  "user-agent": "xxx"\n}\n// \u8f6c\u6362\u540e\n[\n  ["user-agent", "xxx"]\n]\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="invokeHandler \u793a\u4f8b"',title:'"invokeHandler','\u793a\u4f8b"':!0},"async invoke(invokeTarget, req, res) {\n  const { type, alias } = invokeTarget;\n\n  const metadata = {\n    method: req.method,\n    url: req.url,\n    headers: objectToArray(req.headers),\n    requestId: req.headers['x-noslated-request-id'] || 'unknown'\n  };\n\n  try {\n    let response;\n\n    if (type === 'function') {\n      response = await this.client.invoke(alias, req, metadata);\n    } else if (type === 'service') {\n      response = await this.client.invokeService(alias, req, metadata);\n    } else {\n      res.status(500).send('invoke type not supported.');\n      return;\n    }\n\n    response.pipe(res);\n  } catch (error) {\n    res.status(500).send(error.message + '\\n');\n  }\n}\n")))}u.isMDXComponent=!0}}]);