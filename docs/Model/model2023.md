---
title: Chiapower Energy Model 2023
description: Chiapower Energy Model 2023
keywords: [Chia, Farming, Hardware, HDD, SSD, TCO, Power, Energy, Cryptocurrencies]
---
import { HddChart } from '@site/src/components/ChartComponent';

## Average Size HDD
We use the IDC Worldwide Hard Disk Drive Forecast, 2023–2027 to determine the average capacity disk drive across all markets, including consumer, enterprise, and hyperscale data centers. We use the previous year forecast to determine the number of drives on the network and the capacity distribution. The competitiveness of Chia farming has increased the mix of high capacity HDDs into the Netspace, thus overall decreasing the power consumption from previous estimates.

<HddChart />

## Effective Netspace
We use a distribution of average and competitive farmers to determine the average compression level, and estimate their raw capacity. We will need the raw Netspace to calculate the hard drive power usage.

| Assumptions                | Value | Description                                                                                                       |
| -------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------- |
| Percent Average Farmer     | 60%   | how much percent of the Netspace is average farmer, uses lower compression level and not the most competetive TCO |
| Percent Competetive Farmer | 40%   | how much percent of the Netspace is competetive farmer, uses higher compression level and more competetive TCO    |
| Overhead infra             | 50%   | power usage overhead of everything that isn't HDDs                                                                |
| Compression overhread ave  | 30%   | power usage overhead of an average farmer for implementing compression, CPU or GPU                                |
| Compression overhead comp  | 50%   | power usage overhead of an competetive farmer for implementing compression, CPU or GPU                            |
| compression ratio average  | 30%   | % reduction for average farmers, low to mid range C level                                                         |
| compression ratio comp     | 50%   | % reduction for competetive farmers, higher C level                                                               |
| Energy to plot kWh/TB      | 0.45  | based on average for GPU and CPU systems                                                                          |
| Life of a plot (years)     | 2.5   | reduced with major changes to compression, changes to proof of space                                              |

With the average drive size per year, we can estimate the W/TB per drive (and effectively the number of drives that make up the Netsapce). From there we can use the estimations above on the optimal TCO for Chia farming to estimate the overhead for supporting infrastrucure, including compute for decompression. Knowing the total average and competetive farmers W/TB we can multiply that by the total amount of raw Netspace (obtained from reducing the effective Netspace by the compression ratio)

Today's maximum plot compression is around 50% of the total plot size. We use a TCO model with various inputs of compute cost and power overhead to determine which levels of compression are optimal for average and competitive farmers. Plot compression increases the individual farmers power consumption, but has a limited effect on the overall Chia Netspace power consumption.

## Summary of equations

Annual Energy Plotting = Netspace Raw * (1000^2) * kWh/TB / life of plot

Netspace Raw = (Percent Average Farmer * Netspace * (1 - compression ratio average) ) + (Percent Competeive Farmer * Netspace * (1 - compression ratio comp) )

W/TB total = W/TB_drive + W/TB_infra + W/TB_compute

Total Network Power = Netspace Raw * W/TB total

Annual Energy = Total Network Power * 24 * 365

The Model can be found [here](https://docs.google.com/spreadsheets/d/1j6-JdZ2eGd55BoIorTfIugWeJKcE3EiEUrPxaT30jM4/edit?usp=sharing)