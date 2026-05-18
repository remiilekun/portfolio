import { useMeasure } from 'react-use';
import { cn } from '@/lib/utils';
import { Image, Typography } from '@/components/atoms';
import { getStrapiResourceImageURL } from '@/lib/utils';
import { ProjectType } from '@/types/common';
import { SkillBadge } from '../SkillBadge';
import { ProjectLinks } from './ProjectLinks';

type ProjectProps = ProjectType;

export const Project = ({ coverImage, description, imageOrder = 1, link, logo, name, technologies }: ProjectProps) => {
  const [imageRef, { width }] = useMeasure<HTMLDivElement>();

  const height = () => {
    return (width * 62.5) / 100;
  };

  const renderLogo = () => {
    const src = getStrapiResourceImageURL(logo);
    if (src) {
      return <img className="h-16 w-28 mr-4 object-contain" src={src} alt={name} />;
    }
    return null;
  };

  return (
    <div className="flex flex-wrap w-full md:-mx-6 [&+&]:mt-32">
      <div className={cn('mb-6 w-full px-0 md:mb-0 md:w-1/2 md:px-6', imageOrder === 1 ? 'md:order-1' : 'md:order-0')}>
        <div ref={imageRef} className="relative w-full">
          <Image
            className="w-full overflow-hidden rounded-[1rem] bg-[#b0aff629] max-h-[21rem] sm:max-h-[30rem] md:max-h-[34rem]"
            imgClassName="h-auto w-full object-cover"
            style={{ height: `${height()}px` }}
            src={getStrapiResourceImageURL(coverImage)}
            alt=""
          />
        </div>
      </div>
      <div className="w-full px-0 md:w-1/2 md:px-6">
        <div className="flex items-center mb-6">
          {renderLogo()}
          <Typography.Text color="white" size="big" weight="bold">
            {name}
          </Typography.Text>
        </div>
        <Typography.Paragraph color="white" size="normal" className="mb-4 leading-[1.7]">
          {description}
        </Typography.Paragraph>
        <div className="flex flex-wrap items-center mb-4">
          {technologies?.data?.map(tech => (
            <SkillBadge key={tech.id} className="mb-2 mt-2" skill={tech.attributes} />
          ))}
        </div>
        <ProjectLinks link={link} />
      </div>
    </div>
  );
};
