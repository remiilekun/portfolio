import React from 'react';
import { Typography, Content } from '@/components/atoms';

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center py-4 [&_p]:leading-[1.3]">
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
    </footer>
  );
};
