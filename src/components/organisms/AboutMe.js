import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Box, Flex } from '@theme-ui/components';
import { useMeasure } from 'react-use';
import Fade from 'react-reveal/Fade';
import { SectionHeader, SkillBadge } from 'components/molecules';
import { Content, Typography, Image } from 'components/atoms';
import { getStrapiResourceImageURL } from 'lib/utils';
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

const AboutMe = ({ companies, data, skills, ...props }) => {
  const [imageRef, { width }] = useMeasure();

  return (
    <Wrapper {...props}>
      <Content fluid>
        <SectionHeader>{data.title}</SectionHeader>

        <SubSection>
          <Flex mx="-1.5rem" flexWrap="wrap" mb="3rem" alignItems="center">
            <Box
              sx={{
                maxWidth: ['100%', '100%', '80rem'],
                order: [2, 2, 1],
                px: '1.5rem',
                width: ['100%', null, '50%', '58.33%', '66.67%'],
              }}
            >
              <Fade left>
                <Text>{data.description}</Text>
              </Fade>
            </Box>

            <Box
              sx={{
                mb: ['2rem', null, 0],
                ml: 'auto',
                order: [1, 1, 2],
                px: '1.5rem',
                width: ['100%', null, '50%', '41.67%', '33.3%'],
              }}
            >
              <Fade bottom>
                <PictureWrapper ref={imageRef}>
                  <Picture height={width} src={getStrapiResourceImageURL(data.avatar)} alt="Remi Salami" />
                </PictureWrapper>
              </Fade>
            </Box>
          </Flex>
        </SubSection>

        <SubSection>
          <Subtitle>My technology stack:</Subtitle>
          <Flex flexWrap="wrap" mx="-0.5rem">
            {skills.map((skill, index) => (
              <Box
                key={skill.id}
                sx={{
                  mb: ['1rem', '1rem', '1rem', 0],
                  px: '0.5rem',
                  width: ['50%', '33.3%', null, 2 / '16.67%'],
                }}
              >
                <Fade bottom delay={index * 250}>
                  <SkillBadge skill={skill} />
                </Fade>
              </Box>
            ))}
          </Flex>
        </SubSection>

        <SubSection>
          <Subtitle>I have been able to create solutions for:</Subtitle>
          <Companies companies={companies} />
        </SubSection>
      </Content>
    </Wrapper>
  );
};

export default AboutMe;

AboutMe.propTypes = {
  companies: PropTypes.array,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    avatar: PropTypes.object,
  }).isRequired,
  skills: PropTypes.array,
};
