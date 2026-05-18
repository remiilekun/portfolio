import React, { useState } from 'react';
import NextImage from 'next/image';
import { cn } from '@/lib/utils';
import { Spinner } from '../Spinner';

type ImageProps = {
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  spin?: boolean;
  spinnerSize?: string;
  src: string;
  srcset?: string;
  style?: React.CSSProperties;
};

export const Image = ({
  alt,
  className = '',
  imgClassName,
  sizes = '',
  spin = true,
  spinnerSize = '2.5rem',
  src,
  srcset = '',
  style,
}: ImageProps) => {
  const [loading, setLoading] = useState(!!src);
  const [, setError] = useState(!src);

  return (
    <div className={cn('inline-block relative', className)} style={style}>
      <NextImage
        alt={alt}
        className={cn('inline-block', imgClassName)}
        fill
        data-sizes={sizes}
        data-src={src}
        data-srcset={srcset}
        onLoad={() => {
          setError(false);
          setLoading(false);
        }}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
        src={src}
      />

      {loading && spin && (
        <Spinner className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size={spinnerSize} />
      )}
    </div>
  );
};
