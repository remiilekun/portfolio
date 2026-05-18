import React from 'react';
import { cn } from '@/lib/utils';
import { Typography } from '@/components/atoms';
import { Lines } from './Lines';
import { Arrow } from './Arrow';

type SectionHeaderProps = {
  children: React.ReactNode | React.ReactNode[];
} & React.ComponentPropsWithoutRef<'div'>;

export const SectionHeader = ({ children, className, ...props }: SectionHeaderProps) => {
  return (
    <div className={cn('flex items-center mb-20', className)} {...props}>
      <Lines />
      <Typography.Heading type="h3" weight="bold" className="whitespace-nowrap">
        {children}
      </Typography.Heading>
      <Arrow />
    </div>
  );
};
