import { GetStaticPropsResult } from "next/types";
import { MdxRemote } from "next-mdx-remote/types";
import hydrate from "next-mdx-remote/hydrate";
import fetch from "isomorphic-unfetch";

import { getContent } from "../lib/getMdxData";
import { mdxComponents } from "../components/mdxComponents";
import { DefaultLayout } from "../components/Layout";

interface HomeProps {
  metadata: {
    [key: string]: any;
  };
  mdxSource: MdxRemote.Source;
  energyConsumption: number;
  lastUpdate: string;
  netspaceHumanString: string;
}

export default function Home(props: HomeProps) {
  const content = hydrate(props.mdxSource, { components: mdxComponents });

  return (
    <DefaultLayout title={props.metadata.title}>
      <mdxComponents.p>
        {props.energyConsumption.toPrecision(3)} TWh is the annual power consumption as
        of {new Date(props.lastUpdate).toLocaleDateString()}, based on the
        current netspace of {props.netspaceHumanString}, as reported by{" "}
        <mdxComponents.a href="https://www.chiastatus.com/">
          Chiastatus.com
        </mdxComponents.a>.
      </mdxComponents.p>
      {content}
    </DefaultLayout>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<HomeProps>
> {
  const { mdxSource, metadata } = await getContent("index");

  const res = await fetch(process.env.NETSPACE_API_URL);
  if (!res.ok) {
    console.error(await res.json());
    throw new Error(
      `Could not call API endpoint to get current netspace! Status ${res.status}`
    );
  }

  const data = await res.json();
  console.log(data);

  if (!data.netspaceInBytes) throw new Error("Could not get current netspace!");

  const netspace = Number(data.netspaceInBytes);
  const netspaceInPib = netspace / 1.126e15;

  // Power consumption calc: https://docs.google.com/spreadsheets/d/1ytkoezTa2jqzolOJAj1-p2oFGiPQ0ocLpr78r8AhdLM
  // Constants
  const constants = {
    phase2: {
      startEib: 31.71,
      prevAnnualTWh: 0.28,

      highCapPercent: 0.4,
      lowCapPercent: 0.1,
      underutilizedPercent: 0.5,

      wPerTbHigh: 0.53,
      wPerTbLow: 1.45,
      wPerTbUnderutilized: 0.71,

      kWhToPlot1TB: 1.5,
      lifeOfPlotInYears: 5,
    },
  }

  // remove the Eib this phase started with
  const netspaceInEib = netspaceInPib / 1024 - constants.phase2.startEib

  const highCapPB =
    ((netspaceInEib * Math.pow(1024, 6)) / Math.pow(1000, 5)) * constants.phase2.highCapPercent
  const lowCapPB =
    ((netspaceInEib * Math.pow(1024, 6)) / Math.pow(1000, 5)) * constants.phase2.lowCapPercent
  const underutilizedPB =
    ((netspaceInEib * Math.pow(1024, 6)) / Math.pow(1000, 5)) *
    constants.phase2.underutilizedPercent

  const powerHighCapMW = (highCapPB * 1000 * constants.phase2.wPerTbHigh) / Math.pow(1000, 2)
  const powerLowCapMW = (lowCapPB * 1000 * constants.phase2.wPerTbLow) / Math.pow(1000, 2)
  const powerUnderutilizedMW =
    (underutilizedPB * 1000 * constants.phase2.wPerTbUnderutilized) / Math.pow(1000, 2)
  const totalPowerMW = powerHighCapMW + powerLowCapMW + powerUnderutilizedMW

  const annualEnergyPlotMWh =
    (((netspaceInEib * Math.pow(1024, 6)) / Math.pow(1000, 4)) * constants.phase2.kWhToPlot1TB) /
    constants.phase2.lifeOfPlotInYears /
    1000

  const annualEnergyFarmInMWh = totalPowerMW * 24 * 365

  const totalAnnualEnergyInTWh = (annualEnergyPlotMWh + annualEnergyFarmInMWh) / Math.pow(1000, 2)

  return {
    props: {
      metadata,
      mdxSource,
      energyConsumption: totalAnnualEnergyInTWh + constants.phase2.prevAnnualTWh,
      lastUpdate: data.updatedAt,
      netspaceHumanString: data.netspaceHumanString,
    },
  };
}
