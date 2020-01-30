import React from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

import withAnalytics from "~/hocs/withAnalytics";

const Title = styled.h1`
  color: #069145;
  font-size: 40px;
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <Title>Hello World!!!</Title>
      <img src="/static/whatsapp-logo.png" alt="whatsapp logo" width="100" />
    </>
  );
};

export default withAnalytics()(Home);
