import PropTypes from 'prop-types';
import { Box } from '@theme-ui/components';
import { SectionHeader } from 'components/molecules';
import { Content } from 'components/atoms';
import Projects from './Projects';

const MyProjects = ({ projects, ...props }) => {
  return (
    <Box mb="15rem" {...props}>
      <Content fluid>
        <SectionHeader>My Projects</SectionHeader>
        <Projects projects={projects} />
      </Content>
    </Box>
  );
};

export default MyProjects;

MyProjects.propTypes = {
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
};
