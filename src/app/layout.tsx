import React from 'react';
import { Metadata, Viewport } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';
import localFont from 'next/font/local';
import PageWrapper from '@/components/organisms/PageWrapper';

export const GA_TRACKING_ID = 'G-3NBR5VC0N3';

type AppLayoutProps = {
  children: React.ReactNode | React.ReactNode[];
};

const gilroyFont = localFont({
  variable: '--font-gilroy',
  src: [
    {
      path: '../assets/fonts/Gilroy/Gilroy-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Gilroy/Gilroy-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Gilroy/Gilroy-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Gilroy/Gilroy-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
});

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <html lang="en" className={gilroyFont.className}>
      <body>
        <PageWrapper>{children}</PageWrapper>
      </body>
      <Analytics />
      <SpeedInsights />
      <GoogleAnalytics gaId={GA_TRACKING_ID} />
    </html>
  );
};

export const metadata: Metadata = {
  title: 'Remilekun Salami',
  description:
    'A software engineer based in Lagos, Nigeria specializing in building amazing web and mobile applications.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: '/manifest.json',
  keywords: [
    'remi',
    'remilekun,salami',
    'remi salami',
    'remilekun salami',
    'salami remilekun',
    'remiilekun',
    'developer',
    'front-end developer',
    'front-end',
    'freelance',
    'freelance developer',
    'freelancer',
    'front-end web developer',
    'web developer',
    'website developer',
    'HTML5',
    'HTML5 developer',
    'CSS3',
    'CSS',
    'CSS3 developer',
    'SASS',
    'SASS developer',
    'Javascript',
    'Typescript',
    'react',
    'react-native',
    'react developer',
    'react-native developer',
    'Javascript developer',
    'mobile developer',
    'front-end mobile developer',
    'front-end developer in Lagos',
    'front-end developer in Nigeria',
    'front-end developer in Lagos - Nigeria',
  ],
  openGraph: {
    description:
      'A software engineer based in Lagos, Nigeria specializing in building amazing web and mobile applications.',
    images: 'https://remilekunsalami.com/assets/img/remi.jpg',
    siteName: 'Remilekun Salami',
    title: 'Remilekun Salami',
    type: 'website',
    url: 'https://remilekunsalami.com',
  },
  twitter: {
    card: 'summary',
    creator: '@remiilekun',
    description: 'A Front-End based developer in Lagos, Nigeria.',
    images: ['https://remilekunsalami.com/assets/img/remi.jpg'],
    site: '@remiilekun',
    title: 'Remilekun Salami',
  },
  metadataBase: new URL('https://remilekunsalami.com'),
};

export const viewport: Viewport = {
  themeColor: '#b0aff6',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default AppLayout;
