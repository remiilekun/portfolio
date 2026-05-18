'use client';
import React from 'react';
import { SectionHeader } from '@/components/molecules';
import { Content } from '@/components/atoms';
import { ProjectType } from '@/types/common';
import ProjectsList from '../ProjectsList';

type ProjectsProps = {
  projects?: ProjectType[];
} & React.ComponentPropsWithoutRef<'div'>;

const MyProjects = ({ projects = [], ...props }: ProjectsProps) => {
  return (
    <div className="mb-60" {...props}>
      <Content fluid>
        <SectionHeader>My Projects</SectionHeader>
        <ProjectsList projects={projects} />
      </Content>
    </div>
  );
};

export default MyProjects;
