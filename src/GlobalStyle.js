import { css, Global } from '@emotion/core';

const globalStyle = css`
  @font-face {
    font-family: 'Gilroy';
    src: url('/assets/fonts/Gilroy/Gilroy-Regular.otf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    font-weight: 500;
    src: url('/assets/fonts/Gilroy/Gilroy-Medium.otf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    font-weight: 700;
    src: url('/assets/fonts/Gilroy/Gilroy-Bold.otf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    font-weight: 900;
    src: url('/assets/fonts/Gilroy/Gilroy-Black.otf') format('truetype');
    font-display: swap;
  }

  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  span,
  em,
  small,
  strong,
  sub,
  sup,
  mark,
  del,
  ins,
  strike,
  abbr,
  dfn,
  blockquote,
  q,
  cite,
  code,
  pre,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  div,
  section,
  article,
  main,
  aside,
  nav,
  header,
  hgroup,
  footer,
  img,
  figure,
  figcaption,
  address,
  time,
  audio,
  video,
  canvas,
  iframe,
  details,
  summary,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
    border: 0;
  }

  /* Typography
 * *********************************** */

  html {
    font-size: 62.5%;
  }

  body {
    background-color: #1b1b2b;
    font-family: Gilroy, sans-serif;
    font-size: 1.6rem;
    line-height: 1.4;
  }

  * {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  a,
  a:visited {
    color: inherit;
  }

  /* Layout
 * *********************************** */

  article,
  aside,
  footer,
  header,
  nav,
  section,
  main {
    display: block;
  }

  * {
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: inherit;
  }

  /* Elements
 * *********************************** */

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ul {
    list-style: none;
  }

  img,
  video {
    max-width: 100%;
  }

  img {
    border-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:after,
  blockquote:before,
  q:after,
  q:before {
    content: '';
    content: none;
  }

  /* Attributes & states
 * *********************************** */

  [hidden] {
    display: none !important;
  }

  [disabled] {
    cursor: not-allowed;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  /* Utility classes
 * *********************************** */

  .sr-only {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    left: -9999px;
    top: -9999px;
  }
`;

const GlobalStyle = () => <Global styles={globalStyle} />;

export default GlobalStyle;
