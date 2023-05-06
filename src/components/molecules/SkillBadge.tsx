import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Typography } from '@/components/atoms';
import { getStrapiResourceImageURL } from '@/lib/utils';
import { SkillType } from '@/types/common';

const Logo = styled.img`
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

type SkillBadgeProps = {
  skill: SkillType;
};

export const SkillBadge = ({ skill, ...props }: SkillBadgeProps) => {
  return (
    <Wrapper {...props}>
      <Logo alt={skill.name} src={getStrapiResourceImageURL(skill.icon)} /> <Text>{skill.name}</Text>
    </Wrapper>
  );
};
