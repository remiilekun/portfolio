import Head from 'next/head';
import { Content } from 'components/atoms';
import { ProjectsBanner } from 'components/molecules';
import Projects from 'components/organisms/Projects';

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Projects - Remilekun Salami</title>
      </Head>
      <ProjectsBanner />
      <Content fluid>
        <Projects showAll />
      </Content>
    </>
  );
};

export default ProjectsPage;
