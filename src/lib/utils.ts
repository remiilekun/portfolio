import clsx, { type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

// Teach tailwind-merge about the custom `--text-*` tokens defined in globals.css
// so it can tell font-size utilities apart from text-color / text-align ones.
const twMerge = extendTailwindMerge({
  override: {
    // Our custom `--text-*` tokens don't bundle a line-height (unlike stock
    // Tailwind sizes), so a font-size class must NOT strip an explicit `leading-*`.
    conflictingClassGroups: {
      'font-size': [],
    },
  },
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'tiny',
            'small',
            'normal',
            'medium',
            'big',
            'large',
            'h1-mobile',
            'h2-mobile',
            'h3-mobile',
            'h1-desktop',
            'h2-desktop',
            'h3-desktop',
          ],
        },
      ],
    },
  },
});

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const validateEmail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const getStrapiResourceImageURL = (icon?: { data?: { attributes?: { url?: string } } }) => {
  return icon?.data?.attributes?.url || '';
};
