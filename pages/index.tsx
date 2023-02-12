import Layout from "@/components/Layout";
import NextEvent from "@/components/NextEvent";
import { Inter } from "@next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>FrowJam</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextEvent
        title={"March Jam Session"}
        date={"Wednesday 15th March"}
        startTime={"8:00pm"}
        finishTime={"10.00pm"}
        venue={"The Scout Hut, Forest Row"}
        url="http://frowjam.co.uk"
      />
    </Layout>
  );
}
