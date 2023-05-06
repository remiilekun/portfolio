import React from 'react';
import styled from '@emotion/styled';
import { Nav, Socials } from '@/components/molecules';

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
  return (
    <Wrapper>
      <Nav />
      <Main>{children}</Main>
      <Socials />
    </Wrapper>
  );
};

export default PageWrapper;
