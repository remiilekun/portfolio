import React from 'react';
import { HomeBanner, Footer } from '@/components/molecules';
import AboutMe from '@/components/organisms/AboutMe';
import MyProjects from '@/components/organisms/MyProjects';
import ContactMe from '@/components/organisms/ContactMe';
import { getAbout, getBanner, getCompanies, getProjects, getSkills } from '@/services/api';

const HomePage = async () => {
  const projectsData = getProjects();
  const skillsData = getSkills();
  const companiesData = getCompanies();
  const bannerData = getBanner();
  const aboutData = getAbout();

  const [projects, skills, companies, banner, about] = await Promise.all([
    projectsData,
    skillsData,
    companiesData,
    bannerData,
    aboutData,
  ]);

  return (
    <>
      <HomeBanner data={banner} />
      <AboutMe id="about" data={about} skills={skills} companies={companies} />
      <MyProjects id="projects" projects={projects} />
      <ContactMe id="contact" />
      <Footer />
    </>
  );
};

export default HomePage;
