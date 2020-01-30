import React from "react";
import Axios from "axios";
import Head from "next/head";
import Link from "next/link";

import withAnalytics from "~/hocs/withAnalytics";

const Detail = ({ user }) => {
  return (
    <>
      <Head>
        <title>{user.login}</title>
      </Head>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <h1>{user.login}</h1>
      <img src={user.avatar_url} alt="avatar do usuário" width="100" />
    </>
  );
};

Detail.getInitialProps = async ({ query }) => {
  const response = await Axios.get(
    `https://api.github.com/users/${query.user}`
  );
  return { user: response.data };
};

export default withAnalytics()(Detail);
