import type { Metadata } from 'next';

import { Footer } from '@common/footer';
import { Header } from '@common/header';
import { Passion_One } from 'next/font/google';
import localFont from 'next/font/local';
import Head from 'next/head';
import React from 'react';

import Providers from './providers';
import './styles/index.scss';
import styles from './styles/layout.module.scss';

const passionOne = Passion_One({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-passion-one',
  weight: ['400'],
});

const helvetica = localFont({
  display: 'swap',
  src: [
    {
      path: '../../public/fonts/helvetica_regular.otf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../../public/fonts/helvetica_bold.otf',
      style: 'normal',
      weight: '700',
    },
  ],
  variable: '--font-helvetica',
});

export const metadata: Metadata = {
  description: 'Узнай когда Земля столкнется с астероидом',
  title: 'Armageddon',
  viewport: {
    initialScale: 1,
    width: 'device-width',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className={`${passionOne.variable} ${helvetica.variable}`} lang="ru">
      <Head>
        <meta content="upgrade-insecure-requests" httpEquiv="Content-Security-Policy" />
      </Head>
      <body>
        <Header />
        <Providers>
          <main className={styles.main}>{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
