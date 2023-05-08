'use client';
import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { theme } from '@/theme';

type ThemeProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  console.log('ln11', theme);
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

export default ThemeProvider;
