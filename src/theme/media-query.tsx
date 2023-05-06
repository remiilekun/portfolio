import { css } from '@emotion/react';
import { breakpoints } from './breakpoints';

type BreakpointsType = typeof breakpoints;
type BreakpointsKey = keyof BreakpointsType;

export type MQ = {
  [key in keyof BreakpointsType]: (strings: TemplateStringsArray, ...args: any[]) => string;
};

export const mq = (Object.keys(breakpoints).reduce((acc: any, label: string) => {
  acc[label] = (...args: any[]) => css`
    @media screen and (min-width: ${breakpoints[label as BreakpointsKey]}) {
      ${css(...args)}
    }
  `;
  return acc;
}, {}) as unknown) as MQ;
