import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import LazyLoad from 'vanilla-lazyload';
import PropTypes from 'prop-types';
import { Spinner } from './Spinner';

const lazyloadConfig = {
  elements_selector: '.lazy-image',
};

if (typeof document !== 'undefined' && !document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad(lazyloadConfig);
}

const StyledSpinner = styled(Spinner)`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const StlyedImage = styled.img`
  display: inline-block;
`;

export const Image = ({ alt, className, sizes, spin, spinnerSize, src, srcset, ...rest }) => {
  const [loading, setLoading] = useState(!!src);
  const [, setError] = useState(!src);
  useEffect(() => {
    document.lazyLoadInstance.update();
  });

  return (
    <Wrapper className={className}>
      <StlyedImage
        alt={alt}
        className="lazy-image"
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
        {...rest}
      />

      {loading && spin && <StyledSpinner size={spinnerSize} />}
    </Wrapper>
  );
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  sizes: PropTypes.string,
  spin: PropTypes.bool,
  spinnerSize: PropTypes.string,
  src: PropTypes.string.isRequired,
  srcset: PropTypes.string,
};

Image.defaultProps = {
  className: '',
  sizes: '',
  spin: true,
  spinnerSize: '2.5rem',
  srcset: '',
};
