import React from 'react';
import Head from 'next/head';
import { HomeBanner } from 'components/molecules';
import AboutMe from 'components/organisms/AboutMe';
import MyWorks from 'components/organisms/MyWorks';

const Home = () => (
  <>
    <Head>
      <title>Remilekun Salami</title>
    </Head>
    <HomeBanner />
    <AboutMe />
    <MyWorks />
  </>
);

export default Home;
