"use strict";(self.webpackChunkchiapower=self.webpackChunkchiapower||[]).push([[2283],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=o,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},340:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={slug:"blog",title:"Chiapower v2 update",authors:["jm"],tags:["Chiapower"],date:"2021-07-21T10:00"},c=void 0,l={permalink:"/blog/blog",source:"@site/blog/v2update.mdx",title:"Chiapower v2 update",description:"Rev 2.0 Changelog",date:"2021-07-21T10:00:00.000Z",formattedDate:"July 21, 2021",tags:[{label:"Chiapower",permalink:"/blog/tags/chiapower"}],readingTime:2.205,truncated:!1,authors:[{name:"Jonmichael Hands",title:"VP Storage",url:"https://chia.net",imageURL:"https://www.chia.net/img/headshots/jonmichael-hands_@2x.png",key:"jm"}],frontMatter:{slug:"blog",title:"Chiapower v2 update",authors:["jm"],tags:["Chiapower"],date:"2021-07-21T10:00"},prevItem:{title:"Chiapower redesign",permalink:"/blog/redesign"}},p={authorsImageUrls:[void 0]},u=[],h={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rev 2.0 Changelog"),(0,a.kt)("p",null,"More than 3 months of observed Netspace growth and observations\nInitial growth (phase 1) of the Chia network was dominated by newly purchased high capacity 3.5in nearline HDDs, by early adopter farmers (Source: IDC, Seagate, WD). Avg capacity could be as high as 15TB\nPhase 2 of growth will be dominated by smaller farmers, pools, coming mostly from underutilized storage (Source: IDC)\nInclude 6 & 8TB into low cap avg range for power consumption\nIntegrate plotting power into energy consumption by assuming the life of a plot and amortizing the energy used to create it over the lifetime of the plot. Use real measured data and power consumption of chia community plotters to get a range for power consumption\nAdd annual energy in TWh, compare vs BTC & ETH using digiconimist (cbeci still great but recent China policy changes not reflected in annual consumption avg)\nThis is a link to a working model (includes legacy calculations and estimates in other tabs)"),(0,a.kt)("p",null,"The original model estimated Netspace growth based on the initial estimate, growth rate, and total storage market size for the upper limit of growth. The Chia team reviewed a very early version in a community Zoom call: Farming and Electricity Usage in Chia.\nThe Chiapower 2.0 model takes more than 3 months of observed Netspace growth, industry analyst reports, and first-hand reporting directly from the HDD vendors on the capacity mix and increased demand for HDDs attributed to Chia. The total power consumption on the Chia network can be estimated by taking the total Netspace (similar to hashing power in bitcoin) and modeling the power consumption of the storage devices (farming) and the energy consumed to create the data (plotting). This is a similar methodology to the Cambridge Bitcoin Electricity Consumption Index, where most likely mining hardware is known, and electricity cost is estimated, and the total power consumption of the bitcoin network is estimated using a low and high estimate of reference mining hardware. Estimating a mix of common reference hardware farmers using hard disk drives (HDDs) and solid state drives (SSDs) by what is economical for Chia farming will depend on the capital expenditures of the hardware (CapEx) and operational expenditures for power, cooling, networking, and data center efficiency. Storage power efficiency is measured in TB/W which includes the overhead of the supporting hardware infrastructure to host the storage devices, but the largest upfront cost in Chia farming is the cost of the storage devices themselves. The Chia network also consumes energy during the plotting process, wherein the cryptographic data is generated prior to being able to farm for the proof of space and time."))}d.isMDXComponent=!0}}]);