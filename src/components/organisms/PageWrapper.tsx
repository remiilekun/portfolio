'use client';
import React from 'react';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { Nav, Socials } from '@/components/molecules';
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

const Main = styled.main`
  width: 100%;
`;

type PageWrapperProps = {
  children: React.ReactNode | React.ReactNode[];
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  console.log('ln29', 'hello worl');
  return (
    <ThemeProvider>
      <Global styles={rootStyles} />
      <Wrapper>
        <Nav />
        <Main>{children}</Main>
        <Socials />
      </Wrapper>
    </ThemeProvider>
  );
};

export default PageWrapper;
