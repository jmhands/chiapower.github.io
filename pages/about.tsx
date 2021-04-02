import { GetStaticPropsResult } from "next/types";
import Head from "next/head";
import Link from "next/link";

import { MdxRemote } from "next-mdx-remote/types";
import hydrate from "next-mdx-remote/hydrate";

import { getContent } from "../lib/getMdxData";
import { mdxComponents } from "../components/mdxComponents";
import { DefaultLayout } from "../components/Layout";

interface AboutProps {
  metadata: {
    [key: string]: any;
  };
  mdxSource: MdxRemote.Source;
}

export default function About(props: AboutProps) {
  const content = hydrate(props.mdxSource, { components: mdxComponents });

  return (
    <DefaultLayout title={`${props.metadata.title} - Chia Power`}>
      {content}
    </DefaultLayout>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<AboutProps>
> {
  const { mdxSource, metadata } = await getContent("about");

  return {
    props: {
      metadata,
      mdxSource,
    },
  };
}
