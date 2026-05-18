'use client';
import { Content } from '@/components/atoms';
import ProjectsList from '@/components/organisms/ProjectsList';
import { ProjectType } from '@/types/common';

type AllProjectsProps = {
  projects?: ProjectType[];
};

const AllProjects = ({ projects = [] }: AllProjectsProps) => {
  return (
    <div className="mb-32">
      <Content fluid>
        <ProjectsList projects={projects} showAll />
      </Content>
    </div>
  );
};

export default AllProjects;
