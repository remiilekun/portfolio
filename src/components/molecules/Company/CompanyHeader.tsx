import React from 'react';
import { Typography } from '@/components/atoms';
import { Lines } from './Lines';

type CompanyHeaderProps = {
  children: React.ReactNode;
};

export const CompanyHeader = ({ children }: CompanyHeaderProps) => (
  <div className="flex items-center mb-6">
    <Lines />
    <Typography.Paragraph color="primary" size="big" weight="bold" className="whitespace-nowrap">
      {children}
    </Typography.Paragraph>
  </div>
);
