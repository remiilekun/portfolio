import React from 'react';
import { cn } from '@/lib/utils';

// Anchor used inside a project's action buttons — lays out label + icon inline.
export const ProjectLink = ({ className, ...props }: React.ComponentPropsWithoutRef<'a'>) => (
  <a {...props} className={cn('flex no-underline [&_svg]:ml-4', className)} />
);
