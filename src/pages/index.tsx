import React from 'react';
import Head from 'next/head';
import { HomeBanner, Footer } from '@/components/molecules';
import AboutMe from '@/components/organisms/AboutMe';
import MyProjects from '@/components/organisms/MyProjects';
import ContactMe from '@/components/organisms/ContactMe';
import api from '@/services/api';
import { AboutMeType, CompanyType, HomeBannerType, ProjectType, SkillType } from '@/types/common';

type HomePageProps = {
  about: AboutMeType;
  banner: HomeBannerType;
  companies: CompanyType[];
  projects: ProjectType[];
  skills: SkillType[];
};

const HomePage = ({ about, banner, companies, projects, skills }: HomePageProps) => {
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
  const resources = (await Promise.allSettled([
    api.get('/projects?populate=deep'),
    api.get('/skills?populate=deep'),
    api.get('/companies?populate=deep'),
    api.get('/banner?populate=deep'),
    api.get('/about-section?populate=deep'),
  ])) as { value: { data: { data: Record<string, any> } } }[];

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

export default HomePage;
