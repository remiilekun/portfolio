import React from 'react';
import styled from '@emotion/styled';
import { Nav, Socials } from 'components/molecules';

const Wrapper = styled.div`
  position: relative;
  padding-top: 6rem;
  min-height: 100vh;
  padding-bottom: 6rem;

  ${({ theme }) => theme.mq.md`
  padding-left: 5rem;
  padding-bottom: 0;

  `}
`;

const Main = styled.main`
  width: 100%;
`;

const PageWrapper = ({ children }) => {
  return (
    <Wrapper>
      <Nav />
      <Socials />
      <Main>{children}</Main>
    </Wrapper>
  );
};

export default PageWrapper;
