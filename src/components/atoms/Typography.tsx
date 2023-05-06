import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ThemeType } from '@/theme';

type HeadingTagProps = {
  align?: keyof ThemeType['font']['align'];
  children?: React.ReactNode;
  className?: string;
  type: keyof ThemeType['heading']['desktop'];
};

type HeadingProps = {
  color?: keyof ThemeType['colors'];
  ellipsize?: boolean;
  type?: keyof ThemeType['heading']['desktop'];
  weight?: keyof ThemeType['font']['weight'];
} & Omit<HeadingTagProps, 'type'>;

type ParagraphProps = {
  align?: keyof ThemeType['font']['align'];
  children?: React.ReactNode;
  className?: string;
  color?: keyof ThemeType['colors'];
  decoration?: string;
  ellipsize?: boolean;
  weight?: keyof ThemeType['font']['weight'];
  size?: keyof ThemeType['font']['size'];
};

const HeadingTag = ({ type: Component, children, className, ...props }: HeadingTagProps) => {
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};

export const Heading = styled((props: Omit<HeadingTagProps, 'type'>) => <HeadingTag type="h1" {...props} />)<
  HeadingProps
>`
  color: ${({ theme, color = 'white' }) => theme.colors[color]};
  &:visited {
    color: ${({ theme, color = 'white' }) => theme.colors[color]};
  }
  display: block;
  font-weight: ${({ theme, weight = 'normal' }) => theme.font.weight[weight]};
  line-height: 1;
  margin: 0;
  position: relative;
  text-align: ${({ theme, align = 'initial' }) => theme.font.align[align]};
  ${({ theme, type = 'h1' }) => {
    return css`
      font-size: ${theme.heading.mobile[type]};
      ${theme.mq.sm`
        font-size: ${theme.heading.desktop[type]};
        `}
    `;
  }}

  ${({ ellipsize }) =>
    ellipsize &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
`;

export const Paragraph = styled.p<ParagraphProps>`
  color: ${({ theme, color = 'white' }) => theme.colors[color]};
  &:visited {
    color: ${({ theme, color = 'white' }) => theme.colors[color]};
  }
  display: block;
  font-size: ${({ theme, size = 'normal' }) => theme.font.size[size]};
  font-weight: ${({ theme, weight = 'normal' }) => theme.font.weight[weight]};
  line-height: 1;
  margin: 0;
  text-align: ${({ theme, align = 'initial' }) => theme.font.align[align]};
  text-decoration: ${({ decoration = 'none' }) => decoration};

  ${({ ellipsize }) =>
    ellipsize &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
`;

export const Text = styled.span<ParagraphProps>`
  color: ${({ theme, color = 'inherit' }) => theme.colors[color]};
  &:visited {
    color: ${({ theme, color = 'inherit' }) => theme.colors[color]};
  }
  display: inline;
  font-size: ${({ theme, size = 'normal' }) => theme.font.size[size]};
  font-weight: ${({ theme, weight = 'normal' }) => theme.font.weight[weight]};
  line-height: 1;
  text-align: ${({ theme, align = 'initial' }) => theme.font.align[align]};
  text-decoration: ${({ decoration = 'none' }) => decoration};

  ${({ ellipsize }) =>
    ellipsize &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
`;

export default {
  Heading,
  Paragraph,
  Text,
};
