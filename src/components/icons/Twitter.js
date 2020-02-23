import React from 'react';
import PropTypes from 'prop-types';

function SvgTwitter({ fill, ...props }) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 25 25" fill="none" {...props}>
      <g clipPath="url(#twitter_svg__clip0)">
        <path
          d="M25 4.75c-.92.407-1.907.683-2.945.807A5.15 5.15 0 0024.31 2.72a10.339 10.339 0 01-3.258 1.245 5.129 5.129 0 00-8.739 4.676 14.56 14.56 0 01-10.57-5.358 5.09 5.09 0 00-.694 2.577c0 1.78.906 3.35 2.281 4.268a5.129 5.129 0 01-2.323-.643v.064a5.134 5.134 0 004.113 5.028c-.43.116-.882.18-1.351.18-.331 0-.651-.033-.965-.095a5.131 5.131 0 004.79 3.562 10.29 10.29 0 01-6.37 2.191A10.9 10.9 0 010 20.346a14.497 14.497 0 007.861 2.308c9.434 0 14.591-7.815 14.591-14.591l-.017-.664A10.243 10.243 0 0025 4.749z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="twitter_svg__clip0">
          <path fill={fill} d="M0 0h25v25H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

SvgTwitter.propTypes = {
  fill: PropTypes.string,
};

SvgTwitter.defaultProps = {
  fill: '#fff',
};

export default SvgTwitter;
