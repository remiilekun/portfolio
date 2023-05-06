import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

export const Spinner = styled.span`
  &::before {
    content: '';
    -webkit-transform-origin: center;
    animation: ${rotate} 500ms infinite linear;
    border-radius: 50%;
    border: 0.2rem solid ${props => props.theme.colors[props.color]};
    border-right-color: transparent;
    border-top-color: transparent;
    content: '';
    display: block;
    height: ${props => props.size};
    transform-origin: center;
    width: ${props => props.size};
  }
`;

Spinner.defaultProps = {
  color: 'white',
  size: '2.5rem',
};
