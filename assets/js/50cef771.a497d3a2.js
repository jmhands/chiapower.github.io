"use strict";(self.webpackChunkchiapower=self.webpackChunkchiapower||[]).push([[9710],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},167:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:3},s="Full Node",c={unversionedId:"Hardware Resources/node",id:"Hardware Resources/node",title:"Full Node",description:"Full node. The full node in the Chia is the peer-to-peer protocol that contains actually syncing the blockchain. Chia uses Nakamoto consensus, which means the network is permissionless, decentralized, and follows a Poisson distribution for inter-blocktime arrival. The full node requirements are designed to be extremely low, since the proof of space verification is very lightweight. It is designed to run on low-power, low core-count commodity computing devices (e.g. cheap laptop, Raspberry pi4.) There is a small-capacity SSD requirement to house the database for the blockchain, which is not a problem since a 256GB is currently cheaper than the cheapest HDD [IDC, 2021]. Chia has profiled the blockchain database workload to not take up a considerable amount of storage space and fit on a mainstream SSD included in every laptop, desktop, or easily available in the global consumer SSD market which includes 360 million SSDs per year [IDC, 2021].",source:"@site/docs/Hardware Resources/node.md",sourceDirName:"Hardware Resources",slug:"/Hardware Resources/node",permalink:"/Hardware Resources/node",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Farming",permalink:"/Hardware Resources/farming"},next:{title:"Plotting",permalink:"/Hardware Resources/plotting"}},u={},p=[],d={toc:p};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"full-node"},"Full Node"),(0,o.kt)("p",null,"Full node. The full node in the Chia is the peer-to-peer protocol that contains actually syncing the blockchain. Chia uses Nakamoto consensus, which means the network is permissionless, decentralized, and follows a Poisson distribution for inter-blocktime arrival. The full node requirements are designed to be extremely low, since the proof of space verification is very lightweight. It is designed to run on low-power, low core-count commodity computing devices (e.g. cheap laptop, Raspberry pi4.) There is a small-capacity SSD requirement to house the database for the blockchain, which is not a problem since a 256GB is currently cheaper than the cheapest HDD ","[IDC, 2021]",". Chia has profiled the blockchain database workload to not take up a considerable amount of storage space and fit on a mainstream SSD included in every laptop, desktop, or easily available in the global consumer SSD market which includes 360 million SSDs per year ","[IDC, 2021]","."),(0,o.kt)("p",null,"Measured data"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Database size after 1827815 blocks (~13 months): 56.13GiB / 60.28 GB",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In 5 years database size will be 277GB at current compression, opportunity to reduce by another 20-30%"))),(0,o.kt)("li",{parentName:"ul"},"Database writes (sqlite) measured over normal transaction volume, blocks on average 30% full",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"472KiB/s database writes, 41.78 GB/day, 15.25 TB written per year"))),(0,o.kt)("li",{parentName:"ul"},"SSD selection & endurance",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"250GB low end consumer SSD ($25) has 150TBW, last 5 years"),(0,o.kt)("li",{parentName:"ul"},"500GB consumer SSD (~$40) has 300TBW, last 10 years")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt_text",src:r(7800).Z,title:"node",width:"1550",height:"1253"}),"\nFigure: Full Node Requirements"))}m.isMDXComponent=!0},7800:function(e,t,r){t.Z=r.p+"assets/images/node-dbfe06dcd75d2522d02939b8502ecae1.png"}}]);