import '@emotion/react';
import { ThemeType } from '@/theme';

declare module '@emotion/react' {
  // eslint-disable-next-line
  interface Theme extends ThemeType {}
}
