---
sidebar_position: 1
---

# Reliability of Storage Devices in Chia Farming

Chia is an extremely light workload compared to typical end-user workloads,[ 0.37%](https://docs.chia.net/docs/15resources/Storage_farming) of the lowest HDD rated workload limit of 200TB/year. It is also 309 times lower disk busy time than an example [hyperscale data center workload](https://www.usenix.org/system/files/fast21-pan.pdf). Plot files contain random cryptographic hashes that can easily be created with no user data, removing data durability requirements for data storage in Chia farming. Hard drives, SSDs, or any consumer electronic device, don’t have a rated lifetime, reliability is measured in the annual failure rate or mean time between failure. They do have a warranty, most often 5 years which is used for most LCA ([life cycle assessments](https://www.seagate.com/global-citizenship/product-sustainability/exos-x18-sustainability-report/)). SSDs also have a rated endurance measured in host writes, TBW (terabytes written). HDDs have a rated workload in TB/year for both reads and writes, due to mechanical wear on the drive.

## Measuring Reliability

Quality and reliability are different metrics. Quality is the goal of reducing time zero failures. Some lower-end drive models are not tested as robustly as high-end drive models in the factory prior to shipping, although they may have a higher chance of being DOA (dead on arrival). These are not to be confused with reliability issues, which are caused by extended use of the device. Enterprise HDDs are rated at 2M or 2.5M hours MTBF (Mean Time Between Failure), which equates to 0.44% and 0.35% AFR (Annual Failure Rate), respectively. MTBF and AFR are the same metrics expressed in different ways. Mean Time Between Failure is the total amount of drive hours before a failure is expected. This does not mean a single drive can last for 2 million hours; it means if you have a collection of drives running, you should expect one failure every 2M total drive power-on hours (the sum of all the drives). Annual Failure Rate is expressing that the individual drive has a 0.44% chance every year to fail, based on the data from a large population of drives.

## Hard drive rated workloads

Hard disk drive reliability is rated at a specified amount of data read and written per year, expressed in TB/year. Common 3.5in HDDs used in Chia farming are rated at 200-550TB per year workload depending on the drive model and recommended use case. The amount of data written for Chia is often just the size of the drive, because plots are generated on ephemeral storage and then sequentially copied over to the drive. The amount of data read can be calculated by looking at the bandwidth of the drive and multiplying it by time. In the worst case, with the largest hard drive on the market today at 20TB, full of k=32 plots, at difficulty 1 pooling would read an average of [2.1GB per day, or 750 GB per year](https://docs.chia.net/docs/15resources/Storage_farming).

## Future - Perfect fit for used drives

Proof of space is a novel use case for hard drives and can accept storage media with a high UBER compared to typical consumer and enterprise workloads. Chia farming is optimized for high capacity, write once / read many, low power, and high error rate. A perfect fit for this is used drives from hyperscale data centers, which still have a large capacity, good TCO for Chia farming, and remove most reliability and durability requirements.
