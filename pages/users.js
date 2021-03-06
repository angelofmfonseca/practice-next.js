import React from "react";
import Axios from "axios";
import Link from "next/link";
import Head from "next/head";

import withAnalytics from "~/hocs/withAnalytics";

const User = ({ users }) => {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <Link href="/">
        <a>Home</a>
      </Link>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.login}
            <Link href={`/users/${user.login}`}>
              <a>Acessar</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

User.getInitialProps = async () => {
  const response = await Axios.get(
    "https://api.github.com/orgs/rocketseat/members"
  );
  return { users: response.data };
};

export default withAnalytics()(User);
