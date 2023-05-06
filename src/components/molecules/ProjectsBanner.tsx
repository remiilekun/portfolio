import React from 'react';
import styled from '@emotion/styled';
import { Content, Typography } from '@/components/atoms';

const Wrapper = styled.section`
  background-image: url("/assets/img/delivery-i.png");
  background-position: calc(100% + 4rem) 9rem;
  background-repeat: no-repeat;
  background-size: 28rem;
  padding-bottom: 20rem;
  padding-top: 5rem;

  ${({ theme }) => theme.mq.md`
  background-position: calc(100% + 1rem) 50%;
  background-size: 30rem;
  padding-bottom: 8rem;
  padding-top: 8rem;
  `}

  ${({ theme }) => theme.mq.lg`
  background-size: 40rem;
  padding: 12rem 0;
  `}

  ${({ theme }) => theme.mq.xl`
  background-position: calc(100%) 50%;
  background-size: 70rem;
  padding: 20rem 0;
  `}

`;

export const ProjectsBanner = () => {
  return (
    <Wrapper>
      <Content fluid>
        <Typography.Heading weight="bold">My Projects</Typography.Heading>
      </Content>
    </Wrapper>
  );
};
