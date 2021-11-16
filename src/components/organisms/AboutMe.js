import React from 'react';
import styled from '@emotion/styled';
import { SectionHeader, SkillBadge } from 'components/molecules';
import { Content, Typography, Image } from 'components/atoms';
import { Box, Flex } from 'rebass';
import { useMeasure } from 'react-use';
import { skills } from 'data/skills';
import Fade from 'react-reveal/Fade';
import Companies from './Companies';

const Wrapper = styled.section`
  margin-bottom: 15rem;
`;

const Text = styled(Typography.Paragraph)`
  font-size: ${({ theme }) => theme.font.size.normal};
  line-height: 2;
`;

const PictureWrapper = styled.div`
  margin: 0 auto;
  max-width: 25rem;

  ${({ theme }) => theme.mq.sm`
    max-width: 40rem;
  `}

  ${({ theme }) => theme.mq.md`
    max-width: 45rem;
  `}
`;

const Picture = styled(Image)`
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  height: ${({ height }) => height}px;
  position: relative;
  width: 100%;

  img {
    border-radius: 1rem;
    bottom: 1.5rem;
    height: ${({ height }) => height}px;
    left: 1.5rem;
    object-fit: cover;
    position: absolute;
    width: 100%;
  }
`;

const SubSection = styled.div`
  & + & {
    margin-top: 3rem;
  }
`;

const Subtitle = styled(Typography.Paragraph)`
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.font.size.big};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

const AboutMe = props => {
  const [imageRef, { width }] = useMeasure();

  return (
    <Wrapper {...props}>
      <Content fluid>
        <SectionHeader>About Me</SectionHeader>

        <SubSection>
          <Flex mx="-1.5rem" flexWrap="wrap" mb="3rem" alignItems="center">
            <Box
              width={[1, 1, 6 / 12, 7 / 12, 8 / 12]}
              px="1.5rem"
              order={[2, 2, 1]}
              maxWidth={['100%', '100%', '80rem']}
            >
              <Fade left>
                <Text>
                  Hello, I am Remilekun Salami (Casper), a software engineer based in Lagos, Nigeria. I am passionate
                  about writing elegant code to enable easy extendabilty and maintenance. I’m highly skilled in building
                  functional applications and can comfortably translate design mockups into responsive pixel-perfect web
                  and/or mobile screens to bring designs to life. I currently work at Bravado as a senior mobile
                  (React-Native) developer. In my spare time I read articles to help my growth, read manga, watch
                  anime/movies, hang out with friends, you can also catch me playing Apex Legends (gamer tag:
                  casper_rsj).
                </Text>
              </Fade>
            </Box>

            <Box order={[1, 1, 2]} px="1.5rem" width={[1, 1, 6 / 12, 5 / 12, 4 / 12]} mb={['2rem', null, 0]} ml="auto">
              <Fade bottom>
                <PictureWrapper ref={imageRef}>
                  <Picture height={width} src="/assets/img/remi.jpg" alt="Remi Salami" />
                </PictureWrapper>
              </Fade>
            </Box>
          </Flex>
        </SubSection>

        <SubSection>
          <Subtitle>My technology stack:</Subtitle>
          <Flex flexWrap="wrap" mx="-0.5rem">
            {Object.keys(skills).map((type, index) => (
              <Box key={type} width={[1 / 2, 4 / 12, 4 / 12, 2 / 12]} px="0.5rem" mb={['1rem', '1rem', '1rem', 0]}>
                <Fade bottom delay={index * 250}>
                  <SkillBadge type={type} />
                </Fade>
              </Box>
            ))}
          </Flex>
        </SubSection>

        <SubSection>
          <Subtitle>I have been able to create solutions for:</Subtitle>
          <Companies />
        </SubSection>
      </Content>
    </Wrapper>
  );
};

export default AboutMe;
