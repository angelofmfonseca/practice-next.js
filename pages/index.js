import React from "react";
import Link from "next/link";
import Head from "next/head";

import withAnalytics from "../src/hocs/withAnalytics";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <h1>Hello World!!!</h1>
    </>
  );
};

export default withAnalytics()(Home);
