"use strict";(self.webpackChunkchiapower=self.webpackChunkchiapower||[]).push([[1542],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2681:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:3,title:"Full Node"},i=void 0,s={unversionedId:"hardware-resources/node",id:"hardware-resources/node",title:"Full Node",description:"Full node. The full node in the Chia is the peer-to-peer protocol that contains actually syncing the blockchain. Chia uses Nakamoto consensus, which means the network is permissionless, decentralized, and follows a Poisson distribution for inter-blocktime arrival. The full node requirements are designed to be extremely low, since the proof of space verification is very lightweight. It is designed to run on low-power, low core-count commodity computing devices (e.g. cheap laptop, Raspberry pi4.) There is a small-capacity SSD requirement to house the database for the blockchain, which is not a problem since a 256GB is currently cheaper than the cheapest HDD [IDC, 2021]. Chia has profiled the blockchain database workload to not take up a considerable amount of storage space and fit on a mainstream SSD included in every laptop, desktop, or easily available in the global consumer SSD market which includes 360 million SSDs per year [IDC, 2021].",source:"@site/docs/hardware-resources/node.md",sourceDirName:"hardware-resources",slug:"/hardware-resources/node",permalink:"/hardware-resources/node",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Full Node"},sidebar:"defaultSidebar",previous:{title:"Chia Farming",permalink:"/hardware-resources/Farming"},next:{title:"Plotting",permalink:"/hardware-resources/plotting"}},l={},c=[{value:"Measured data",id:"measured-data",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Full node. The full node in the Chia is the peer-to-peer protocol that contains actually syncing the blockchain. Chia uses Nakamoto consensus, which means the network is permissionless, decentralized, and follows a Poisson distribution for inter-blocktime arrival. The full node requirements are designed to be extremely low, since the proof of space verification is very lightweight. It is designed to run on low-power, low core-count commodity computing devices (e.g. cheap laptop, Raspberry pi4.) There is a small-capacity SSD requirement to house the database for the blockchain, which is not a problem since a 256GB is currently cheaper than the cheapest HDD [",(0,n.kt)("a",{parentName:"p",href:"https://www.idc.com/getdoc.jsp?containerId=US46412021"},"IDC, 2021"),"]. Chia has profiled the blockchain database workload to not take up a considerable amount of storage space and fit on a mainstream SSD included in every laptop, desktop, or easily available in the global consumer SSD market which includes 360 million SSDs per year [",(0,n.kt)("a",{parentName:"p",href:"https://www.idc.com/getdoc.jsp?containerId=US46412021"},"IDC, 2021"),"]."),(0,n.kt)("h2",{id:"measured-data"},"Measured data"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Database size after 1827815 blocks (~13 months): 56.13GiB / 60.28 GB",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"In 5 years database size will be 277GB at current compression, opportunity to reduce by another 20-30%"))),(0,n.kt)("li",{parentName:"ul"},"Database writes (sqlite) measured over normal transaction volume, blocks on average 30% full",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"472KiB/s database writes, 41.78 GB/day, 15.25 TB written per year"))),(0,n.kt)("li",{parentName:"ul"},"SSD selection & endurance",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"250GB low end consumer SSD ($25) has 150TBW, last 5 years"),(0,n.kt)("li",{parentName:"ul"},"500GB consumer SSD (~$40) has 300TBW, last 10 years")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:r(4009).Z,title:"node",width:"1550",height:"1253"}),"\nFigure: Full Node Requirements"))}d.isMDXComponent=!0},4009:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/node-dbfe06dcd75d2522d02939b8502ecae1.png"}}]);