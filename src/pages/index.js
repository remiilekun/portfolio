import React from 'react';
import Head from 'next/head';
import { HomeBanner } from 'components/molecules';
import AboutMe from 'components/organisms/AboutMe';

const Home = () => (
  <>
    <Head>
      <title>Remilekun Salami</title>
    </Head>
    <HomeBanner />
    <AboutMe />
  </>
);

export default Home;
