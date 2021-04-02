import Head from "next/head";
import { Container } from "./Container";
import { Navigation } from "./Navigation";

interface DefaultLayoutProps {
  title?: string;
  children?: React.ReactNode;
}

export const DefaultLayout = ({ title, children }: DefaultLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "Chia Power"}</title>
        {/* TODO add a favicon & more SEO <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="h-5 sm:h-10" />
      <Container>
        <Navigation />

        <h1 className="text-4xl tracking-wider text-gray-600 py-4">
          {title || "Chia Power"}
        </h1>

        <main className="font-serif">{children}</main>
      </Container>
    </>
  );
};
