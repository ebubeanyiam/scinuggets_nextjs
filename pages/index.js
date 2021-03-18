import Head from "next/head";
import { useRouter } from "next/router";

import Loader from "../src/components/Loader";

import Layout from "../src/components/Layout";
import { User } from "../src/contexts/User";

export default function Home() {
  const user = User();
  if (!user) {
    useRouter().push("/signin");
    return <Loader />;
  }

  return (
    <Layout>
      <div>
        <Head>
          <title>Scinnuggets</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    </Layout>
  );
}
