import Layout from "@/components/Layout";
import NextEvent from "@/components/NextEvent";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>FrowJam</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/frowjam-icon.png" />
      </Head>
      <NextEvent
        title="December Jam Session"
        date="2023-12-20"
        startTime="20:00"
        finishTime="22:00"
        venue="The Scout Hut, Forest Row"
        url="https://fb.me/e/3naFqW91A"
      />
    </Layout>
  );
}
