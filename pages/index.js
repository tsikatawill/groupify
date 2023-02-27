import { Hero, UseCase } from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Groupify - Effortless Grouping</title>
        <meta
          name="description"
          content="Streamline your group projects with Groupify - the effortless way to
            group teams."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <Hero />

      <UseCase />
    </>
  );
}
