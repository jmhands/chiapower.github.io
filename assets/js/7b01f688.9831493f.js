"use strict";(self.webpackChunkchiapower=self.webpackChunkchiapower||[]).push([[3479],{9513:(e,t,a)=>{a.d(t,{X:()=>i,n:()=>o});var r=a(7294),n=a(1809);function o(){const e=(0,r.useRef)(null);return(0,r.useEffect)((()=>{if(e&&e.current){const t=e.current.getContext("2d");new n.ZP(t,{type:"bar",data:{labels:["2022","2023","2024","2025","2026","2027"],datasets:[{label:"Ave Cap (Total Market)",data:[12835,15007,17348,19907,22437,24829],backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgba(54, 162, 235, 1)",borderWidth:1},{label:"Ave Cap (Hyperscale)",data:[18437,21056,23357,25845,28287,30004],backgroundColor:"rgba(153, 102, 255, 0.2)",borderColor:"rgba(153, 102, 255, 1)",borderWidth:1}]},options:{responsive:!0,legend:{display:!0,position:"top"},title:{display:!0,text:"Chart.js Bar Chart"},scales:{xAxes:[{scaleLabel:{display:!0,labelString:"Year"}}],yAxes:[{scaleLabel:{display:!0,labelString:"Gigabytes"},ticks:{beginAtZero:!0}}]}}})}}),[]),r.createElement("canvas",{ref:e,width:"400",height:"200"})}function i(){const e=(0,r.useRef)(null);return(0,r.useEffect)((()=>{if(e&&e.current){const t=e.current.getContext("2d");new n.ZP(t,{type:"bar",data:{labels:["Bitcoin Energy Use","Dogecoin Energy Use","Chia (today)"],datasets:[{label:"Annual Energy Use (TWh)",data:[121.5,2.26,.13],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(75, 192, 192, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(255, 159, 64, 1)","rgba(75, 192, 192, 1)"],borderWidth:1}]},options:{responsive:!0,legend:{display:!0,position:"top"},title:{display:!0,text:"Annual Energy Use"},scales:{xAxes:[{scaleLabel:{display:!0,labelString:"Cryptocurrency"}}],yAxes:[{scaleLabel:{display:!0,labelString:"TWh"},ticks:{beginAtZero:!0}}]}}})}}),[]),r.createElement("canvas",{ref:e,width:"400",height:"200"})}},4409:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=a(7462),n=(a(7294),a(3905)),o=a(9513);const i={title:"Chiapower Energy Model 2023",description:"Chiapower Energy Model 2023",keywords:["Chia","Farming","Hardware","HDD","SSD","TCO","Power","Energy","Cryptocurrencies"]},l=void 0,s={unversionedId:"Model/model2023",id:"Model/model2023",title:"Chiapower Energy Model 2023",description:"Chiapower Energy Model 2023",source:"@site/docs/Model/model2023.md",sourceDirName:"Model",slug:"/Model/model2023",permalink:"/Model/model2023",draft:!1,tags:[],version:"current",frontMatter:{title:"Chiapower Energy Model 2023",description:"Chiapower Energy Model 2023",keywords:["Chia","Farming","Hardware","HDD","SSD","TCO","Power","Energy","Cryptocurrencies"]},sidebar:"defaultSidebar",previous:{title:"Chiapower Energy Model, original",permalink:"/Model/"},next:{title:"Sustainability",permalink:"/category/sustainability"}},p={},d=[{value:"Average Size HDD",id:"average-size-hdd",level:2},{value:"Effective Netspace",id:"effective-netspace",level:2},{value:"Summary of equations",id:"summary-of-equations",level:2}],m={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"average-size-hdd"},"Average Size HDD"),(0,n.kt)("p",null,"We use the IDC Worldwide Hard Disk Drive Forecast, 2023\u20132027 to determine the average capacity disk drive across all markets, including consumer, enterprise, and hyperscale data centers. We use the previous year forecast to determine the number of drives on the network and the capacity distribution. The competitiveness of Chia farming has increased the mix of high capacity HDDs into the Netspace, thus overall decreasing the power consumption from previous estimates."),(0,n.kt)(o.n,{mdxType:"HddChart"}),(0,n.kt)("h2",{id:"effective-netspace"},"Effective Netspace"),(0,n.kt)("p",null,"We use a distribution of average and competitive farmers to determine the average compression level, and estimate their raw capacity. We will need the raw Netspace to calculate the hard drive power usage."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Assumptions"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Percent Average Farmer"),(0,n.kt)("td",{parentName:"tr",align:null},"60%"),(0,n.kt)("td",{parentName:"tr",align:null},"how much percent of the Netspace is average farmer, uses lower compression level and not the most competetive TCO")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Percent Competetive Farmer"),(0,n.kt)("td",{parentName:"tr",align:null},"40%"),(0,n.kt)("td",{parentName:"tr",align:null},"how much percent of the Netspace is competetive farmer, uses higher compression level and more competetive TCO")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Overhead infra"),(0,n.kt)("td",{parentName:"tr",align:null},"50%"),(0,n.kt)("td",{parentName:"tr",align:null},"power usage overhead of everything that isn't HDDs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Compression overhread ave"),(0,n.kt)("td",{parentName:"tr",align:null},"30%"),(0,n.kt)("td",{parentName:"tr",align:null},"power usage overhead of an average farmer for implementing compression, CPU or GPU")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Compression overhead comp"),(0,n.kt)("td",{parentName:"tr",align:null},"50%"),(0,n.kt)("td",{parentName:"tr",align:null},"power usage overhead of an competetive farmer for implementing compression, CPU or GPU")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"compression ratio average"),(0,n.kt)("td",{parentName:"tr",align:null},"30%"),(0,n.kt)("td",{parentName:"tr",align:null},"% reduction for average farmers, low to mid range C level")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"compression ratio comp"),(0,n.kt)("td",{parentName:"tr",align:null},"50%"),(0,n.kt)("td",{parentName:"tr",align:null},"% reduction for competetive farmers, higher C level")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Energy to plot kWh/TB"),(0,n.kt)("td",{parentName:"tr",align:null},"0.45"),(0,n.kt)("td",{parentName:"tr",align:null},"based on average for GPU and CPU systems")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Life of a plot (years)"),(0,n.kt)("td",{parentName:"tr",align:null},"2.5"),(0,n.kt)("td",{parentName:"tr",align:null},"reduced with major changes to compression, changes to proof of space")))),(0,n.kt)("p",null,"With the average drive size per year, we can estimate the W/TB per drive (and effectively the number of drives that make up the Netsapce). From there we can use the estimations above on the optimal TCO for Chia farming to estimate the overhead for supporting infrastrucure, including compute for decompression. Knowing the total average and competetive farmers W/TB we can multiply that by the total amount of raw Netspace (obtained from reducing the effective Netspace by the compression ratio)"),(0,n.kt)("p",null,"Today's maximum plot compression is around 50% of the total plot size. We use a TCO model with various inputs of compute cost and power overhead to determine which levels of compression are optimal for average and competitive farmers. Plot compression increases the individual farmers power consumption, but has a limited effect on the overall Chia Netspace power consumption."),(0,n.kt)("h2",{id:"summary-of-equations"},"Summary of equations"),(0,n.kt)("p",null,"Annual Energy Plotting = Netspace Raw ",(0,n.kt)("em",{parentName:"p"}," (1000^2) ")," kWh/TB / life of plot"),(0,n.kt)("p",null,"Netspace Raw = (Percent Average Farmer ",(0,n.kt)("em",{parentName:"p"}," Netspace ")," (1 - compression ratio average) ) + (Percent Competeive Farmer ",(0,n.kt)("em",{parentName:"p"}," Netspace ")," (1 - compression ratio comp) )"),(0,n.kt)("p",null,"W/TB total = W/TB_drive + W/TB_infra + W/TB_compute"),(0,n.kt)("p",null,"Total Network Power = Netspace Raw * W/TB total"),(0,n.kt)("p",null,"Annual Energy = Total Network Power ",(0,n.kt)("em",{parentName:"p"}," 24 ")," 365"),(0,n.kt)("p",null,"The Model can be found ",(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1j6-JdZ2eGd55BoIorTfIugWeJKcE3EiEUrPxaT30jM4/edit?usp=sharing"},"here")))}u.isMDXComponent=!0}}]);