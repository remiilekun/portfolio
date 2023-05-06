import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { HomeBanner, Footer } from '@/components/molecules';
import AboutMe from '@/components/organisms/AboutMe';
import MyProjects from '@/components/organisms/MyProjects';
import ContactMe from '@/components/organisms/ContactMe';
import api from '@/services/api';

const Home = ({ companies, projects, skills, banner, about }) => {
  return (
    <>
      <Head>
        <title>Remilekun Salami</title>
      </Head>
      <HomeBanner data={banner} />
      <AboutMe id="about" data={about} skills={skills} companies={companies} />
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
    api.get('/banner?populate=deep'),
    api.get('/about-section?populate=deep'),
  ]);
  const projects = resources[0].value.data.data;
  const skills = resources[1].value.data.data;
  const companies = resources[2].value.data.data;
  const banner = resources[3].value.data;
  const about = resources[4].value.data;

  return {
    props: {
      projects,
      skills,
      companies,
      banner,
      about,
    },
  };
}

export default Home;

Home.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      coverImage: PropTypes.object,
      description: PropTypes.string.isRequired,
      imageOrder: PropTypes.number,
      link: PropTypes.shape({
        android: PropTypes.string,
        ios: PropTypes.string,
        web: PropTypes.string,
      }),
      logo: PropTypes.any,
      name: PropTypes.string.isRequired,
      technologies: PropTypes.shape({
        data: PropTypes.array.isRequired,
      }),
    }),
  ),
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.object,
      name: PropTypes.string,
    }).isRequired,
  ),
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.array.isRequired,
      end_date: PropTypes.string,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      start_date: PropTypes.string.isRequired,
    }),
  ),
  banner: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  about: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    avatar: PropTypes.object,
  }).isRequired,
};
