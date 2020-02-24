import React from 'react';
import styled from '@emotion/styled';
import { SectionHeader, SkillBadge } from 'components/molecules';
import { Content, Typography, Image } from 'components/atoms';
import { Box, Flex } from 'rebass';
import { useMeasure } from 'react-use';
import { skills } from 'data/skills';
import Companies from './Companies';

const Wrapper = styled.section`
  margin-bottom: 8rem;
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
    max-width: 100%;
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

const AboutMe = () => {
  const [imageRef, { width }] = useMeasure();

  return (
    <Wrapper>
      <Content fluid>
        <SectionHeader>About Me</SectionHeader>

        <SubSection>
          <Flex mx="-1rem" flexWrap="wrap" mb="3rem">
            <Box width={[1, 1, 6 / 12, 7 / 12, 8 / 12]} px="1rem" order={[2, 2, 1]}>
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex nobis asperiores enim aspernatur similique
                iure provident nisi quas cumque excepturi. Rerum ducimus veniam recusandae consequatur beatae esse,
                repellat voluptate eum laudantium architecto laborum fugit distinctio doloremque nemo est vero, nam sunt
                eaque quod vel nostrum ratione perferendis eos. Quos, nostrum?
              </Text>
            </Box>
            <Box order={[1, 1, 2]} px="1rem" width={[1, 1, 6 / 12, 5 / 12, 4 / 12]} mb={['2rem', null, 0]}>
              <PictureWrapper ref={imageRef}>
                <Picture height={width} src="https://picsum.photos/300" alt="Remi Salami" />
              </PictureWrapper>
            </Box>
          </Flex>
        </SubSection>

        <SubSection>
          <Subtitle>Here are a few technologies I've worked with recently:</Subtitle>
          <Flex flexWrap="wrap" mx="-0.5rem">
            {Object.keys(skills).map(type => (
              <Box key={type} width={[1 / 2, 4 / 12, 4 / 12, 2 / 12]} px="0.5rem" mb={['1rem', '1rem', '1rem', 0]}>
                <SkillBadge type={type} />
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
