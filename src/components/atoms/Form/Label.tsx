import { ThemeType } from '@/theme';
import styled from '@emotion/styled';

export const Label = styled.label<{ color?: keyof ThemeType['colors'] }>`
  color: ${({ theme, color = 'white' }) => theme.colors[color]};
  display: inline-block;
  font-size: 1.6rem;
  font-weight: normal;
  margin-bottom: 0.5rem;
`;
