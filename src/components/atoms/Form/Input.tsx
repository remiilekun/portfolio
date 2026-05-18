import React from 'react';
import { cn } from '@/lib/utils';
import { ColorName, textColor } from '@/lib/styles';

type InputProps = {
  textColor?: ColorName;
} & React.ComponentPropsWithoutRef<'input'>;

export const Input = ({ textColor: color = 'white', className, ...rest }: InputProps) => {
  return (
    <input
      className={cn(
        'block w-full m-0 h-[4.5rem] appearance-none border-none rounded-[5rem] bg-[#b0aff629] px-8 py-2 text-normal leading-[1.2] outline-none',
        'disabled:bg-[rgba(128,128,128,0.12)]',
        'placeholder:text-white/16 placeholder:text-small',
        textColor[color],
        className,
      )}
      {...rest}
    />
  );
};
