import { Project } from 'components/molecules';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Flex, Box } from '@theme-ui/components';
import { OutlineButton } from 'components/atoms';
import Slide from 'react-reveal/Slide';
import styled from '@emotion/styled';

const ProjectsWrapper = styled(Flex)`
  flex-direction: column;

  .react-reveal {
    &:not(:last-child) {
      margin-bottom: 8rem;
    }
  }
`;

const Projects = ({ projects, showAll }) => {
  const sortedProjects = projects.sort((a, b) => b.priority - a.priority);
  const data = showAll ? sortedProjects : [...sortedProjects.slice(0, 3)];

  return (
    <ProjectsWrapper>
      {data.map(({ id, ...project }, i) => (
        <Slide bottom key={id}>
          <Project {...project} imageOrder={i % 2} />
        </Slide>
      ))}

      {!showAll && projects?.length > 3 && (
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            py: '2rem',
            width: '100%',
          }}
        >
          <Link href="/projects" passHref>
            <OutlineButton fontSize="normal" size="large" as="a">
              View More
            </OutlineButton>
          </Link>
        </Box>
      )}
    </ProjectsWrapper>
  );
};

Projects.propTypes = {
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
  showAll: PropTypes.bool,
};

export default Projects;
