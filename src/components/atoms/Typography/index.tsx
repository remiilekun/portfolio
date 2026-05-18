import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// Shared variant table for every Typography element.
const typography = cva('', {
  variants: {
    color: {
      primary: 'text-primary',
      white: 'text-white',
      black: 'text-black',
      error: 'text-error',
      steelGrey: 'text-steel',
      inherit: 'text-inherit',
    },
    size: {
      tiny: 'text-tiny',
      small: 'text-small',
      normal: 'text-normal',
      medium: 'text-medium',
      big: 'text-big',
      large: 'text-large',
      inherit: '',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
      black: 'font-black',
    },
    align: {
      left: 'text-left',
      right: 'text-right',
      center: 'text-center',
      initial: '', // text-align: initial is the default
    },
    ellipsize: {
      true: 'overflow-hidden text-ellipsis whitespace-nowrap',
    },
  },
});

type TypographyVariants = VariantProps<typeof typography>;

type HeadingType = 'h1' | 'h2' | 'h3';

// `--text-h*-mobile` base size, `sm:` switches to the desktop scale.
const headingSize: Record<HeadingType, string> = {
  h1: 'text-h1-mobile sm:text-h1-desktop',
  h2: 'text-h2-mobile sm:text-h2-desktop',
  h3: 'text-h3-mobile sm:text-h3-desktop',
};

type HeadingProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  type?: HeadingType;
} & Pick<TypographyVariants, 'color' | 'weight' | 'align' | 'ellipsize'>;

export const Heading = ({
  align,
  children,
  className,
  color = 'white',
  ellipsize,
  style,
  type = 'h1',
  weight = 'normal',
}: HeadingProps) => {
  const Tag = type;
  return (
    <Tag
      className={cn(
        'block relative m-0 leading-none',
        typography({ color, weight, align, ellipsize }),
        headingSize[type],
        className,
      )}
      style={style}
    >
      {children}
    </Tag>
  );
};

type TextProps = {
  children?: React.ReactNode;
  className?: string;
  decoration?: string;
  style?: React.CSSProperties;
} & Pick<TypographyVariants, 'color' | 'size' | 'weight' | 'align' | 'ellipsize'>;

export const Paragraph = ({
  align,
  children,
  className,
  color = 'white',
  decoration,
  ellipsize,
  size = 'normal',
  style,
  weight = 'normal',
}: TextProps) => {
  return (
    <p
      className={cn('block m-0 leading-none', typography({ color, size, weight, align, ellipsize }), className)}
      style={{ ...(decoration ? { textDecoration: decoration } : {}), ...style }}
    >
      {children}
    </p>
  );
};

export const Text = ({
  align,
  children,
  className,
  color = 'inherit',
  decoration,
  ellipsize,
  size = 'normal',
  style,
  weight = 'normal',
}: TextProps) => {
  return (
    <span
      className={cn('inline leading-none', typography({ color, size, weight, align, ellipsize }), className)}
      style={{ ...(decoration ? { textDecoration: decoration } : {}), ...style }}
    >
      {children}
    </span>
  );
};

const Typography = {
  Heading,
  Paragraph,
  Text,
};

export default Typography;
