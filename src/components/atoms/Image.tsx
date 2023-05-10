import React, { useState } from 'react';
import NextImage from 'next/image';
import styled from '@emotion/styled';
import { Spinner } from './Spinner';

const StyledSpinner = styled(Spinner)<{ size?: string }>`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const StlyedImage = styled(NextImage)`
  display: inline-block;
`;

type ImageProps = {
  alt: string;
  className?: string;
  sizes?: string;
  spin?: boolean;
  spinnerSize?: string;
  src: string;
  srcset?: string;
};

export const Image = ({
  alt,
  className = '',
  sizes = '',
  spin = true,
  spinnerSize = '2.5rem',
  src,
  srcset = '',
  ...rest
}: ImageProps) => {
  const [loading, setLoading] = useState(!!src);
  const [, setError] = useState(!src);

  return (
    <Wrapper className={className} {...rest}>
      <StlyedImage
        alt={alt}
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

      {loading && spin && <StyledSpinner size={spinnerSize} />}
    </Wrapper>
  );
};
