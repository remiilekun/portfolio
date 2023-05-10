import { Metadata } from 'next';
import { ProjectsBanner, Footer } from '@/components/molecules';
import { getProjects } from '@/services/api';
import AllProjects from '@/components/organisms/AllProjects';

const ProjectsPage = async () => {
  const projects = await getProjects();

  return (
    <>
      <ProjectsBanner />
      <AllProjects projects={projects} />
      <Footer />
    </>
  );
};

export const metadata: Metadata = {
  title: 'Projects - Remilekun Salami',
};

export default ProjectsPage;
