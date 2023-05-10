'use client';
import React from 'react';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { Nav, Socials } from '@/components/molecules';
import { Box } from '@theme-ui/components';
import { rootStyles } from '@/rootStyles';
import ThemeProvider from '../ThemeProvider';

const Wrapper = styled.div`
  position: relative;
  padding-top: 6rem;
  min-height: 100vh;

  ${({ theme }) => theme.mq.md`
    padding-left: 5rem;
    padding-bottom: 0;
  `}
`;

type PageWrapperProps = {
  children: React.ReactNode | React.ReactNode[];
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <ThemeProvider>
      <Global styles={rootStyles} />
      <Wrapper>
        <Nav />
        <Box as="main" sx={{ width: '100%' }}>
          {children}
        </Box>
        <Socials />
      </Wrapper>
    </ThemeProvider>
  );
};

export default PageWrapper;
