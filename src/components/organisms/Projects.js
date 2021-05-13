import { useMemo } from 'react';
import { Project } from 'components/molecules';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Flex, Box } from 'rebass';
import { projects } from 'data/projects';
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

const Projects = ({ showAll }) => {
  const data = useMemo(() => {
    return showAll ? projects : [...projects.slice(0, 3)];
  }, []);

  return (
    <ProjectsWrapper>
      {data.map(({ id, ...project }, i) => (
        <Slide bottom key={id}>
          <Project {...project} imageOrder={i % 2} />
        </Slide>
      ))}

      {!showAll && projects?.length > 3 && (
        <Box width="1" py="2rem" display="flex" alignItems="center" justifyContent="center">
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
  showAll: PropTypes.bool,
};

Projects.defaultProps = {
  showAll: false,
};

export default Projects;
