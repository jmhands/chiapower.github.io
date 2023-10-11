"use strict";(self.webpackChunkchiapower=self.webpackChunkchiapower||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"redesign","metadata":{"permalink":"/blog/redesign","source":"@site/blog/redesign2022.mdx","title":"Chiapower redesign","description":"When I built the chiapower.org energy model, Chia had not even launched the mainnet. It is almost impossible to think of how fast the Netspace scaled after the launch, trying to update assumptions during exponential growth. It is fair to say I know a lot more about hard drive energy consumption and idle power states than I did a year ago. I have a deep understanding of the market dynamics between the xch price, Netspace, which drive power consumption. I have learned about sustainability and circular business models from legends in this space, and how to perform a life cycle assessment to understand the carbon impact of a product.","date":"2022-05-10T10:00:00.000Z","formattedDate":"May 10, 2022","tags":[{"label":"update","permalink":"/blog/tags/update"}],"readingTime":1,"hasTruncateMarker":false,"authors":[{"name":"Jonmichael Hands","title":"VP Storage","url":"https://chia.net","imageURL":"https://www.chia.net/wp-content/uploads/2022/06/jonmichael-hands_@2x.png?w=684","key":"jm"}],"frontMatter":{"slug":"redesign","title":"Chiapower redesign","authors":["jm"],"tags":["update"],"date":"2022-05-10T10:00"},"nextItem":{"title":"Chiapower v2 update","permalink":"/blog/blog"}},"content":"When I built the chiapower.org energy model, Chia had not even launched the mainnet. It is almost impossible to think of how fast the Netspace scaled after the launch, trying to update assumptions during exponential growth. It is fair to say I know a lot more about hard drive energy consumption and idle power states than I did a year ago. I have a deep understanding of the market dynamics between the xch price, Netspace, which drive power consumption. I have learned about sustainability and circular business models from legends in this space, and how to perform a life cycle assessment to understand the carbon impact of a product.\\r\\n\\r\\nAt the time of the release of the website, I based the research on the best-in-class energy models from CBECI and Digiconomist for blockchains. It is clear that energy alone is not enough now as sustainability and the future of cryptocurrencies like Proof of Work are being discussed on a global stage. I will be working to update the chiapower model and Chia sustainability pages with the best research I can do, and answer questions for the broader ecosystem trying to learn more about what sustainability means to the Chia blockchain."},{"id":"blog","metadata":{"permalink":"/blog/blog","source":"@site/blog/v2update.mdx","title":"Chiapower v2 update","description":"Rev 2.0 Changelog","date":"2021-07-21T10:00:00.000Z","formattedDate":"July 21, 2021","tags":[{"label":"Chiapower","permalink":"/blog/tags/chiapower"}],"readingTime":2.205,"hasTruncateMarker":false,"authors":[{"name":"Jonmichael Hands","title":"VP Storage","url":"https://chia.net","imageURL":"https://www.chia.net/wp-content/uploads/2022/06/jonmichael-hands_@2x.png?w=684","key":"jm"}],"frontMatter":{"slug":"blog","title":"Chiapower v2 update","authors":["jm"],"tags":["Chiapower"],"date":"2021-07-21T10:00"},"prevItem":{"title":"Chiapower redesign","permalink":"/blog/redesign"}},"content":"Rev 2.0 Changelog\\r\\n\\r\\nMore than 3 months of observed Netspace growth and observations\\r\\nInitial growth (phase 1) of the Chia network was dominated by newly purchased high capacity 3.5in nearline HDDs, by early adopter farmers (Source: IDC, Seagate, WD). Avg capacity could be as high as 15TB\\r\\nPhase 2 of growth will be dominated by smaller farmers, pools, coming mostly from underutilized storage (Source: IDC)\\r\\nInclude 6 & 8TB into low cap avg range for power consumption\\r\\nIntegrate plotting power into energy consumption by assuming the life of a plot and amortizing the energy used to create it over the lifetime of the plot. Use real measured data and power consumption of chia community plotters to get a range for power consumption\\r\\nAdd annual energy in TWh, compare vs BTC & ETH using digiconimist (cbeci still great but recent China policy changes not reflected in annual consumption avg)\\r\\nThis is a link to a working model (includes legacy calculations and estimates in other tabs)\\r\\n\\r\\nThe original model estimated Netspace growth based on the initial estimate, growth rate, and total storage market size for the upper limit of growth. The Chia team reviewed a very early version in a community Zoom call: Farming and Electricity Usage in Chia.\\r\\nThe Chiapower 2.0 model takes more than 3 months of observed Netspace growth, industry analyst reports, and first-hand reporting directly from the HDD vendors on the capacity mix and increased demand for HDDs attributed to Chia. The total power consumption on the Chia network can be estimated by taking the total Netspace (similar to hashing power in bitcoin) and modeling the power consumption of the storage devices (farming) and the energy consumed to create the data (plotting). This is a similar methodology to the Cambridge Bitcoin Electricity Consumption Index, where most likely mining hardware is known, and electricity cost is estimated, and the total power consumption of the bitcoin network is estimated using a low and high estimate of reference mining hardware. Estimating a mix of common reference hardware farmers using hard disk drives (HDDs) and solid state drives (SSDs) by what is economical for Chia farming will depend on the capital expenditures of the hardware (CapEx) and operational expenditures for power, cooling, networking, and data center efficiency. Storage power efficiency is measured in TB/W which includes the overhead of the supporting hardware infrastructure to host the storage devices, but the largest upfront cost in Chia farming is the cost of the storage devices themselves. The Chia network also consumes energy during the plotting process, wherein the cryptographic data is generated prior to being able to farm for the proof of space and time."}]}')}}]);