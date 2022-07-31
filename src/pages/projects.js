import Head from 'next/head';
import { Box } from '@theme-ui/components';
import { Content } from 'components/atoms';
import { ProjectsBanner, Footer } from 'components/molecules';
import Projects from 'components/organisms/Projects';

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Projects - Remilekun Salami</title>
      </Head>
      <ProjectsBanner />
      <Box sx={{ mb: '8rem' }}>
        <Content fluid>
          <Projects showAll />
        </Content>
      </Box>

      <Footer />
    </>
  );
};

export default ProjectsPage;
