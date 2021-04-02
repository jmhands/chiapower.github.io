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
  kwOfNetwork: number;
  lastUpdate: string;
  netspaceHumanString: string;
}

export default function Home(props: HomeProps) {
  const content = hydrate(props.mdxSource, { components: mdxComponents });

  return (
    <DefaultLayout title={props.metadata.title}>
      <mdxComponents.p>
        {Math.round(props.kwOfNetwork)} kW is the average power consumption as
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
  const kwOfNetwork =
    (((netspaceInPib * 0.65 * Math.pow(1024, 5)) / Math.pow(1000, 4)) * 0.72) /
      1000 +
    (((netspaceInPib * 0.3 * Math.pow(1024, 5)) / Math.pow(1000, 4)) * 2.73) /
      1000 +
    (((netspaceInPib * 0.5 * Math.pow(1024, 5)) / Math.pow(1000, 4)) * 0.1) /
      1000;

  return {
    props: {
      metadata,
      mdxSource,
      kwOfNetwork,
      lastUpdate: data.updatedAt,
      netspaceHumanString: data.netspaceHumanString,
    },
  };
}
