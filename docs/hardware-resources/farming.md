---
sidebar_position: 2
id: Farming
title: Chia Farming
description: Overview of Chia farming
image: img/farm.png
keywords: [Chia, Farming, TCO, cryptocurrencies]
---

![alt_text](img/farm.png "farm")

Figure: Common hardware elements for Chia farming

Farming rewards are easy to calculate, with the equation of:

$EV Farming Rewards =  \cfrac{farming \space capacity}{Netspace} \times blocks \space per \space day \times farming \space rewards \space \space per \space block$

Example with 200TB farming on a 30EiB Netspace:

200TB / (30EiB * (1024^6) / (1000^4) ) * 4608 * 2 = 0.053290705 xch per day

A farmer can easily estimate how much XCH they will earn based on their farming capacity and current Netspace. The farming TCO model, which can also be found at [https://chiacalculator.com/roi](https://chiacalculator.com/roi), is the complete picture for all the total cost of ownership for Chia farming, as well as the expected rewards that require an estimate of Chia Netspace and price. The main inputs to the TCO model are a profile of the HDDs being used, including cost and power, as well as the supporting infrastructure for farming (JBODs, servers, networking, cables, desktops, etc.). The TCO model depends on how many years to depreciate the hardware for farming over, and what the residual value will be. In Chia farming, the capital expenditures and upfront costs of the HDDs make up a large percentage of the TCO - 89% in a mid-range farm with USA home electricity costs.

The upfront costs of storage make up the majority of the cost for Chia farming.

<iframe width="737" height="292" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSsAwQwAI0zyu6N9O9yxb7xcVWQyoPC__16NhP6IrDYya1uEGhtYStS72a8x5LCBkCan9DjM02X2Ohd/pubchart?oid=993557990&amp;format=interactive"></iframe>

Source: [Chia Farming Total Cost of Ownership Model](https://docs.google.com/spreadsheets/d/1IvS2MumVzQlmA74kZhCoRTUpz5Gbj0svzYWpNPTOJQY/edit?usp=sharing)

This TCO also shows why high capacity HDDs are very popular for Chia farming, they deliver the lowest TCO and have the smallest percentage
