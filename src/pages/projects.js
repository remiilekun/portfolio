import Head from 'next/head';
import { Content } from 'components/atoms';
import { ProjectsBanner, Footer } from 'components/molecules';
import Projects from 'components/organisms/Projects';

import { Box } from 'rebass';

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Projects - Remilekun Salami</title>
      </Head>
      <ProjectsBanner />
      <Box mb="8rem">
        <Content fluid>
          <Projects showAll />
        </Content>
      </Box>

      <Footer />
    </>
  );
};

export default ProjectsPage;
