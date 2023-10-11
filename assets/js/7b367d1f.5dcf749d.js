"use strict";(self.webpackChunkchiapower=self.webpackChunkchiapower||[]).push([[1475],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(t),u=n,d=m["".concat(s,".").concat(u)]||m[u]||f[u]||i;return t?a.createElement(d,o(o({ref:r},l),{},{components:t})):a.createElement(d,o({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[m]="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},833:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=t(7462),n=(t(7294),t(3905));const i={sidebar_position:2,id:"Farming",title:"Chia Farming",description:"Overview of Chia farming",image:"img/farm.png",keywords:["Chia","Farming","TCO","cryptocurrencies"]},o="Rewards",c={unversionedId:"hardware-resources/Farming",id:"hardware-resources/Farming",title:"Chia Farming",description:"Overview of Chia farming",source:"@site/docs/hardware-resources/farming.md",sourceDirName:"hardware-resources",slug:"/hardware-resources/Farming",permalink:"/hardware-resources/Farming",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"Farming",title:"Chia Farming",description:"Overview of Chia farming",image:"img/farm.png",keywords:["Chia","Farming","TCO","cryptocurrencies"]},sidebar:"defaultSidebar",previous:{title:"Hardware Resources Required",permalink:"/hardware-resources/hardware"},next:{title:"Full Node",permalink:"/hardware-resources/node"}},s={},p=[],l={toc:p},m="wrapper";function f(e){let{components:r,...i}=e;return(0,n.kt)(m,(0,a.Z)({},l,i,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rewards"},"Rewards"),(0,n.kt)("p",null,"Rewards minus the costs determine chia farming profitability. The expected value of the rewards has inputs of the farmer's raw space, the compression level chosen, calculating the effective farming space, and dividing it by the Netspace in the same units."),(0,n.kt)("p",null,"Plot Constant Factor = 0.78"),(0,n.kt)("p",null,"Effective capacity = number of plots ",(0,n.kt)("em",{parentName:"p"}," Plot Constant Factor ")," ((2 ",(0,n.kt)("em",{parentName:"p"}," k) + 1 ) ")," (2 ** (k - 1))"),(0,n.kt)("p",null,"For K=32, the most common value in Chia, the effective capacity is\nEffective capacity = Number of plots ",(0,n.kt)("em",{parentName:"p"}," 108.8 GB\nEffective capacity = Number of plots ")," 101.3 GiB"),(0,n.kt)("p",null,"Rewards per day = Effective capacity in GB ",(0,n.kt)("em",{parentName:"p"}," (1000^4) / (Netspace in EiB ")," 1024^6) ",(0,n.kt)("em",{parentName:"p"}," reward blocks per day ")," block reward - fees"),(0,n.kt)("p",null,"Fees can be developer fees for plotting software or pool fees"),(0,n.kt)("p",null,"A farmer can easily estimate how much XCH they will earn based on their farming capacity and current Netspace. The farming TCO model, which can also be found at ",(0,n.kt)("a",{parentName:"p",href:"https://chiacalculator.com/roi"},"https://chiacalculator.com/roi"),", is the complete picture for all the total cost of ownership for Chia farming, as well as the expected rewards that require an estimate of Chia Netspace and price. The main inputs to the TCO model are a profile of the HDDs being used, including cost and power, as well as the supporting infrastructure for farming (JBODs, servers, networking, cables, desktops, etc.). The TCO model depends on how many years to depreciate the hardware for farming over, and what the residual value will be. In Chia farming, the capital expenditures and upfront costs of the HDDs make up a large percentage of the TCO - 89% in a mid-range farm with USA home electricity costs."),(0,n.kt)("p",null,"The upfront costs of storage make up the majority of the cost for Chia farming."),(0,n.kt)("h1",{id:"tco-model"},"TCO Model"),(0,n.kt)("p",null,"Source: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1k6c-OBDtggXqnEfOPdMmq3646puzvOD7dWojwCH2v3c/edit?usp=sharing"},"Chia Farming Total Cost of Ownership Model")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:t(7189).Z,title:"farm",width:"3562",height:"1331"}),"\nFigure: Common hardware elements for Chia farming"))}f.isMDXComponent=!0},7189:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/farm-ba1b2a22ada51ec2dde246361f1b5c9c.png"}}]);