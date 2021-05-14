import React from 'react';
import Head from 'next/head';
import { HomeBanner, Footer } from 'components/molecules';
import AboutMe from 'components/organisms/AboutMe';
import MyProjects from 'components/organisms/MyProjects';
import ContactMe from 'components/organisms/ContactMe';

const Home = () => {
  return (
    <>
      <Head>
        <title>Remilekun Salami</title>
      </Head>
      <HomeBanner />
      <AboutMe id="about" />
      <MyProjects id="projects" />
      <ContactMe id="contact" />
      <Footer />
    </>
  );
};

export default Home;
