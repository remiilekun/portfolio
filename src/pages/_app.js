import * as React from 'react';
import NextApp from 'next/app';
import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';
import GlobalStyle from '../GlobalStyle';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CacheProvider value={cache}>
        {GlobalStyle}
        <Component {...pageProps} />
      </CacheProvider>
    );
  }
}
