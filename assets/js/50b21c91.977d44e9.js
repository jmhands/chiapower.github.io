"use strict";(self.webpackChunkchiapower=self.webpackChunkchiapower||[]).push([[2283],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(r),m=a,u=h["".concat(c,".").concat(m)]||h[m]||d[m]||o;return r?n.createElement(u,i(i({ref:t},p),{},{components:r})):n.createElement(u,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},340:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={slug:"blog",title:"Chiapower v2 update",authors:["jm"],tags:["Chiapower"],date:"2021-07-21T10:00"},i=void 0,s={permalink:"/blog/blog",source:"@site/blog/v2update.mdx",title:"Chiapower v2 update",description:"Rev 2.0 Changelog",date:"2021-07-21T10:00:00.000Z",formattedDate:"July 21, 2021",tags:[{label:"Chiapower",permalink:"/blog/tags/chiapower"}],readingTime:2.205,hasTruncateMarker:!1,authors:[{name:"Jonmichael Hands",title:"VP Storage",url:"https://chia.net",imageURL:"https://www.chia.net/wp-content/uploads/2022/06/jonmichael-hands_@2x.png?w=684",key:"jm"}],frontMatter:{slug:"blog",title:"Chiapower v2 update",authors:["jm"],tags:["Chiapower"],date:"2021-07-21T10:00"},prevItem:{title:"Chiapower redesign",permalink:"/blog/redesign"}},c={authorsImageUrls:[void 0]},l=[],p={toc:l},h="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rev 2.0 Changelog"),(0,a.kt)("p",null,"More than 3 months of observed Netspace growth and observations\nInitial growth (phase 1) of the Chia network was dominated by newly purchased high capacity 3.5in nearline HDDs, by early adopter farmers (Source: IDC, Seagate, WD). Avg capacity could be as high as 15TB\nPhase 2 of growth will be dominated by smaller farmers, pools, coming mostly from underutilized storage (Source: IDC)\nInclude 6 & 8TB into low cap avg range for power consumption\nIntegrate plotting power into energy consumption by assuming the life of a plot and amortizing the energy used to create it over the lifetime of the plot. Use real measured data and power consumption of chia community plotters to get a range for power consumption\nAdd annual energy in TWh, compare vs BTC & ETH using digiconimist (cbeci still great but recent China policy changes not reflected in annual consumption avg)\nThis is a link to a working model (includes legacy calculations and estimates in other tabs)"),(0,a.kt)("p",null,"The original model estimated Netspace growth based on the initial estimate, growth rate, and total storage market size for the upper limit of growth. The Chia team reviewed a very early version in a community Zoom call: Farming and Electricity Usage in Chia.\nThe Chiapower 2.0 model takes more than 3 months of observed Netspace growth, industry analyst reports, and first-hand reporting directly from the HDD vendors on the capacity mix and increased demand for HDDs attributed to Chia. The total power consumption on the Chia network can be estimated by taking the total Netspace (similar to hashing power in bitcoin) and modeling the power consumption of the storage devices (farming) and the energy consumed to create the data (plotting). This is a similar methodology to the Cambridge Bitcoin Electricity Consumption Index, where most likely mining hardware is known, and electricity cost is estimated, and the total power consumption of the bitcoin network is estimated using a low and high estimate of reference mining hardware. Estimating a mix of common reference hardware farmers using hard disk drives (HDDs) and solid state drives (SSDs) by what is economical for Chia farming will depend on the capital expenditures of the hardware (CapEx) and operational expenditures for power, cooling, networking, and data center efficiency. Storage power efficiency is measured in TB/W which includes the overhead of the supporting hardware infrastructure to host the storage devices, but the largest upfront cost in Chia farming is the cost of the storage devices themselves. The Chia network also consumes energy during the plotting process, wherein the cryptographic data is generated prior to being able to farm for the proof of space and time."))}d.isMDXComponent=!0}}]);