import React from 'react';
import { cn } from '@/lib/utils';

type ContentProps = {
  children?: React.ReactNode;
  className?: string;
  fluid?: boolean;
} & React.ComponentPropsWithoutRef<'div'>;

export const Content = ({ children, className, fluid, ...rest }: ContentProps) => {
  return (
    <div
      className={cn(
        'block mx-auto w-full max-w-[144rem] px-8',
        fluid ? 'md:px-36' : 'md:px-48',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
