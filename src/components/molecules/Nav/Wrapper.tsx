import React from 'react';
import { cn } from '@/lib/utils';

type WrapperProps = {
  scrolled?: boolean;
} & React.ComponentPropsWithoutRef<'nav'>;

export const Wrapper = ({ scrolled, className, children, ...rest }: WrapperProps) => (
  <nav
    className={cn(
      'fixed top-0 left-0 z-[2] w-full py-8 transition-all duration-200',
      scrolled && 'bg-steel shadow-[0_5px_5px_rgba(0,0,0,0.15)]',
      className,
    )}
    {...rest}
  >
    {children}
  </nav>
);
