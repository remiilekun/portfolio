import React from 'react';
import PropTypes from 'prop-types';

function SvgPlayStore({ fill, ...props }) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 23 25" fill="none" {...props}>
      <path
        d="M21.172 10.114L4.112.362a2.753 2.753 0 00-2.743.01A2.756 2.756 0 000 2.747v19.504a2.75 2.75 0 004.112 2.386l17.06-9.752a2.754 2.754 0 001.384-2.386c0-.984-.53-1.898-1.384-2.386zM13.78 7.808l-2.342 3.263-5.603-7.805 7.945 4.542zM2.641 23.324a1.072 1.072 0 01-.436-.137 1.085 1.085 0 01-.538-.935V2.748c0-.384.206-.742.539-.935.133-.077.28-.123.433-.14L10.411 12.5l-7.77 10.824zm3.193-1.59l5.603-7.805 2.342 3.263-7.945 4.542zm14.511-8.295l-5.11 2.921-2.772-3.86 2.771-3.86 5.111 2.921a1.084 1.084 0 010 1.878z"
        fill={fill}
      />
    </svg>
  );
}

SvgPlayStore.propTypes = {
  fill: PropTypes.string,
};

SvgPlayStore.defaultProps = {
  fill: '#B0AFF6',
};

export default SvgPlayStore;