import React from 'react';

const itemClasses = [
  'transition-all duration-300',
  '[&_svg]:h-10 [&_svg]:w-10 md:[&_svg]:h-8 md:[&_svg]:w-8',
  'hover:-translate-y-[3px] hover:[&_svg_path]:fill-primary',
  '[&:not(:last-child)]:mr-8 md:[&:not(:last-child)]:mr-0 md:[&:not(:last-child)]:mb-12',
].join(' ');

type SocialItemProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

export const SocialItem = ({ href, label, children }: SocialItemProps) => (
  <span className={itemClasses}>
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {children}
    </a>
  </span>
);
