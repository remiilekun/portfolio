import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

const HeadingTag = ({ type: Component, children, className, ...props }) => {
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};

export const Heading = styled(HeadingTag)`
  color: ${({ theme, color }) => theme.colors[color]};
  &:visited {
    color: ${({ theme, color }) => theme.colors[color]};
  }
  display: block;
  font-weight: ${({ theme, weight }) => theme.font.weight[weight]};
  margin: 0;
  position: relative;
  text-align: ${({ theme, align }) => theme.font.align[align]};
  ${({ theme, type }) => {
    return css`
      font-size: ${theme.heading.mobile[type]};
      @media screen and (min-width: 577px) {
        font-size: ${theme.heading.desktop[type]};
      }
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

export const Paragraph = styled.p`
  color: ${({ theme, color }) => theme.colors[color]};
  &:visited {
    color: ${({ theme, color }) => theme.colors[color]};
  }
  display: block;
  font-size: ${({ theme, size }) => theme.font.size[size]};
  font-weight: ${({ theme, weight }) => theme.font.weight[weight]};
  margin: 0;
  text-align: ${({ theme, align }) => theme.font.align[align]};
  text-decoration: ${({ decoration }) => decoration};

  ${({ ellipsize }) =>
    ellipsize &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
`;

export const Text = styled.span`
  color: ${({ theme, color }) => theme.colors[color]};
  &:visited {
    color: ${({ theme, color }) => theme.colors[color]};
  }
  display: inline;

  font-size: ${({ theme, size }) => theme.font.size[size]};
  font-weight: ${({ theme, weight }) => theme.font.weight[weight]};
  text-align: ${({ theme, align }) => theme.font.align[align]};
  text-decoration: ${({ decoration }) => decoration};

  ${({ ellipsize }) =>
    ellipsize &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
`;

HeadingTag.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']).isRequired,
};

Heading.defaultProps = {
  align: 'initial',
  color: 'white',
  type: 'h1',
  weight: 'normal',
};

Paragraph.defaultProps = {
  align: 'initial',
  color: 'white',
  decoration: 'none',
  size: 'normal',
  weight: 'normal',
};

Text.defaultProps = {
  align: 'initial',
  color: 'inherit',
  decoration: 'none',
  size: 'inherit',
  weight: 'normal',
};

export default {
  Heading,
  Paragraph,
  Text,
};
