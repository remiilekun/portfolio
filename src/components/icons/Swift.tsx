import React from 'react';
import { SVGElementProps } from '@/types/common';

function SvgSwift(props: SVGElementProps) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 30 30" fill="none" {...props}>
      <path
        d="M18.49 1.875c13.19 8.801 8.913 18.472 8.913 18.472s3.746 4.146 2.24 7.778c0 0-1.554-2.537-4.134-2.537-2.494 0-3.97 2.537-9.004 2.537C5.308 28.125 0 18.949 0 18.949c10.091 6.524 16.985 1.9 16.985 1.9C12.43 18.267 2.765 5.894 2.765 5.894c8.425 7.033 12.06 8.88 12.06 8.88C12.64 13.018 6.547 4.418 6.547 4.418c4.875 4.835 14.565 11.578 14.565 11.578 2.779-7.452-2.621-14.12-2.621-14.12z"
        fill="#FF5722"
      />
    </svg>
  );
}

export default SvgSwift;
