"use strict";(self.webpackChunkchiapower=self.webpackChunkchiapower||[]).push([[295],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return t?n.createElement(h,i(i({ref:r},u),{},{components:t})):n.createElement(h,i({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},640:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={sidebar_position:1,id:"hardware",title:"Hardware Resources Required",description:"Chia Hardware",keywords:["Chia","Farming","Hardware","cryptocurrencies"]},s=void 0,l={unversionedId:"hardware-resources/hardware",id:"hardware-resources/hardware",title:"Hardware Resources Required",description:"Chia Hardware",source:"@site/docs/hardware-resources/hw.md",sourceDirName:"hardware-resources",slug:"/hardware-resources/hardware",permalink:"/hardware-resources/hardware",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"hardware",title:"Hardware Resources Required",description:"Chia Hardware",keywords:["Chia","Farming","Hardware","cryptocurrencies"]},sidebar:"defaultSidebar",previous:{title:"Hardware Requirements",permalink:"/category/hardware-requirements"},next:{title:"Chia Farming",permalink:"/hardware-resources/Farming"}},u={},d=[],p={toc:d};function f(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A participant can join the network with as little as one plot, which the minimum size for Chia is k=32, or 101.3GiB/108.8GB. Farmers with a small amount of capacity, and therefore an extremely low chance to win a block reward, will most often choose to join a pool. "),(0,o.kt)("p",null,"In Chia the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.chia.net/docs/11pooling/pooling"},"pooling protocol")," is all done on-chain and the farmers still create the blocks, which maintains decentralization. The only resources required to start are enough free space for a single plot and database and a computer to host the full node software. There is optional farming software from 3rd parties that the consumer only runs a light client, running either only the harvester or the harvester and the farmer and connecting to a remote full node. This eliminates the requirements to run a full node, but most farmers are still running a full node due to the low requirements and independence and decentralization benefit. This is also the default mode in the official Chia wallet and farming desktop application."))}f.isMDXComponent=!0}}]);