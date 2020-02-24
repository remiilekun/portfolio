import styled from '@emotion/styled';

export const Label = styled.label`
  color: ${({ theme, color }) => theme.colors[color]};
  display: inline-block;
  font-size: 1.6rem;
  font-weight: normal;
  margin-bottom: 0.5rem;
`;

Label.defaultProps = {
  color: 'white',
};
