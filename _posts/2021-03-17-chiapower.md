---
layout: post
title: Chia Power - Estimate of total energy consumption in the Chia network
---

Chia power is the working model for estimating power consumption on the Chia network, written by Jonmichael Hands, Sr. Strategic Planner at Intel corporation. You can find him on Keybase as @Storage_jm

# Summary

[working model](https://docs.google.com/spreadsheets/d/1ytkoezTa2jqzolOJAj1-p2oFGiPQ0ocLpr78r8AhdLM/edit?usp=sharing)

The total power consumption on the Chia network can be estimated by taking the total netspace (similar to hashing power in bitcoin) and modeling the power consumption of the storage devices (farming) and the energy created to create the data (plotting). This is a similar methodology to the Cambridge Bitcoin Electricity Consumption Index, where most likely mining hardware is known, and electricity cost is estimated, and the total power consumption of the bitcoin network is estimated using a low and high estimate of reference mining hardware. Estimating a mix of common reference hardware farmers using hard disk drives (HDDs) and solid state drives (SSDs) by what is economical for Chia farming will depend on the capital expenditures of the hardware (CapEx) and operational expenditures for power, cooling, networking, and data center efficiency. Storage power efficiency is measured in TB/W which includes the overhead of the supporting hardware infrastructure to host the storage devices, but the largest upfront cost in Chia farming is the cost of the storage devices themselves. The Chia network also consumes energy during the plotting process, of which the cryptographic data is generated prior to being able to farm for the proof of space and time.

Energy consumption in kWh can be calculated by assuming an estimated percentage of the network using consumer hardware with spare capacity (under utilized resources already owned), which happen to be very efficient due to the transition in mainstream computing devices to SSDs over the last decade, as well as the percent of dedicated farmers that are using dense storage configurations with data center grade equipment.
![equation](https://jmhands.github.io/chiapower.github.io/assets/image1.png "Eave")
![equation](https://jmhands.github.io/chiapower.github.io/assets/image2.png "Elow")
![equation](https://jmhands.github.io/chiapower.github.io/assets/image3.png "Ehigh")

Where TB/W for P ave, low, and high are estimated with the representative farming equipment efficiency.
![equation](https://jmhands.github.io/chiapower.github.io/assets/image4.png "TB/W")
Total power of the Chia network
![equation](https://jmhands.github.io/chiapower.github.io/assets/image5.png "Ptotal")
Annual energy consumption
![equation](https://jmhands.github.io/chiapower.github.io/assets/image6.png "Etotal")![equation](https://jmhands.github.io/chiapower.github.io/assets/image7.png "Etotal2")

| Parameter                   | Description                                          | Unit            | Source                                                                          |
|-----------------------------|------------------------------------------------------|-----------------|---------------------------------------------------------------------------------|
| Netspace                    | Total amount of farming capacity on the Chia network | EiB (Exbibyte)  | Chia network, [Chia explorer](https://www.chiaexplorer.com/)                    |
| HDD ave capacity            | Average capacity hard disk drive                     | TB (Terabytes)  | Source: IDC Worldwide Hard Disk Drive Forecast Update, 2020–2024, Dec 2020      |
| Plotting energy consumption | Average energy consumption to create 1TiB of plots   | kWh/TiB of data | Chia community reference hardware                                               |
| Device power consumption    | The idle power of storage device                     | W/TB            | Modeled by device type for SSD and HDD                                          |
| E low                       | Energy consumption, most efficient hardware (SSD)    | kWh             | Farming on low power SSDs, extra space from consumer storage                    |
| E ave                       | Energy consumption mainstream high capacity farmer   | kWh             | Estimated hyperscale like efficiency purpose built for data storage and farming |
| E high                      | Energy consumption worst case (low capacity HDD)     | kWh             | Estimated with 3-4TB HDDs on a consumer desktop, lowest device CapEx            |

Total storage market size in Exabytes. The power consumption of the Chia network is a small portion of the overall total storage market size, and improved efficiencies in farming devices will further reduce  total energy consumption for mass storage and would result in a net positive impact for the environment.

![Storage Market](https://jmhands.github.io/chiapower.github.io/assets/image14.png "Market")
Source: IDC Worldwide Hard Disk Drive Forecast Update, 2020–2024, Dec 2020, IDC Worldwide Solid State Drive Forecast Update, 2020–2024. Dec 2020

## Modeling Device Power Consumption - W/TB
[Assumption 0]
The power consumption used to estimate per disk power is very close to hard drive specification of idle power. The Chia farming process is very lightweight, requiring very little disk io and further reduced in the [new consensus](https://docs.google.com/document/d/1tmRIb7lgi4QfKkNaxuKOBHRmwbVlGL4f7EsBDr_5xZE/) through a mechanism called the plot filter. Although the amount of data transferred is very low, the frequency of data access depends on the size of the plots constructed and number of plots per drive (capacity per disk), measured with a K value, with the minimum K value = 32 consisting of ~108GB (~101GiB. Most farmers use  the minimum required K value for the network operation due to the ease of plotting, so the probability a single plot per disk passes the filter is very high, requiring the disk to be accessed frequently. While it is technically possible for a hard disk drive to spin down to zero idle power between slots, the resume latency from HDD power off or spindown is 10 seconds and HDDs consume higher power to spin up (in rush current) reaching up to 25W for a few seconds. The energy consumed for power up and the mechanical wear and tear on the device make it not practical to spin down the drives in regular use. Power savings on the other mechanical aspects of HDDs, for instance, management of the heads and actuators, are device specific, while link power states are subject to the host storage interface (both SAS and SATA have detailed power state machines that operate differently)
Source: [Feeding the Pelican: Using Archival Hard Drives for Cold Storage Racks](https://www.microsoft.com/en-us/research/publication/feeding-pelican-using-archival-hard-drives-cold-storage-racks/)

![HDD Power](https://jmhands.github.io/chiapower.github.io/assets/image13.png "Power")
## Power consumption for majority of large Chia farmers
The majority of nearline and high capacity HDDs are consumed by hyperscale data centers and large cloud service providers, where designing around lowest possible data center TCO is the ultimate goal. TCO is measured in TCO$/TBe/rack/month, where TCO is the sum of the total capital and operational expenditures ammorized of the effective or usable capacity of the storage system. The Chia power model utilizes a similar model assuming the most efficient way to store data is already widely being used.  Optimizing disk storage TCO involves getting the highest capacity HDDs, which offer the highest energy efficiency in terms of TB/W, as well as densely packed JBODs (just a bunch of disks) measured in TB/rack unit. Different architectures for warm storage (more frequently accessed) vs cold storage (archival, less frequently accessed) vary mostly around the amount of compute to storage ratio. Chia farming looks very similar to hyperscale HDD archival storage requiring minimum compute resources and networking resources for the actual harvester and farming protocols. Hyperscalers like [Facebook](https://www.usenix.org/conference/fast21/presentation/pan) and Microsoft have written about their storage systems extensively because the [JBOD hardware designs](https://www.opencompute.org/documents/facebook-bryce-canyon-storage-system-specification) hardware designs are open source at the [Open Compute Project](https://www.opencompute.org/).

![JBOD](https://jmhands.github.io/chiapower.github.io/assets/image15.png "JBOD")

The model used to estimate power consumption for disks and supporting infrastructure is taken from the  [SNIA open source storage TCO model](https://www.snia.org/forums/sssi/programs/TCOcalc) open source storage TCO model. Replication, erasure coding, and RAID for data protection is not assumed for use in the Chia farming model, due to the fact that plot data can be easily recreated upon disk failure. The model also assumes the majority of disk time is spent in active idle, where the motor is spinning and the disk can respond to commands in milliseconds. The total power consumption overhead for dense storage involves a storage server (or sometimes called headnode) that serves the operating system hosting the Chia harvester and/or farmer. The total power consumption must include the JBODs (which power consumption comes mostly from the disks, but some from the fans, SAS expanders, and backplane) and the servers and supporting infrastructure like networking routers and switches. Everything that is in the rack dedicated to Chia farming must be considered to accurately model the power consumption efficiency in TB/W.

## Energy efficiency - Data center PUE
Hyperscalers like Facebook have achieved a world class PUE of 1.08 and have a large effort in sustainability and renewable energy. We assume most large farmers in the first few years are not optimizing for maximum power efficiency, but just like in Bitcoin over time the power efficiency will gravitate towards the most efficient solutions for power consumption, low cost electricity, and energy efficiency. The Pave equation assumes hyperscale like efficiencies for storage, since they are in fact storing most of the worlds data and the largest annual consumers of HDD and SSDs.

### Power consumption in lower bound

Solid state drives are extremely power efficient. Designed for the use in laptops and mobile devices for long battery life, NAND and SSD controllers are architected for near zero idle power consumption. The [NVM Express (NVMe) specification](https://nvmexpress.org/developers/nvme-specification/) for solid state drives contains various features for [power savings](https://nvmexpress.org/resources/nvm-express-technology-features/nvme-technology-power-features/), with mainstream consumer SSDs ranging from [2-4mW idle power with 5-8mS resume latency](https://www.anandtech.com/show/16012/the-sk-hynix-gold-p31-ssd-review/7). With over 100 million consumer NVMe SSDs shipped alone in 2020, there are tens of millions of 1-2TB SSDs in consumer laptops and desktops, which based on studies done by Intel and other companies is greater than the average amount of data used in mainstream use, productivity, gaming, and workstations. The lower bound estimate is the power consumption for low power SSDs.

**Assumption** Current prices of SSDs are 5-7x the $/TB of capacity optimized hard disk drives. The power consumption of the lower bound only estimates current estimated underutilized capacity resources from consumers who have already purchased a computing device with an SSD installed.

Power consumption in kW - lower bound
![equation](https://jmhands.github.io/chiapower.github.io/assets/image8.png "Elow")

## Power consumption higher bound
![equation](https://jmhands.github.io/chiapower.github.io/assets/image3.png "Ehigh")

The higher bound on energy consumption comes from the storage media type that is the lowest acquisition cost. Hard disk drives also exhibit a bathtub curve for device failures when power on hours exceeds the 5 year warranty, or excessive writes to the disk (HDD manufacturers call rated workload). Annual failure rate for these models that are well into production have been well documented, with reports like [Backblaze HDD Disk Stats](https://www.backblaze.com/b2/hard-drive-test-data.html). The most likely candidate for low cost hard drives for 2021 are 3 or 4TB devices, which are on average, used and at the end of life, 20-30% cheaper than used or refurbished average capacity 3.5in HDDs.

### Power to plot
The [plotting](https://www.chia.net/2021/02/22/plotting-basics.html) process involves the creation of the cryptographic data that is stored on the farming devices, and requires compute and ephemeral storage resources to create. Plotting is a one time energy consumption use per the total Netspace, as the data to be stored for farming only needs to be created once. More details about the plotting process can be found in the [Chia Proof of Space Construction document](https://www.chia.net/assets/proof_of_space.pdf). The Chia community has [reference hardware posted ](https://github.com/Chia-Network/chia-blockchain/wiki/Reference-Plotting-Hardware)with the amount of data that various machines can plot per day, and the average power consumption of the systems can be measured or estimated very accurately (since these are common consumer or server platforms). Users also record the amount of data they are able to plot per day per machine making it practical to estimate the energy consumption to create the Chia plots, estimated in kWh/TiB plotted.
![equation](https://jmhands.github.io/chiapower.github.io/assets/image12.png "Pplot")

### Opportunities for further investigation

**HDD capacity growth vs QLC SSD**
There is currently a lot of debate about what is in store for the next decade of storage devices. The NAND market is project to reach 558EB in 2021 (Source: TrendForce Feb. 9th, 2021), with approximately 300EB of SSDs between data center and consumer applications. With the current decline of average selling price of SSDs over the last 10 years, multiple generations of 3D NAND technology improvements and new media technologies for NAND flash (QLC and PLC, 4 and 5 bits per cell respectively) [may bring a total ASP crossover for SSDs and HDDs.](https://wikibon.com/qlc-flash-hamrs-hdd/) Even if SSDs reach within 2-3x the ASP, the projected TCO in almost every storage application will favor SSDs. [Seagate has since responded]( https://www.anandtech.com/show/16544/seagates-roadmap-120-tb-hdds ) with a competitive roadmap that exceeds the current areal density growth for HDDs and requires investment in new technologies.

_“Seagate recently published its long-term technology roadmap revealing plans to produce ~50 TB hard drives by 2026 and 120+ TB HDDs after 2030. In the coming years, Seagate is set to leverage usage of heat-assisted magnetic recording (HAMR), adopt bit patterned media (BPM) in the long term, and to expand usage of multi-actuator technology (MAT) for high-capacity drives. This is all within the 3.5-inch form factor”._

No matter who wins this storage war, total power efficiency per given storage capacity will get reduced in upcoming years due to the competitive storage market and large growth of data created. These will both benefit Chia, with an SSD heavy future being even more power efficient than the current. [Intel forecasted](https://www.intel.com/content/www/us/en/events/memory-and-storage.html) that a move to all SSD in the future could reduce carbon emissions by 41 million tons, with a projected TCO crossover for 15-30% of the nearline HDD bit TAM by 2022 alone.

**Reduce power of HDDs through firmware optimizations for Chia**
Current 5400RPM 3.5in HDDs consume less idle power than 7200 RPM drives. An [8TB Seagate ](https://www.seagate.com/www-content/datasheets/pdfs/3-5-barracudaDS1900-14-2007US-en_US.pdf)5400RPM HDD consumes 2.5W (4TB) and 3.4W (8TB) idle power, while competing 7200 RPM drives consume 5-6W idle power. There are likely optimizations to slightly reduce W/TB by taking large capacity models and running them at a lower motor speed, impacting performance at the tradeoff of energy efficiency.

| Drive Model       | Capacity | Speed    | Idle Power | W/TB  |
|-------------------|----------|----------|------------|-------|
| Seagate Barracuda | 8TB      | 5400 RPM | 3.4W       | 0.425 |
| Seagate Exos X18  | 18TB     | 7200 RPM | 5.3W       | 0.294 |

**Large K values and drive spindown.**
With very large capacity HDDs and very large K value, the probability of disk access during a sub-block per plot filter goes down exponentially. There are some opportunities to explore POCs with very large K value (1-2 per disk) and calculate the probability distribution for disk access times vs acceptable spin downs per year.
