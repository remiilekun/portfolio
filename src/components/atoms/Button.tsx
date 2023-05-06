import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { ThemeType } from '@/theme';

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

type ButtonTemplateProps = {
  block?: boolean;
  borderRadius?: string;
  color?: keyof ThemeType['colors'];
  cornered?: boolean;
  faded?: boolean;
  fontSize?: keyof ThemeType['font']['size'];
  fontWeight?: keyof ThemeType['font']['weight'];
  link?: boolean;
  loading?: boolean;
  rounded?: boolean;
  size?: 'small' | 'normal' | 'large';
} & React.ComponentPropsWithoutRef<'button'>;

type ButtonProps = {
  color: keyof ThemeType['colors'];
  textColor?: keyof ThemeType['colors'];
} & ButtonTemplateProps;

type OutlineButtonProps = {
  color: keyof ThemeType['colors'];
  noBorder?: boolean;
  textColor?: keyof ThemeType['colors'];
} & ButtonTemplateProps;

export const ButtonTemplate = styled.button<ButtonTemplateProps>`
  -webkit-appearance: none;
  align-items: center;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  line-height: 1;
  outline: none;
  overflow: hidden;
  padding: 0;
  text-decoration: none;
  transition: all 0.3s;
  user-select: none;
  white-space: nowrap;
  ${({ size = 'normal', theme, fontWeight = 'medium', fontSize }) =>
    size &&
    css`
      font-size: ${(fontSize && theme.font.size[fontSize]) || theme.buttons[size].fontSize};
      font-weight: ${theme.font.weight[fontWeight]};
      padding: ${theme.buttons[size].padding};
    `}


  ${({ block }) =>
    block &&
    css`
      width: 100%;
    `}

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 500px;
    `}


    ${({ borderRadius }) =>
      borderRadius &&
      css`
        border-radius: ${borderRadius};
      `}


  ${({ cornered }) =>
    cornered &&
    css`
      border-radius: 1rem;
    `}

  ${({ loading }) =>
    loading &&
    css`
      color: transparent !important;
      pointer-events: none;
      position: relative;

      &::after {
        content: '';
        animation: ${rotate} 500ms infinite linear;
        border: 2px solid #fff;
        border-radius: 50%;
        border-right-color: transparent !important;
        border-top-color: transparent !important;
        display: block;
        height: 1.2em;
        width: 1.2em;
        position: absolute;
        left: calc(50% - (1.2em / 2));
        top: calc(50% - (1.2em / 2));
        -webkit-transform-origin: center;
        transform-origin: center;
        position: absolute !important;
      }
    `}


    &:disabled{
        cursor: not-allowed;
      }

`;

export const Button = styled((props: ButtonTemplateProps) => <ButtonTemplate color="primary" rounded {...props} />)<
  ButtonProps
>`
  background-color: ${({ theme, color }) => theme.colors[color]};
  &,
  &:visited {
    color: ${({ theme, textColor = 'black' }) => theme.colors[textColor]};
  }

  ${({ color, theme }) => {
    if (color.includes('black') || color.includes('dark')) {
      return css`
        &,
        &:visited {
          color: ${theme.colors.white};
        }
      `;
    }
    return null;
  }}

  ${({ color, faded, theme }) =>
    faded &&
    css`
      background-color: ${theme.colors[color]}30;
      &,
      &:visited {
        color: ${theme.colors[color]};
      }
    `}

    ${({ link, theme, color }) =>
      link &&
      css`
        background-color: transparent;
        border-radius: 0;
        padding: 0;
        text-decoration: underline;

        &,
        &:visited {
          color: ${theme.colors[color]};
        }
      `}
`;

export const OutlineButton = styled((props: ButtonTemplateProps) => <ButtonTemplate color="white" {...props} />)<
  OutlineButtonProps
>`
  border: 1px solid ${({ theme, color = 'white' }) => theme.colors[color]};
  &,
  &:visited {
    color: ${({ theme, color, textColor = 'white' }) => theme.colors[textColor || color]};
  }

  &:hover {
    background-color: ${({ theme, color = 'white' }) => theme.colors[color]}1A;
  }

  ${({ noBorder }) =>
    noBorder &&
    css`
      border: none;
    `}

  &:disabled {
    border-color: #f0f0f0;
  }
`;
