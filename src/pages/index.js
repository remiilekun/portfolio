import React from 'react';
import Head from 'next/head';
import { HomeBanner, Footer } from 'components/molecules';
import AboutMe from 'components/organisms/AboutMe';
import MyProjects from 'components/organisms/MyProjects';
import ContactMe from 'components/organisms/ContactMe';
import api from 'services/api';

const Home = ({ companies, projects, skills }) => {
  return (
    <>
      <Head>
        <title>Remilekun Salami</title>
      </Head>
      <HomeBanner />
      <AboutMe id="about" skills={skills} companies={companies} />
      <MyProjects id="projects" projects={projects} />
      <ContactMe id="contact" />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const resources = await Promise.allSettled([
    api.get('/projects?populate=deep'),
    api.get('/skills?populate=deep'),
    api.get('/companies?populate=deep'),
  ]);
  const projects = resources[0].value.data.data;
  const skills = resources[1].value.data.data;
  const companies = resources[2].value.data.data;

  return {
    props: {
      projects,
      skills,
      companies,
    },
  };
}

export default Home;
