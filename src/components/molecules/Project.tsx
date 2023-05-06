import styled from '@emotion/styled';
import { Flex, Box } from '@theme-ui/components';
import PropTypes from 'prop-types';
import { Image, Typography, OutlineButton } from '@/components/atoms';
import { RightArrowIcon, AppStoreIcon, PlayStoreIcon } from '@/components/icons';
import { useMeasure } from 'react-use';
import { useTheme } from '@emotion/react';
import { getStrapiResourceImageURL } from '@/lib/utils';
import { SkillBadge } from './SkillBadge';

const Wrapper = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;

  ${({ theme }) => theme.mq.md`
  margin-left: -1.5rem;
  margin-right: -1.5rem;
  `}

  & + & {
    margin-top: 8rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const ProjectImage = styled(Image)`
  background-color: ${({ theme }) => theme.colors.primary}29;
  border-radius: 1rem;
  height: ${({ height }) => height}px;
  max-height: 21rem;
  overflow: hidden;
  width: 100%;

  ${({ theme }) => theme.mq.sm`
  max-height: 30rem;
  `}

  ${({ theme }) => theme.mq.md`
  max-height: 34rem;
  `}

  img {
    height: auto;
    object-fit: cover;
    width: 100%;
  }
`;

const Heading = styled(Box)`
  align-items: center;
  display: flex;
  margin-bottom: 1.5rem;
`;

const Logo = styled.img`
  height: 4rem;
  margin-right: 1rem;
  object-fit: contain;
  width: 7rem;
`;

const Name = styled(Typography.Text)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.big};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

const Description = styled(Typography.Paragraph)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.normal};
  line-height: 1.7;
  margin-bottom: 1rem;
`;

const Technologies = styled(Box)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const Arrow = styled(RightArrowIcon)`
  margin-bottom: -2px;
  margin-left: 1rem;
  transform: rotate(-45deg);
`;

const Skill = styled(SkillBadge)`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

const Links = styled.ul`
  align-items: center;
  display: flex;
`;

const LinkItem = styled.li`
  display: flex;
  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

const Link = styled.a`
  display: flex;
  text-decoration: none;

  svg {
    margin-left: 1rem;
  }
`;

export const Project = ({ coverImage, description, imageOrder, link, logo, name, technologies }) => {
  const [imageRef, { width }] = useMeasure();
  const { primary } = useTheme().colors;

  const height = () => {
    return (width * 62.5) / 100;
  };

  const renderLogo = () => {
    const src = getStrapiResourceImageURL(logo);
    if (src) {
      return <Logo as="img" src={src} alt={name} />;
    }
    return null;
  };

  return (
    <Wrapper className="flexxx">
      <Box
        sx={{
          mb: ['1.5rem', null, 0],
          order: [0, 0, imageOrder],
          px: [0, null, '1.5rem'],
          width: ['100%', null, '50%'],
        }}
      >
        <ImageWrapper ref={imageRef}>
          <ProjectImage height={height()} src={getStrapiResourceImageURL(coverImage)} alt="" />
        </ImageWrapper>
      </Box>
      <Box
        sx={{
          px: [0, null, '1.5rem'],
          width: ['100%', null, '50%'],
        }}
      >
        <Heading>
          {renderLogo()}
          <Name>{name}</Name>
        </Heading>
        <Description>{description}</Description>
        <Technologies>
          {technologies?.data?.map(tech => (
            <Skill key={tech.id} skill={tech.attributes} />
          ))}
        </Technologies>
        <Links>
          {link.web && (
            <LinkItem>
              <OutlineButton
                as={Link}
                color="primary"
                fontSize="small"
                href={link.web}
                noBorder
                rel="noopener noreferrer"
                size="small"
                target="_blank"
              >
                Visit page <Arrow fill={primary} stroke="5px" />
              </OutlineButton>
            </LinkItem>
          )}

          {link.ios && (
            <LinkItem>
              <OutlineButton
                as={Link}
                color="primary"
                fontSize="small"
                href={link.ios}
                noBorder
                rel="noopener noreferrer"
                size="small"
                target="_blank"
              >
                App Store <AppStoreIcon width="1.8rem" height="1.8rem" />
              </OutlineButton>
            </LinkItem>
          )}

          {link.android && (
            <LinkItem>
              <OutlineButton
                as={Link}
                color="primary"
                fontSize="small"
                href={link.android}
                noBorder
                rel="noopener noreferrer"
                size="small"
                target="_blank"
              >
                Play Store <PlayStoreIcon width="1.8rem" height="1.8rem" />
              </OutlineButton>
            </LinkItem>
          )}
        </Links>
      </Box>
    </Wrapper>
  );
};

Project.propTypes = {
  coverImage: PropTypes.object,
  description: PropTypes.string.isRequired,
  imageOrder: PropTypes.number,
  link: PropTypes.shape({
    android: PropTypes.string,
    ios: PropTypes.string,
    web: PropTypes.string,
  }),
  logo: PropTypes.any,
  name: PropTypes.string.isRequired,
  technologies: PropTypes.shape({
    data: PropTypes.array.isRequired,
  }),
};

Project.defaultProps = {
  imageOrder: 1,
  link: {
    android: '',
    ios: '',
    web: '',
  },
};
