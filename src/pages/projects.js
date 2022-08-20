import Head from 'next/head';
import { Box } from '@theme-ui/components';
import { Content } from 'components/atoms';
import { ProjectsBanner, Footer } from 'components/molecules';
import Projects from 'components/organisms/Projects';
import api from 'services/api';

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Projects - Remilekun Salami</title>
      </Head>
      <ProjectsBanner />
      <Box sx={{ mb: '8rem' }}>
        <Content fluid>
          <Projects projects={projects} showAll />
        </Content>
      </Box>

      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const resp = await api.get('/projects?populate=deep');
  const projects = resp.data.data;

  return {
    props: {
      projects,
    },
  };
}

export default ProjectsPage;
