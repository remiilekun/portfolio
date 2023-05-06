import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { ThemeType } from '@/theme';

export const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

export const Spinner = styled.span<{ color?: keyof ThemeType['colors']; size?: string }>`
  &::before {
    content: '';
    -webkit-transform-origin: center;
    animation: ${rotate} 500ms infinite linear;
    border-radius: 50%;
    border: 0.2rem solid ${({ theme, color = 'white' }) => theme.colors[color]};
    border-right-color: transparent;
    border-top-color: transparent;
    content: '';
    display: block;
    height: ${({ size = '2.5rem' }) => size};
    transform-origin: center;
    width: ${({ size = '2.5rem' }) => size};
  }
`;
