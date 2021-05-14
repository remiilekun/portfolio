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
          <span aria-label="Design Emoji" role="img">
            🎨
          </span>{' '}
          <a href="http://layorsalami.com/" rel="noopener noreferrer" target="_blank">
            Layor Salami
          </a>{' '}
          ,
          <span aria-label="Code Emoji" role="img">
            👨🏾‍💻
          </span>{' '}
          Remi Salami
        </Typography.Paragraph>
      </Content>
    </Wrapper>
  );
};
