// Shared className maps replacing the former Emotion theme tokens.

export type ColorName = 'black' | 'error' | 'inherit' | 'primary' | 'steelGrey' | 'white';
export type FontSize = 'tiny' | 'small' | 'normal' | 'medium' | 'big' | 'large' | 'inherit';
export type FontWeight = 'normal' | 'medium' | 'bold' | 'black';

export const textColor: Record<ColorName, string> = {
  black: 'text-black',
  error: 'text-error',
  inherit: 'text-inherit',
  primary: 'text-primary',
  steelGrey: 'text-steel',
  white: 'text-white',
};

export const borderColor: Record<ColorName, string> = {
  black: 'border-black',
  error: 'border-error',
  inherit: 'border-inherit',
  primary: 'border-primary',
  steelGrey: 'border-steel',
  white: 'border-white',
};

// Hex values for the rare cases that need a raw color (e.g. SVG fill props).
export const colorHex: Record<ColorName, string> = {
  black: '#000000',
  error: 'crimson',
  inherit: 'inherit',
  primary: '#b0aff6',
  steelGrey: '#1b1b2b',
  white: '#ffffff',
};

export const fontSize: Record<FontSize, string> = {
  tiny: 'text-tiny',
  small: 'text-small',
  normal: 'text-normal',
  medium: 'text-medium',
  big: 'text-big',
  large: 'text-large',
  inherit: '',
};

export const fontWeight: Record<FontWeight, string> = {
  normal: 'font-normal',
  medium: 'font-medium',
  bold: 'font-bold',
  black: 'font-black',
};
