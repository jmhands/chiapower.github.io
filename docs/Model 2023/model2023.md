---
title: Chiapower Energy Model 2023
description: Chiapower Energy Model
keywords: [Chia, Farming, Hardware, HDD, SSD, TCO, Power, Energy, Cryptocurrencies]
---
import ChartComponent from '@site/src/components/ChartComponent';

## Average Size HDD
We use the IDC Worldwide Hard Disk Drive Forecast, 2023–2027 to determine the average capacity disk drive across all markets, including consumer, enterprise, and hyperscale data centers. We use the previous year forecast to determine the number of drives on the network and the capacity distribution. The competitiveness of Chia farming has increased the mix of high capacity HDDs into the Netspace, thus overall decreasing the power consumption from previous estimates.

<ChartComponent />




## Effective Netspace
We use a distribution of average and competitive farmers to determine the average compression level, and estimate their raw capacity. We will need the raw Netspace to calculate the hard drive power usage.

| Assumptions                | Value | Description                                                                                                       |
| -------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------- |
| Percent Average Farmer     | 60%   | how much percent of the Netspace is average farmer, uses lower compression level and not the most competetive TCO |
| Percent Competetive Farmer | 40%   | how much percent of the Netspace is competetive farmer, uses higher compression level and more competetive TCO    |
| Overhead infra             | 50%   | power usage overhead of everything that isn't HDDs                                                                |
| Compression overhread ave  | 30%   | power usage overhead of an average farmer for implementing compression, CPU or GPU                                |
| Compression overhead comp  | 50%   | power usage overhead of an competetive farmer for implementing compression, CPU or GPU                            |
| C level ave                | 30%   | % reduction for average farmers, low to mid range C level                                                         |
| C level comp               | 50%   | % reduction for competetive farmers, higher C level                                                               |
| Energy to plot 1TB kWh     | 0.45  | based on average for GPU and CPU systems                                                                          |
| Life of a plot (years)     | 2.5   | reduced with major changes to compression, changes to proof of space                                              |





### Summary of equations

$P_h (MW) = (Netspace (EiB) \times (1024^6) / (1000^4)) \times (TB/W_h / 1000^2) \times \% Netspace \space high-cap$
