import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';

import 'antd/dist/antd.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BNC - Test Web Frontend Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
    );
}
