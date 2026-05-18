import React from 'react';
import { cn } from '@/lib/utils';
import { ColorName, textColor } from '@/lib/styles';

type LabelProps = {
  color?: ColorName;
} & React.ComponentPropsWithoutRef<'label'>;

export const Label = ({ color = 'white', className, children, ...rest }: LabelProps) => {
  return (
    <label className={cn('inline-block mb-2 text-normal font-normal', textColor[color], className)} {...rest}>
      {children}
    </label>
  );
};
