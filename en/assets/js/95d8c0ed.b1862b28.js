"use strict";(self.webpackChunknoslate_website=self.webpackChunknoslate_website||[]).push([[5981],{3905:(e,n,r)=>{r.d(n,{Zo:()=>o,kt:()=>p});var c=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,c)}return r}function f(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function x(e,n){if(null==e)return{};var r,c,t=function(e,n){if(null==e)return{};var r,c,t={},a=Object.keys(e);for(c=0;c<a.length;c++)r=a[c],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)r=a[c],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var d=c.createContext({}),l=function(e){var n=c.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):f(f({},n),e)),r},o=function(e){var n=l(e.components);return c.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return c.createElement(c.Fragment,{},n)}},i=c.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,d=e.parentName,o=x(e,["components","mdxType","originalType","parentName"]),i=l(r),p=t,s=i["".concat(d,".").concat(p)]||i[p]||m[p]||a;return r?c.createElement(s,f(f({ref:n},o),{},{components:r})):c.createElement(s,f({ref:n},o))}));function p(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,f=new Array(a);f[0]=i;var x={};for(var d in n)hasOwnProperty.call(n,d)&&(x[d]=n[d]);x.originalType=e,x.mdxType="string"==typeof e?e:t,f[1]=x;for(var l=2;l<a;l++)f[l]=r[l];return c.createElement.apply(null,f)}return c.createElement.apply(null,r)}i.displayName="MDXCreateElement"},1748:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>f,default:()=>m,frontMatter:()=>a,metadata:()=>x,toc:()=>l});var c=r(7462),t=(r(7294),r(3905));const a={},f="mm command",x={unversionedId:"debugger/andb/mm",id:"debugger/andb/mm",title:"mm command",description:"mm map / list",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/debugger/andb/mm.md",sourceDirName:"debugger/andb",slug:"/debugger/andb/mm",permalink:"/en/docs/debugger/andb/mm",draft:!1,editUrl:"https://github.com/noslate-project/noslate/tree/main/site/docs/debugger/andb/mm.md",tags:[],version:"current",frontMatter:{},sidebar:"debugger",previous:{title:"heap command",permalink:"/en/docs/debugger/andb/heap"},next:{title:"Arthur",permalink:"/en/docs/debugger/arthur/intro"}},d={},l=[{value:"mm map / list",id:"mm-map--list",level:2},{value:"mm find",id:"mm-find",level:2},{value:"mm arena",id:"mm-arena",level:2},{value:"mm walk",id:"mm-walk",level:2}],o={toc:l};function m(e){let{components:n,...r}=e;return(0,t.kt)("wrapper",(0,c.Z)({},o,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"mm-command"},"mm command"),(0,t.kt)("h2",{id:"mm-map--list"},"mm map / list"),(0,t.kt)("p",null,"Similar to /proc/","[pid]","/maps provides memory loading"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"mm map"),(0,t.kt)("li",{parentName:"ul"},"mm list")),(0,t.kt)("p",null,"The difference between ",(0,t.kt)("inlineCode",{parentName:"p"},"mm map")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"mm list")," is that ",(0,t.kt)("inlineCode",{parentName:"p"},"mm list")," sorts the results by size."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"gdb) mm map\n 0x400270-0x40028c .interp r-- 28\n 0x40028c-0x4002ac .note.ABI-tag r-- 32\n 0x4002ac-0x4002d0 .note.gnu.build-id r-- 36\n 0x4002d0-0x46724c .gnu.hash r-- 421756\n 0x467250-0x5b3db8 .dynsym r-- 1362792\n 0x5b3db8-0x956fc7 .dynstr r-- 3813903\n 0x956fc8-0x972b66 .gnu.version r-- 113566\n 0x972b68-0x972d98 .gnu.version_r r-- 560\n 0x972d98-0x973200 .rela.dyn r-- 1128\n 0x973200-0x976218 .rela.plt r-- 12312\n 0x976218-0x976237 .init r-x 31\n 0x976240-0x978260 .plt r-x 8224\n 0x978260-0x978270 .plt.got r-x 16\n 0x97a000-0x1e857fc .text r-x 22067196\n 0x2000000-0x2000191 lpstub r-x 401\n 0x2000194-0x200019d .fini r-x 9\n 0x20001c0-0x434c740 .rodata r-- 37012864\n 0x434c740-0x43b581c .eh_frame_hdr r-- 430300\n 0x43b5820-0x45e6664 .eh_frame r-- 2297412\n 0x45e6664-0x45e6872 .gcc_except_table r-- 526\n 0x47e75b0-0x47e75c8 .tbss --- 24\n 0x47e75b0-0x47e8710 .init_array rw- 4448\n 0x47e8710-0x47e8720 .fini_array rw- 16\n 0x47e8720-0x47e8d00 .data.rel.ro rw- 1504\n 0x47e8d00-0x47e8f50 .dynamic rw- 592\n 0x47e8f50-0x47e9ff8 .got rw- 4264\n 0x47ea000-0x47fbad8 .data rw- 72408\n 0x47fbae0-0x4a245f8 .bss --- 2263832\n 0x400000-0x500000 load1a r-x 1048576\n 0x500000-0x45e7000 load1b --- 68055040\n ...\n 0x7fc7cc2c8000-0x7fc7cc2c9000 load65b --- 4096\n 0x7fc7cc4c8000-0x7fc7cc5bd000 load66 r-- 1003520\n 0x7fc7cc4c9000-0x7fc7cc5bd000 load67 rw- 999424\n 0x7fc7cc4ca000-0x7fc7cc5bd000 load68 r-x 995328\n 0x7fc7cc7b2000-0x7fc7cc7d6000 load69 r-- 147456\n 0x7fc7cc7ba000-0x7fc7cc7d6000 load70 rw- 114688\n 0x7fc7cc7bc000-0x7fc7cc7d6000 load71 rw- 106496\n 0x7fc7cc7d1000-0x7fc7cc7d6000 load72 r-x 20480\n 0x7fc7cc9d3000-0x7fc7cc9f7000 load73 r-- 147456\n 0x7fc7cc9d4000-0x7fc7cc9f7000 load74 rw- 143360\n 0x7fc7cc9d5000-0x7fc7cc9f7000 load75 r-x 139264\n 0x7fc7ccbdb000-0x7fc7ccbea000 load76 rw- 61440\n 0x7fc7ccbe0000-0x7fc7ccbea000 load77 rw- 40960\n 0x7fc7ccbed000-0x7fc7ccbf9000 load78 rw- 49152\n 0x7fc7ccbf6000-0x7fc7ccbf9000 load79 r-- 12288\n 0x7fc7ccbf7000-0x7fc7ccbf9000 load80 rw- 8192\n 0x7fc7ccbf8000-0x7fc7ccbf9000 load81 rw- 4096\n 0x7ffff2f02000-0x7ffff2f24000 load82 rw- 139264\n 0x7ffff2f75000-0x7ffff2f78000 load83 --- 12288\n 0x7ffff2f78000-0x7ffff2f7a000 load84 r-x 8192\n")),(0,t.kt)("h2",{id:"mm-find"},"mm find"),(0,t.kt)("p",null,"Find the specified data in memory."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"mm find ","[address]")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"(gdb) p $isolate->heap_.code_space_\n$2 = (class v8::internal::CodeSpace *) 0x60274a0\n(gdb) mm find 0x60274a0\n0x5f9d2c0\n0x5f9d308\n0x2a3fd0200058\n0x2a3fd0240058\n0x2a3fd0240058\n0x2a3fd0240058\nFound 6\n")),(0,t.kt)("h2",{id:"mm-arena"},"mm arena"),(0,t.kt)("p",null,"Displays arena information for ptmalloc."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"(gdb) p &main_arena\n$1 = (malloc_state *) 0x7fc7cbd8f760 <main_arena>\n(gdb) mm arena 0x7fc7cbd8f760\n0x6175070, 0x7fc7ac000020\n0x7fc7cbd8f760: 0x6175070 2318336 (2654208)\n0x7fc7ac000020: 0x7fc7ac008030 167936 (950272)\n0x7fc7a8000020: 0x7fc7a8005160 135168 (561152)\n0x7fc7b0000020: 0x7fc7b00008b0 135168 (135168)\n0x7fc7b4000020: 0x7fc7b40093c0 139264 (139264)\n0x7fc7c0000020: 0x7fc7c0004690 139264 (139264)\n0x7fc7bc000020: 0x7fc7bc000dd0 135168 (135168)\n0x7fc7c4000020: 0x7fc7c4000990 135168 (135168)\n")),(0,t.kt)("h2",{id:"mm-walk"},"mm walk"),(0,t.kt)("p",null,"\u904d\u5386 malloc_chTraverse malloc_chunk to display size and inuse information.unk\uff0c\u663e\u793a\u5927\u5c0f\u53ca inuse \u4fe1\u606f\u3002"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"mm walk ","[start_address][end_address]"," ","[show_only_inuse]")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"(gdb) mm walk 0x5f60000 0x6196000 1\n0x5f60000 :  32\n0x5f60020 :  48\n0x5f60050 :  192\n0x5f60110 :  192\n0x5f601d0 :  48\n0x5f60200 :  48\n0x5f60230 :  64\n0x5f60270 :  48\n0x5f602a0 :  48\n0x5f602d0 :  48\n0x5f60300 :  48\n0x5f60330 :  48\n0x5f60360 :  48\n0x5f60390 :  48\n0x5f603c0 :  48\n0x5f603f0 :  48\n0x5f60420 :  48\n0x5f60450 :  48\n0x5f60480 :  48\n0x5f604b0 :  48\n...\n0x6148d50 :  4112\n0x6149d60 :  65552\n0x6159d70 :  20848\n0x6169c80 :  208\n0x6169d50 :  48\n0x6169d80 :  48\n0x6169dd0 :  4112\n0x616ade0 :  4112\n0x616bdf0 :  4112\n0x6170170 :  544\n0x61704d0 :  96\n0x6170530 :  32\n0x6170550 :  32\n0x61725c0 :  48\n0x61725f0 :  48\n0x6172620 :  48\n0x6174fb0 :  32\n0x6174fd0 :  80\n0x6175020 :  80\ntotal 2318336, inuse(2032336), freed(150944)\n")))}m.isMDXComponent=!0}}]);