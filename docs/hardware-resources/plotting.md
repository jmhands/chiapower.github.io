---
sidebar_position: 4
title: Plotting
---

The Chia plotting workload is only required to be performed once per plot during the initial creation, where the final plot file lives on a low power storage device for the remainder of the years of farming. The [plotting](https://www.chia.net/2021/02/22/plotting-basics.html) process involves the creation of the cryptographic data that is stored on the farming devices, and requires compute and ephemeral storage resources to create.

Plotting is a one time energy consumption use per the total Netspace, as the data to be stored for farming only needs to be created once. More details about the plotting process can be found in the [Chia Proof of Space Construction](https://www.chia.net/assets/Chia_Proof_of_Space_Construction_v1.1.pdf) document. The Chia community has [reference hardware posted ](https://github.com/Chia-Network/chia-blockchain/wiki/Reference-Plotting-Hardware)with the amount of data that various machines can plot per day, and the average power consumption of the systems can be measured or estimated very accurately (since these are common consumer or server platforms). Users also record the amount of data they are able to plot per day per machine making it practical to estimate the energy consumption to create the Chia plots, estimated in kWh/TiB plotted.

# Plot Compression
In Chia disk space is intended to be the scarce resource for blockchain consensus, not compute cycles, hence the name…Proofs of Space. Plotting can take time since it only has to be performed once per plot, and the proving (farming & harvesting) needs to be fast and efficient. Chia released some sample code before mainnet launch of how this may actually work with a Hellman Attack. In Chia, with plotting tables, performing these time space (or compute / space) gets exponentially harder as you traverse down the tables. Bram chose seven tables as a reasonable tradeoff between the amount of disk io required for a full proof of space lookup, protection from time space tradeoffs, and plotting time.

Key takeaway is that ion time / space tradeoffs, plot size decreases linearly while compute required for farming increases exponentially.

Plot compression is available from Chia through Bladebit and the official Chia blockchain application as of Chia version 2.0, and through 3rd party plotting and farming software such as Gigahorse and nossd.

Today's maximum plot compression is around 50% of the total plot size. We use a TCO model with various inputs of compute cost and power overhead to determine which levels of compression are optimal for average and competitive farmers.
Impact to power
Plot compression increases the individual farmers power consumption, but has a limited effect on the overall Chia Netspace power consumption.

# GPU plotting
GPUs make plotting 2.5x more efficient than the previous most efficient in memory plotting with CPU, and 5x more efficient than desktop plotting. We are measuring the efficiency in energy (kWh) per terabyte plotted. This means farmers can get their space plotted faster, reduce the electricity cost for plotting, and reduce the global energy consumption for plotting. We use a weighted average of CPU and GPU plotting efficiency to determine the amount of power being used to plot, and with new plot compression formats we decrease the lifetime of a plot from 5 years to 2.5 years.

# Plot Grinding
We can determine if there is any part of the Netspace that is spoofed by plot grinding by looking at the economics. No known plot grinding software is generally available, everything was theoretical in the January blog from Chia Network.