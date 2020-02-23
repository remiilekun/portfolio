import React from 'react';
import Head from 'next/head';
import { Nav } from 'components/molecules';

const Home = () => (
  <div style={{ height: '200vh' }}>
    <Head>
      <title>Home</title>
    </Head>

    <Nav />
    <p>Hello world</p>
  </div>
);

export default Home;
