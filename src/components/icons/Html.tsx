import React from 'react';
import { SVGElementProps } from '@/types/common';

function SvgHtml(props: SVGElementProps) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 30 30" fill="none" {...props}>
      <path d="M1.875 0l2.39 27L15 30l10.73-2.998L28.126 0H1.875z" fill="#FF5722" />
      <path
        d="M22.94 8.83H10.36l.3 3.391h11.98l-.901 10.17-6.74 1.88-.005.003L8.26 22.39l-.47-5.32h3.3l.245 2.76 3.662.997.004-.002 3.666-.996.382-4.296H7.654L6.764 5.52h16.469l-.293 3.31z"
        fill="#FAFAFA"
      />
    </svg>
  );
}

export default SvgHtml;
