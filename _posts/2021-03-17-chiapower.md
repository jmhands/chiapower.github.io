---
layout: post
title: Introducing chiapower
---

# Summary

The total power consumption on the Chia network can be estimated by taking the total netspace (similar to hashing power in bitcoin) and modeling the power consumption of the storage devices (farming) and the energy created to create the data (plotting). This is a similar methodology to the Cambridge Bitcoin Electricity Consumption Index, where most likely mining hardware is known, and electricity cost is estimated, and the total power consumption of the bitcoin network is estimated using a low and high estimate of reference mining hardware. Estimating a mix of common reference hardware farmers using hard disk drives (HDDs) and solid state drives (SSDs) by what is economical for Chia farming will depend on the capital expenditures of the hardware (CapEx) and operational expenditures for power, cooling, networking, and data center efficiency. Storage power efficiency is measured in TB/W which includes the overhead of the supporting hardware infrastructure to host the storage devices, but the largest upfront cost in Chia farming is the cost of the storage devices themselves. The Chia network also consumes energy during the plotting process, of which the cryptographic data is generated prior to being able to farm for the proof of space and time.

Energy consumption in kWh can be calculated by assuming an estimated percentage of the network using consumer hardware with spare capacity (under utilized resources already owned), which happen to be very efficient due to the transition in mainstream computing devices to SSDs over the last decade, as well as the percent of dedicated farmers that are using dense storage configurations with data center grade equipment.
![equation](https://jmhands.github.io/chiapower.github.io/assets/image1.png "Elow")
![equation](https://jmhands.github.io/chiapower.github.io/assets/image2.png "Ehigh")
![equation](https://jmhands.github.io/chiapower.github.io/assets/image3.png "Eave")

Where TB/W for P ave, low, and high are estimated with the representative farming equipment efficiency.
![equation](https://jmhands.github.io/chiapower.github.io/assets/image4.png "TB/W")
Total power of the Chia network
![equation](https://jmhands.github.io/chiapower.github.io/assets/image5.png "Ptotal")
Annual energy consumption
![equation](https://jmhands.github.io/chiapower.github.io/assets/image6.png "Etotal")

| Parameter                   | Description                                          | Unit            | Source                                                                          |
|-----------------------------|------------------------------------------------------|-----------------|---------------------------------------------------------------------------------|
| Netspace                    | Total amount of farming capacity on the Chia network | EiB (Exbibyte)  | "Chia network, Chia explorer"                                                   |
| HDD ave capacity            | Average capacity hard disk drive                     | TB (Terabytes)  | "Source: IDC Worldwide Hard Disk Drive Forecast Update, 2020–2024, Dec 2020"    |
| Plotting energy consumption | Average energy consumption to create 1TiB of plots   | kWh/TiB of data | Chia community reference hardware                                               |
| Device power consumption    | The idle power of storage device                     | W/TB            | Modeled by device type for SSD and HDD                                          |
| E low                       | "Energy consumption, most efficient hardware (SSD)"  | kWh             | "Farming on low power SSDs, extra space from consumer storage"                  |
| E ave                       | Energy consumption mainstream high capacity farmer   | kWh             | Estimated hyperscale like efficiency purpose built for data storage and farming |
| E high                      | Energy consumption worst case (low capacity HDD)     | kWh             | "Estimated with 3-4TB HDDs on a consumer desktop, lowest device CapEx"          |

Total storage market size in Exabytes. The power consumption of the Chia network is a small portion of the overall total storage market size, and improved efficiencies in farming devices will further reduce  total energy consumption for mass storage and would result in a net positive impact for the environment.

![Storage Market](/assets/image6.png "Market")
Source: IDC Worldwide Hard Disk Drive Forecast Update, 2020–2024, Dec 2020, IDC Worldwide Solid State Drive Forecast Update, 2020–2024. Dec 2020

## Modeling Device Power Consumption - W/TB
[Assumption 0]
The power consumption used to estimate per disk power is very close to hard drive specification of idle power. The Chia farming process is very lightweight, requiring very little disk io and further reduced in the new consensus through a mechanism called the plot filter. Although the amount of data transferred is very low, the frequency of data access depends on the size of the plots constructed and number of plots per drive (capacity per disk), measured with a K value, with the minimum K value = 32 consisting of ~108GB (~101GiB. Most farmers use  the minimum required K value for the network operation due to the ease of plotting, so the probability a single plot per disk passes the filter is very high, requiring the disk to be accessed frequently. While it is technically possible for a hard disk drive to spin down to zero idle power between slots, the resume latency from HDD power off or spindown is 10 seconds and HDDs consume higher power to spin up (in rush current) reaching up to 25W for a few seconds. The energy consumed for power up and the mechanical wear and tear on the device make it not practical to spin down the drives in regular use. Power savings on the other mechanical aspects of HDDs, for instance, management of the heads and actuators, are device specific, while link power states are subject to the host storage interface (both SAS and SATA have detailed power state machines that operate differently)
