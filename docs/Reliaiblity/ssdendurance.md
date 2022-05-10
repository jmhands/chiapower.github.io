---
sidebar_position: 2
---
# SSD Endurance

The fastest plot creation is done completely in memory, but requires a server with a large amount of DRAM to perform this. Most consumer plotters are using an SSD as temporary storage to perform plotting. Mainstream SSDs today use NAND flash technology to store data. NAND is high performance, scalable, and low cost - warranting the use in virtually every computing segment from mobile phones, SD cards, consumer laptops, and data centers. However, NAND must be erased before the cell is programmed, a process known as a program erase cycle, and can only be performed a certain amount of times before the NAND cell wears out and can no longer reliably store user data. This is defined generally as an SSD no longer meeting the UBER (uncorrectable bit error rate), retention time (how long the device can store user data safely while powered off, at a given temperature), or functional failure (device can no longer power on). The metrics to measure endurance of an SSD is defined in Terabytes Written, or TBW, at a certain workload. The workload defined is generally the JESD219 workload from JEDEC organization. An SSD can still plot well beyond meeting it's rated TBW limit, because UBER can be measured (when seeing host errors) and retention is not required (Chia plotting requires temporary or ephemeral storage).

WAF (Write Amplification Factor) = NAND writes / host writes
TBW = raw capacity in TB x program erase cycles / WAF

The Chia plotting process is a write intensive workload with various plotters writing 1.3-1.8TB per k=32 (108.8GB) of plots.

| Plotter             | TBW per k=32 | TBW with 110GB DRAM cache |
| ------------------- | ------------ | ------------------------- |
| Chiapos beta        | 1.8          | N/A                       |
| Chiapos             | 1.4          | N/A                       |
| madMAx Chia plotter | 1.43         | 0.396                     |
| Bladebit memory     | 0            | 0                         |
| Bladebit disk       | 1.313        | TBD                       |


[Chia and SSD Endurance - Big Progress, Less Waste](https://www.chia.net/2021/08/03/chia-and-ssd-endurance-big-progress-less-waste.html)
