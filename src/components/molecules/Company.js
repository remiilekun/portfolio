import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Typography } from 'components/atoms';
import { Box } from 'rebass';

const Wrapper = styled.div`
  width: 100%;

  & + & {
    margin-top: 5rem;
  }
`;

const Role = styled(Typography.Paragraph)`
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 1.5rem;
`;

const Period = styled(Typography.Paragraph)`
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-bottom: 1rem;
  opacity: 0.5;
`;

const Description = styled(Typography.Paragraph)`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: 1.7;
  margin-bottom: 1rem;
`;

const HeaderWrapper = styled(Box)`
  align-items: center;
  display: flex;
  margin-bottom: 1.5rem;
`;

const CompanyName = styled(Typography.Paragraph)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.size.big};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  white-space: nowrap;
`;

const Lines = styled.span`
  display: inline-flex;
  height: 2rem;
  margin-right: 2rem;
  position: relative;
  width: 2.5rem;

  &:before,
  &:after {
    background-color: ${({ theme }) => theme.colors.primary};
    content: '';
    height: 0.2rem;
    position: absolute;
    transform: translateY(-50%);
    width: 2.5rem;
  }

  &:before {
    left: 1rem;
    top: calc(50% - 0.3rem);
  }

  &:after {
    top: calc(50% + 0.3rem);
  }
`;

const CompanyHeader = ({ children, ...props }) => {
  return (
    <HeaderWrapper {...props}>
      <Lines />
      <CompanyName>{children}</CompanyName>
    </HeaderWrapper>
  );
};

export const Company = ({ company, description, period, role }) => {
  return (
    <Wrapper>
      <CompanyHeader>{company}</CompanyHeader>
      <Role>{role}</Role>
      <Period>{period}</Period>
      <Description>{description}</Description>
    </Wrapper>
  );
};

Company.propTypes = {
  company: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};
