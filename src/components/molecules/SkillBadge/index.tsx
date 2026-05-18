import React from 'react';
import { cn } from '@/lib/utils';
import { Typography } from '@/components/atoms';
import { getStrapiResourceImageURL } from '@/lib/utils';
import { SkillType } from '@/types/common';

type SkillBadgeProps = {
  className?: string;
  skill: SkillType;
};

export const SkillBadge = ({ className, skill }: SkillBadgeProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-[80px] bg-[#b0aff629] px-6 py-4 [&:not(:last-of-type)]:mr-6',
        className,
      )}
    >
      <img
        className="h-8 w-8 mr-4 shrink-0"
        alt={skill.name}
        src={getStrapiResourceImageURL(skill.icon)}
      />{' '}
      <Typography.Text color="primary" size="small">
        {skill.name}
      </Typography.Text>
    </div>
  );
};
