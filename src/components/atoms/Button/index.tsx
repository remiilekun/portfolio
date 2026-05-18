import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { FontSize, FontWeight, fontSize as fontSizeMap, fontWeight as fontWeightMap } from '@/lib/styles';

const button = cva(
  'inline-flex items-center justify-center cursor-pointer appearance-none bg-transparent leading-none outline-none overflow-hidden no-underline whitespace-nowrap select-none transition-all duration-300 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        solid: 'rounded-[500px]',
        outline: 'border',
        link: 'rounded-none p-0! underline',
        plain: '',
      },
      size: {
        small: 'py-2 px-5 text-tiny',
        normal: 'py-3 px-7 text-normal',
        large: 'py-4 px-8 text-big',
      },
      color: {
        primary: '',
        white: '',
        black: '',
      },
      block: { true: 'w-full' },
      rounded: { true: 'rounded-[500px]' },
      cornered: { true: 'rounded-[1rem]' },
      loading: { true: 'relative pointer-events-none text-transparent' },
      noBorder: { true: 'border-0' },
    },
    compoundVariants: [
      { variant: 'solid', color: 'primary', class: 'bg-primary text-black' },
      { variant: 'solid', color: 'white', class: 'bg-white text-black' },
      { variant: 'solid', color: 'black', class: 'bg-black text-white' },
      { variant: 'outline', color: 'primary', class: 'border-primary text-primary hover:bg-primary/10' },
      { variant: 'outline', color: 'white', class: 'border-white text-white hover:bg-white/10' },
      { variant: 'outline', color: 'black', class: 'border-black text-black hover:bg-black/10' },
      { variant: 'link', color: 'primary', class: 'text-primary' },
      { variant: 'link', color: 'white', class: 'text-white' },
      { variant: 'link', color: 'black', class: 'text-black' },
    ],
    defaultVariants: {
      variant: 'solid',
      size: 'normal',
      color: 'primary',
    },
  },
);

type ButtonVariants = VariantProps<typeof button>;

export type ButtonProps = {
  as?: React.ElementType;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  href?: string;
  ref?: React.Ref<any>;
  rel?: string;
  target?: string;
} & ButtonVariants &
  Omit<React.ComponentPropsWithoutRef<'button'>, 'color'>;

export const Button = ({
  as,
  variant,
  size,
  color,
  block,
  rounded,
  cornered,
  loading,
  noBorder,
  fontSize,
  fontWeight = 'medium',
  className,
  children,
  ...rest
}: ButtonProps) => {
  const Component = as || 'button';

  return (
    <Component
      className={cn(
        button({ variant, size, color, block, rounded, cornered, loading, noBorder }),
        fontSize && fontSizeMap[fontSize],
        fontWeightMap[fontWeight],
        className,
      )}
      {...rest}
    >
      {children}
      {loading && (
        <span className="absolute left-1/2 top-1/2 block h-[1.2em] w-[1.2em] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white border-r-transparent border-t-transparent animate-spin-fast" />
      )}
    </Component>
  );
};
