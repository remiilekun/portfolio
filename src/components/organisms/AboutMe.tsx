import React from 'react';
import styled from '@emotion/styled';
import { Box, BoxProps, Flex, Grid } from '@theme-ui/components';
import { useMeasure } from 'react-use';
import Fade from 'react-reveal/Fade';
import { SectionHeader, SkillBadge } from '@/components/molecules';
import { Content, Typography, Image } from '@/components/atoms';
import { getStrapiResourceImageURL } from '@/lib/utils';
import { AboutMeType, CompanyType, SkillType } from '@/types/common';
import Companies from './Companies';

const Wrapper = styled(Box)`
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

const Picture = styled(Image)<{ height: string | number }>`
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

type AboutMeProps = {
  companies: CompanyType[];
  data: AboutMeType;
  skills: SkillType[];
} & BoxProps;

const AboutMe = ({ companies, data, skills, ...props }: AboutMeProps) => {
  const [imageRef, { width }] = useMeasure<HTMLDivElement>();

  return (
    <Wrapper as="section" {...props}>
      <Content fluid>
        <SectionHeader>{data.title}</SectionHeader>

        <SubSection>
          <Flex mx="-1.5rem" mb="3rem" sx={{ flexWrap: 'wrap', alignItems: 'center' }}>
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
          <Grid
            sx={{
              flexWrap: 'wrap',
              gridGap: '1rem',
              gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(3, 1fr)', null, 'repeat(6, 1fr)'],
            }}
          >
            {skills.map((skill, index) => (
              <Box key={skill.id} sx={{ width: '100%' }}>
                <Fade bottom delay={index * 250}>
                  <SkillBadge skill={skill} />
                </Fade>
              </Box>
            ))}
          </Grid>
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
