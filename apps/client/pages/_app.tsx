import {AppProps} from 'next/app';
import './styles.css';
import {useRouter} from 'next/router';
import {IntlProvider} from 'react-intl';
import ar from './lang/ar.json';
import en from './lang/en.json';
import he from './lang/he.json';
import {ThemeProvider} from 'styled-components';
import React from "react";

const messages = {
  ar,
  en,
  he,
};

function getDirection(locale) {
  if (locale === 'ar' || locale === 'he') {
    return 'rtl';
  }
  return 'ltr';
}

const CustomApp = ({Component, pageProps}: AppProps) => {
  const {locale} = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <main className="app" dir={getDirection(locale)}>
        <ThemeProvider theme={{dir: getDirection(locale)}}>
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </IntlProvider>

  );
};

export default CustomApp;
