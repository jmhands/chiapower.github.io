"use strict";(self.webpackChunkchiapower=self.webpackChunkchiapower||[]).push([[5580],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(r),u=a,f=h["".concat(l,".").concat(u)]||h[u]||p[u]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1761:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:1,title:"Power Requirements for Hard Drives"},l=void 0,d={unversionedId:"Power/powerhdd",id:"Power/powerhdd",title:"Power Requirements for Hard Drives",description:"The Chia farming process is very lightweight, requiring very little disk io by only having to perform a proof quality check on most lookups, and through a mechanism called the plot filter which reduces the io by a factor of the constant. In Chia the plot filter is currently set to 512, meaning that on every challenge a plot has a 1/512 chance of being eligible. Although the amount of data transferred is very low, the frequency of data access depends on the size of the plots constructed and number of plots per drive (capacity per disk), measured with a K value, with the minimum K value = 32 consisting of ~108GB (~101GiB. Most farmers use the minimum required K value for the network operation due to the ease of plotting and the disk is accessed frequently, but still only transfers a small amount of data. These parameters dictate power savings depending on the device type used for farming since SSD and HDD have very different power states and latency profiles.",source:"@site/docs/Power/powerhdd.md",sourceDirName:"Power",slug:"/Power/powerhdd",permalink:"/Power/powerhdd",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Power Requirements for Hard Drives"},sidebar:"defaultSidebar",previous:{title:"Power",permalink:"/category/power"},next:{title:"SSDs and Chia farming",permalink:"/Power/powerssd"}},c={},p=[],h={toc:p};function u(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Chia farming process is ",(0,o.kt)("a",{parentName:"p",href:"https://docs.chia.net/docs/15resources/Storage_farming"},"very lightweight"),", requiring very little disk io by only having to perform a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.chia.net/docs/03consensus/proof-of-space/#farming"},"proof quality check")," on most lookups, and through a mechanism called the plot filter which reduces the io by a factor of the constant. In Chia the plot filter is currently set to 512, meaning that on every challenge a plot has a 1/512 chance of being eligible. Although the amount of data transferred is very low, the frequency of data access depends on the size of the plots constructed and number of plots per drive (capacity per disk), measured with a K value, with the minimum K value = 32 consisting of ~108GB (~101GiB. Most farmers use the minimum required K value for the network operation due to the ease of plotting and the disk is accessed frequently, but still only transfers a small amount of data. These parameters dictate power savings depending on the device type used for farming since SSD and HDD have very different power states and latency profiles."),(0,o.kt)("p",null,"The power consumption of storage devices is well understood. Hard drives save power in a few ways. Consumer hard drives sometimes have a lower RPM (5400) vs enterprise or nearline HDDs (7200 rpm), which decreases power consumption from spinning the motor slower. When an HDD is idle for an extended period of time, the device can enter a lower power state by disabling the servo systems, parking the head, or spinning down. One cycle of parking the head is called a load/unload, which has a limited amount of times it can be performed over the duration of an HDD deployment due to the mechanical wear and tear. This power state is called Idle B."),(0,o.kt)("p",null,"Analysis has shown that during the Chia farming workload on an 18TB HDD with n=165 plots, the HDD was idle 99.7% of the time (Source: Western Digital, Seagate, ",(0,o.kt)("a",{parentName:"p",href:"https://docs.chia.net/docs/15resources/Storage_farming"},"Chia"),"). The power consumption for Chia farming can be found on the hard drive specification for idle power under Idle A. In this power state, the hard drive motor is spinning with the heads on track follow and some of the servo systems may be disabled."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Drive Model"),(0,o.kt)("th",{parentName:"tr",align:null},"Rotational Speed"),(0,o.kt)("th",{parentName:"tr",align:null},"Idle A power (W)"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://documents.westerndigital.com/content/dam/doc-library/en_us/assets/public/western-digital/product/data-center-drives/ultrastar-dc-hc500-series/product-manual-ultrastar-dc-hc550-sata-oem-spec.pdf"},"Western Digital HC550 18TB")),(0,o.kt)("td",{parentName:"tr",align:null},"7200 rpm"),(0,o.kt)("td",{parentName:"tr",align:null},"5.6W")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seagate.com/files/www-content/about/newsroom/media-kits/_shared/files/exos-x18-channel-DS2045-1-2007US-en_US.pdf"},"Seagate Exos X18 18TB")),(0,o.kt)("td",{parentName:"tr",align:null},"7200 rpm"),(0,o.kt)("td",{parentName:"tr",align:null},"5.3W")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seagate.com/www-content/datasheets/pdfs/3-5-barracudaDS1900-11-1806US-en_US.pdf"},"Seagate Barracuda Compute 8TB")),(0,o.kt)("td",{parentName:"tr",align:null},"5400 rpm"),(0,o.kt)("td",{parentName:"tr",align:null},"3.4W")))),(0,o.kt)("p",null,"There are advanced techniques that can be used with varying the number of plots per drive (using a higher value for k, increasing the plot file size), and tuning the timer for Idle B. It is not recommended to spin down the drive due to the time it takes and energy consumed to spin up the drive, which can be 15-20 seconds on mainstream and enterprise HDDs."),(0,o.kt)("p",null,"To get to zero idle power, the drive must actually spin down. While it is technically possible for a hard disk drive to spin down to zero idle power between slots, the resume latency from HDD power off or spindown is 10 seconds and HDDs consume higher power to spin up (inrush current) reaching up to 25W for a few seconds. The energy consumed for power up and the mechanical wear and tear on the device make it not practical to spin down the drives in regular use. Power savings on the other mechanical aspects of HDDs, for instance, management of the heads and actuators, are device-specific, while link power states are subject to the host storage interface (both SAS and SATA have detailed power state machines that operate differently)"),(0,o.kt)("p",null,"Because of the nature of the moving parts within the HDD, repeated movements and friction over hundreds of thousands of iterations can cause physical particles to be released within the hard drive, and increase the chance of physical damage on the disk. The current assessment is that despite a large amount of idle time on the disk and using standard k=32 plots, the disk is being accessed frequently enough (albeit a small amount of data actually being read) that parking the heads or spinning down would cause an accelerated amount of wear and tear on the drive that would be detrimental to the longevity and reliability of the HDD."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"W/TB",src:r(8974).Z,title:"W/TB",width:"1999",height:"1158"}),"\n",(0,o.kt)("img",{alt:"Feeding The Pelican",src:r(1195).Z,title:"HDD Power during spinup",width:"1173",height:"471"}),"\nSource: ",(0,o.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/research/publication/feeding-pelican-using-archival-hard-drives-cold-storage-racks/"},"Feeding the Pelican: Using Archival Hard Drives for Cold Storage Racks")))}u.isMDXComponent=!0},8974:function(e,t,r){t.Z=r.p+"assets/images/image7-dc5338b660f055e94633614936916f8c.png"},1195:function(e,t,r){t.Z=r.p+"assets/images/image9-33d88c67af1c35bd343966a81581b7b0.png"}}]);