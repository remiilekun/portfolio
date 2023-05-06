import React from 'react';
import styled from '@emotion/styled';
import { Flex, Box } from '@theme-ui/components';
import { Content, OutlineButton, Typography } from '@/components/atoms';
import { RightArrowIcon } from '@/components/icons';
import Link from 'next/link';
import { HomeBannerType } from '@/types/common';

const Wrapper = styled.section`
  background-image: url("/assets/img/coding-i.png");
  background-position: calc(100% + 4rem) 0;
  background-repeat: no-repeat;
  background-size: 28rem;
  padding-bottom: 15rem;
  padding-top: 24rem;

  ${({ theme }) => theme.mq.sm`
  background-position: calc(100% + 2rem) 0;
  `}

  ${({ theme }) => theme.mq.md`
  background-position: calc(100% + 1rem) 0;
  background-size: 30rem;
  padding-top: 8rem;
  padding-bottom: 10rem;
  `}

  ${({ theme }) => theme.mq.lg`
  background-position: calc(100%) 5rem;
  background-size: 40rem;
  padding-top: 18rem;
  padding-bottom: 15rem;
  `}

  ${({ theme }) => theme.mq.xl`
  background-position: calc(100%) 0;
  background-size: 70rem;
  padding-top: 25rem;
  padding-bottom: 30rem;
  `}

`;

const Greeting = styled(Typography.Heading)`
  margin-bottom: 1rem;
`;

const Name = styled(Typography.Heading)`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 3rem;
`;

const Summary = styled(Typography.Paragraph)`
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 50rem;

  ${({ theme }) => theme.mq.md`
  max-width: 40rem;
  `}

  ${({ theme }) => theme.mq.lg`
  max-width: 50rem;
  `}
`;

type HomeBannerProps = {
  data: HomeBannerType;
};

export const HomeBanner = ({ data }: HomeBannerProps) => {
  return (
    <Wrapper>
      <Content fluid>
        <Flex>
          <Box sx={{ width: ['100%', null, '83.3%', '66.67%', '50%'] }}>
            <Greeting type="h2">{data.title}</Greeting>
            <Name type="h1">{data.subtitle}</Name>
            <Summary>{data.description}</Summary>
            <Link href="#contact" passHref>
              <OutlineButton fontSize="small" size="large" as="a" className="nl">
                Say Hello
                <RightArrowIcon style={{ marginLeft: '1.5rem' }} />
              </OutlineButton>
            </Link>
          </Box>
        </Flex>
      </Content>
    </Wrapper>
  );
};
