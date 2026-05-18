import React from 'react';
import { cn } from '@/lib/utils';

type FormGroupProps = React.ComponentPropsWithoutRef<'div'>;

export const FormGroup = ({ className, children, ...rest }: FormGroupProps) => {
  return (
    <div className={cn('flex flex-col w-full [&:not(:last-child)]:mb-8', className)} {...rest}>
      {children}
    </div>
  );
};
