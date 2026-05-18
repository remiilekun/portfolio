import React from 'react';
import { cn } from '@/lib/utils';

export const Brand = ({ className, children, ...rest }: React.ComponentPropsWithoutRef<'span'>) => (
  <span className={cn('cursor-pointer text-big font-bold tracking-[0.5px] text-white', className)} {...rest}>
    {children}
  </span>
);
