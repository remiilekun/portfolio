import { breakpoints } from './breakpoints';
import { buttons } from './buttons';
import { colors } from './colors';
import { font, heading } from './typography';
import { mq } from './media-query';

export const theme = {
  breakpoints: [...Object.values(breakpoints)],
  buttons,
  colors,
  font,
  heading,
  mq,
};

export type ThemeType = typeof theme;
