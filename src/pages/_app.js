import * as React from 'react';
import NextApp from 'next/app';
import Router from 'next/router';
import { CacheProvider } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { cache } from 'emotion';
import PageWrapper from 'components/organisms/PageWrapper';
import * as gtag from 'lib/gtag';
import config from 'react-reveal/globals';
import GlobalStyle from '../GlobalStyle';
import { theme } from '../theme';

config({ ssrFadeout: true });

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <PageWrapper>
            <Component {...pageProps} />
          </PageWrapper>
        </ThemeProvider>
      </CacheProvider>
    );
  }
}
