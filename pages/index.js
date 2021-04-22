import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Hero from "../src/assets/index/Hero";
import TrendingPosts from "../src/assets/index/TrendingPosts";
import AllPosts from "../src/assets/index/AllPosts";
import ForYou from "../src/assets/index/ForYou";

import Loader from "../src/components/Loader";

import Layout from "../src/components/Layout";
import { User } from "../src/contexts/User";

export default function Home() {
  const user = User();
  const [trend, setTrend] = useState([]);
  const [custom, setCustom] = useState([]);

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

        <div className="homepage">
          {user === null ? (
            <Hero />
          ) : (
            <ForYou trend={trend} setCustom={setCustom} />
          )}
          <TrendingPosts setTrend={setTrend} />
          <AllPosts custom={custom} trend={trend} />
        </div>
      </div>
    </Layout>
  );
}
