---
sidebar_position: 5
id: Timelord
title: Chia Timelords
description: Proof of Time, Verifiable Delay Function
keywords: [Chia, VDF, cryptocurrencies]
---

# Timelords
Proof of Time, Verifiable Delay Function
[Timelords](https://docs.chia.net/docs/02architecture/p2p-system#timelords) support the network by creating sequential proofs of time (using a [Verifiable Delay Function](https://docs.chia.net/docs/03consensus/vdfs), or VDF) and broadcasting them approximately every nine seconds. A VDF cannot be parallelized, and its output is deterministic -- if multiple VDFs are computing the same proof of time, they will all create the same output. Additionally, a VDF's output is easily verifiable. In other words, a timelord is able to prove that a certain amount of time has elapsed; this proof can be verified quickly and easily.

By using timelords, Chia's network protects against a type of grinding attack where a farmer could pretend to have more storage allocated than they actually do, effectively turning the consensus into Proof of Work. The fastest timelord on the network will broadcast challenges to the network's nodes, which are responsible for returning proofs of space. Because the algorithm is deterministic, only a single timelord is required to keep the network running. Most users do not run a timelord because there is no financial incentive to do so. Timelords therefore only account for a small percentage of the network's power consumption.

[Chia has funded the development](https://www.businesswire.com/news/home/20211013005324/en/Chia-Partners-With-Supranational-to-Create-Industry-Leading-Proof-of-Space-Time-Security) of an ASIC timelord which is expected to be out in the second half of 2022, and only consumes low single-digit W in power on a standard desktop that can also be used for farming.
