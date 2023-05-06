import React from 'react';
import { SVGElementProps } from '@/types/common';

function SvgRightArrow({ fill = '#fff', ...props }: SVGElementProps) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 31 31" fill="none" {...props}>
      <path
        d="M1.342 16.842h25.077l-5.984 5.984a1.341 1.341 0 101.897 1.898l8.275-8.275a1.341 1.341 0 000-1.898l-8.275-8.275a1.337 1.337 0 00-.948-.393 1.341 1.341 0 00-.949 2.29l5.984 5.985H1.342a1.342 1.342 0 000 2.684z"
        fill={fill}
      />
    </svg>
  );
}

export default SvgRightArrow;
