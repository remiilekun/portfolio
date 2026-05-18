import { Project } from '@/components/molecules';
import Link from 'next/link';
import { Button } from '@/components/atoms';
import { Slide } from 'react-awesome-reveal';
import { ProjectType } from '@/types/common';

type ProjectsListProps = {
  projects: ProjectType[];
  showAll?: boolean;
};

const ProjectsList = ({ projects, showAll }: ProjectsListProps) => {
  const sortedProjects = projects.sort((a, b) => b.priority - a.priority);
  const data = showAll ? sortedProjects : [...sortedProjects.slice(0, 3)];

  return (
    <div className="flex flex-col [&_.reveal-item:not(:last-child)]:mb-32">
      {data.map(({ id, ...project }, i) => (
        <Slide direction="up" triggerOnce className="reveal-item" key={id}>
          <Project {...project} imageOrder={i % 2} />
        </Slide>
      ))}

      {!showAll && projects?.length > 3 && (
        <div className="flex w-full items-center justify-center py-8">
          <Button variant="outline" color="white" as={Link} href="/projects" fontSize="normal" size="large">
            View More
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProjectsList;
