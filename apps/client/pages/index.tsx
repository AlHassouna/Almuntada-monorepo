import Head from 'next/head';
import {useIntl} from 'react-intl';
import HomePage from './home/home';
import React from "react";

export default function Home() {
  const intl = useIntl();
  const title = intl.formatMessage({id: 'page.home.head.title'});

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <HomePage/>
    </>
  );
}
