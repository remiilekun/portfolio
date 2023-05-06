import * as React from 'react';
import NextApp from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import Router from 'next/router';
import config from 'react-reveal/globals';
import PageWrapper from '@/components/organisms/PageWrapper';
import * as gtag from '@/lib/gtag';
import { rootStyles } from '../rootStyles';
import { theme } from '../theme';

config({ ssrFadeout: true });

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Global styles={rootStyles} />
        <PageWrapper>
          <Component {...pageProps} />
        </PageWrapper>
      </ThemeProvider>
    );
  }
}
