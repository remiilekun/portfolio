import styled from '@emotion/styled';
import { Box } from 'rebass';
import { Typography } from 'components/atoms';

const Wrapper = styled(Box)`
  align-items: center;
  display: flex;
  margin-bottom: 5rem;
`;

const Lines = styled.span`
  display: inline-flex;
  height: 2rem;
  margin-right: 2rem;
  position: relative;
  width: 4rem;

  &:before,
  &:after {
    background-color: ${({ theme }) => theme.colors.primary};
    content: '';
    height: 0.2rem;
    position: absolute;
    transform: translateY(-50%);
    width: 4rem;
  }

  &:before {
    left: 1rem;
    top: calc(50% - 0.5rem);
  }

  &:after {
    top: calc(50% + 0.5rem);
  }
`;

const Heading = styled(Typography.Heading)`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  white-space: nowrap;
`;

const Arrow = styled.span`
  display: inline-block;
  margin-left: 2rem;
  position: relative;
  width: 40%;

  &:before,
  &:after {
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &:before {
    background-color: ${({ theme }) => theme.colors.primary};
    content: '';
    height: 0.1rem;
    width: calc(100% - 1rem);
  }

  &:after {
    border-radius: 50%;
    border: 0.2rem solid ${({ theme }) => theme.colors.primary};
    content: '';
    display: inline-block;
    height: 1rem;
    right: 0;
    width: 1rem;
  }
`;

export const SectionHeader = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Lines />
      <Heading type="h3">{children}</Heading>
      <Arrow />
    </Wrapper>
  );
};
