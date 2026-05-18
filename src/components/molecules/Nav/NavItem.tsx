import React from 'react';
import { cn } from '@/lib/utils';

export const NavItem = ({ className, children, ...rest }: React.ComponentPropsWithoutRef<'li'>) => (
  <li
    className={cn('[&:not(:last-child)]:mb-12 md:[&:not(:last-child)]:mb-0 md:[&:not(:last-child)]:mr-8', className)}
    {...rest}
  >
    {children}
  </li>
);
