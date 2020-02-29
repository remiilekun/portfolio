import React from 'react';
import Head from 'next/head';
import { HomeBanner } from 'components/molecules';
import AboutMe from 'components/organisms/AboutMe';
import MyWorks from 'components/organisms/MyWorks';
import ContactMe from 'components/organisms/ContactMe';

const Home = () => {
  return (
    <>
      <Head>
        <title>Remilekun Salami</title>
      </Head>
      <HomeBanner />
      <AboutMe id="about" />
      <MyWorks id="works" />
      <ContactMe id="contact" />
    </>
  );
};

export default Home;
