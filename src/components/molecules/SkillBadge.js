import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import { Typography } from 'components/atoms';
import { skills } from 'data/skills';

const Logo = styled.svg`
  flex-shrink: 0;
  height: 100%;
  height: 2rem;
  margin-right: 1rem;
  width: 2rem;
`;

const Text = styled(Typography.Text)`
  ${({ theme }) =>
    theme &&
    css`
      color: ${theme.colors.primary};
      font-size: ${theme.font.size.small};
    `}
`;

const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary}29;
  border-radius: 80px;
  display: flex;
  justify-content: center;
  padding: 1rem 1.5rem;

  &:not(:last-of-type) {
    margin-right: 1.5rem;
  }
`;

export const SkillBadge = ({ type, ...props }) => {
  const skill = skills[type];
  return (
    <Wrapper {...props}>
      <Logo as={skill.icon} /> <Text>{skill.name}</Text>
    </Wrapper>
  );
};

SkillBadge.propTypes = {
  type: PropTypes.string,
};

SkillBadge.defaultProps = {
  type: 'js',
};
