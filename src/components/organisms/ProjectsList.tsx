import { Project } from '@/components/molecules';
import Link from 'next/link';
import { Flex, Box } from '@theme-ui/components';
import { OutlineButton } from '@/components/atoms';
import Slide from 'react-reveal/Slide';
import styled from '@emotion/styled';
import { ProjectType } from '@/types/common';

const ProjectsWrapper = styled(Flex)`
  flex-direction: column;

  .react-reveal {
    &:not(:last-child) {
      margin-bottom: 8rem;
    }
  }
`;

type ProjectsListProps = {
  projects: ProjectType[];
  showAll?: boolean;
};

const ProjectsList = ({ projects, showAll }: ProjectsListProps) => {
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
          <OutlineButton as={Link} href="/projects" fontSize="normal" size="large">
            View More
          </OutlineButton>
        </Box>
      )}
    </ProjectsWrapper>
  );
};

export default ProjectsList;
