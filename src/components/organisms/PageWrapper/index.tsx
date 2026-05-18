import React from 'react';
import { Nav, Socials } from '@/components/molecules';

type PageWrapperProps = {
  children: React.ReactNode | React.ReactNode[];
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className="relative min-h-screen pt-24 md:pb-0">
      <Nav />
      <main className="w-full">{children}</main>
      <Socials />
    </div>
  );
};

export default PageWrapper;
