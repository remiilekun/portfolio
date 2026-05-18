import React from 'react';
import { cn } from '@/lib/utils';

export const MobileWrapper = ({ className, children, ...rest }: React.ComponentPropsWithoutRef<'div'>) => (
  <div className={cn('flex', className)} {...rest}>
    {children}
  </div>
);
