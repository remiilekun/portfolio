import { Box, BoxProps } from '@theme-ui/components';
import { SectionHeader } from '@/components/molecules';
import { Content } from '@/components/atoms';
import { ProjectType } from '@/types/common';
import ProjectsList from './ProjectsList';

type ProjectsProps = {
  projects: ProjectType[];
} & BoxProps;

const MyProjects = ({ projects, ...props }: ProjectsProps) => {
  return (
    <Box mb="15rem" {...props}>
      <Content fluid>
        <SectionHeader>My Projects</SectionHeader>
        <ProjectsList projects={projects} />
      </Content>
    </Box>
  );
};

export default MyProjects;
