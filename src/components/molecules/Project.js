import styled from '@emotion/styled';
import { Flex, Box } from 'rebass';
import PropTypes from 'prop-types';
import { Image, Typography, OutlineButton } from 'components/atoms';
import { RightArrowIcon } from 'components/icons';
import { useTheme } from 'emotion-theming';
import { useMeasure } from 'react-use';
import { SkillBadge } from './SkillBadge';

const Wrapper = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;

  ${({ theme }) => theme.mq.md`
  margin-left: -1.5rem;
  margin-right: -1.5rem;
  `}

  & + & {
    margin-top: 4rem;
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
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;

const Heading = styled(Box)`
  align-items: center;
  display: flex;
  margin-bottom: 1.5rem;
`;

const Logo = styled(Image)`
  height: 5rem;
  width: 8rem;

  img {
    height: 100%;
    object-fit: contain;
    width: 100%;
  }
`;

const Name = styled(Typography.Text)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.big};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

const Description = styled(Typography.Paragraph)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.normal};
  line-height: 1.71;
  margin-bottom: 1rem;
`;

const Technologies = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Arrow = styled(RightArrowIcon)`
  transform: rotate(-45deg);
  margin-left: 1rem;
  margin-bottom: -2px;
`;

const Link = styled.a``;

export const Project = ({ coverImage, description, imageOrder, link, logo, name, technologies }) => {
  const [imageRef, { width }] = useMeasure();
  const { primary } = useTheme().colors;

  const height = () => {
    return (width * 75) / 100;
  };

  return (
    <Wrapper className="flexxx">
      <Box px={[0, null, '1.5rem']} order={[0, 0, imageOrder]} width={[1, 1, 1 / 2]} mb={['1.5rem', null, 0]}>
        <ImageWrapper ref={imageRef}>
          <ProjectImage height={height()} src={coverImage} alt="" />
        </ImageWrapper>
      </Box>
      <Box px={[0, null, '1.5rem']} width={[1, 1, 1 / 2]}>
        <Heading>
          <Logo src={logo} alt={`${name} logo`} />
          <Name>{name}</Name>
        </Heading>
        <Description>{description}</Description>
        <Technologies>
          {technologies.map(tech => (
            <SkillBadge key={tech} type={tech} />
          ))}
        </Technologies>
        {link && (
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <OutlineButton size="small" noBorder color="primary" fontSize="small">
              Visit page <Arrow fill={primary} stroke="5px" />
            </OutlineButton>
          </Link>
        )}
      </Box>
    </Wrapper>
  );
};

Project.propTypes = {
  coverImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageOrder: PropTypes.number,
  link: PropTypes.string,
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  technologies: PropTypes.array.isRequired,
};

Project.defaultProps = {
  imageOrder: 1,
  link: '',
};
