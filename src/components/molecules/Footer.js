import React from 'react';
import styled from '@emotion/styled';
import { Typography, Content } from 'components/atoms';

const Wrapper = styled.footer`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  p {
    line-height: 1.3;
  }
`;

export const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <Typography.Paragraph align="center" size="small">
          Designed With{' '}
          <span aria-label="Heart Emoji" role="img">
            ♥️
          </span>{' '}
          by Layor Salami and{' '}
          <span aria-label="Code Emoji" role="img">
            👨🏾‍💻
          </span>{' '}
          by Remi Salami
        </Typography.Paragraph>
      </Content>
    </Wrapper>
  );
};
