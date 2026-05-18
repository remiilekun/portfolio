import React from 'react';
import { cn } from '@/lib/utils';

export const NavList = ({ className, children, ...rest }: React.ComponentPropsWithoutRef<'ul'>) => (
  <ul className={cn('relative flex flex-col items-center md:flex-row', className)} {...rest}>
    {children}
  </ul>
);
