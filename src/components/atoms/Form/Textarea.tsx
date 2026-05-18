import React from 'react';
import { cn } from '@/lib/utils';
import { ColorName, textColor } from '@/lib/styles';

type TextareaProps = {
  textColor?: ColorName;
} & React.ComponentPropsWithoutRef<'textarea'>;

export const Textarea = ({ textColor: color = 'white', className, ...rest }: TextareaProps) => {
  return (
    <textarea
      className={cn(
        'block w-full m-0 resize-none appearance-none border-none rounded-[2rem] bg-[#b0aff629] px-8 py-4 text-normal leading-[1.2] outline-none',
        'disabled:bg-[rgba(128,128,128,0.12)]',
        'placeholder:text-white/16 placeholder:text-small',
        textColor[color],
        className,
      )}
      {...rest}
    />
  );
};
