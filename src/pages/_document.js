import Document, { Html, Head, Main, NextScript } from 'next/document';
import { extractCritical } from 'emotion-server';
import { GA_TRACKING_ID } from 'lib/gtag';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="title" content="Remilekun Salami" />
          <meta name="author" content="Remilekun Salami" />
          <meta name="theme-color" content="#b0aff6" />
          <meta name="description" content="A Front-End developer based in Lagos, Nigeria." />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="keywords"
            content="remi, remilekun,salami, remi salami, remilekun salami, salami remilekun, remiilekun, developer, front-end developer, front-end, freelance, freelance developer, freelancer, front-end web developer, web developer, website developer, HTML5, HTML5 developer, CSS3, CSS, CSS3 developer, SASS, SASS developer, Javascript, react developer, react-native developer, Javascript developer, mobile developer, front-end mobile developer, front-end developer in Lagos, front-end developer in Nigeria, front-end developer in Lagos - Nigeria"
          />
          <meta name="pagename" content="Remilekun Salami - A Front-End developer based in Lagos, Nigeria." />
          <meta name="url" content="https://remilekunsalami.com" />
          {/* Google / Search Engine Tags */}
          <meta itemProp="name" content="Remilekun Salami" />
          <meta itemProp="description" content="A Front-End developer based in Lagos, Nigeria." />
          <meta itemProp="image" content="https://remilekunsalami.com/remi.jpg" />
          {/* Open Graph / Facebook */}
          <meta property="og:site_name" content="Remilekun Salami" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://remilekunsalami.com" />
          <meta property="og:title" content="Remilekun Salami" />
          <meta property="og:description" content="A Front-End developer based in Lagos, Nigeria." />
          <meta property="og:image" content="https://remilekunsalami.com/remi.jpg" />
          {/* Twitter */}
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:url" content="https://remilekunsalami.com" />
          <meta property="twitter:title" content="Remilekun Salami" />
          <meta name="twitter:site" content="@remiilekun" />
          <meta name="twitter:creator" content="@remiilekun" />
          <meta property="twitter:description" content="A Front-End based developer in Lagos, Nigeria." />
          <meta property="twitter:image" content="https://remilekunsalami.com/remi.jpg" />
          <meta property="twitter:image:alt" content="A picture of Remilekun Salami" />
          {/* eslint-disable-next-line react/no-danger */}
          <style data-emotion-css={this.props.ids.join(' ')} dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
