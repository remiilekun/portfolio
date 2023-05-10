'use client';
import { Box } from '@theme-ui/components';
import { Content } from '@/components/atoms';
import ProjectsList from '@/components/organisms/ProjectsList';
import { ProjectType } from '@/types/common';

type AllProjectsProps = {
  projects?: ProjectType[];
};

const AllProjects = ({ projects = [] }: AllProjectsProps) => {
  return (
    <Box sx={{ mb: '8rem' }}>
      <Content fluid>
        <ProjectsList projects={projects} showAll />
      </Content>
    </Box>
  );
};

export default AllProjects;
