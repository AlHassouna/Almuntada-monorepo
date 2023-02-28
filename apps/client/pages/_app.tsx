import { AppProps } from 'next/app';
import './styles.css';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import ar from './lang/ar.json';
import en from './lang/en.json';
import he from './lang/he.json';

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

const CustomApp = ({ Component, pageProps }: AppProps)=> {

  const { locale } = useRouter();
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <main className="app">
        <Component {...pageProps} dir={getDirection(locale)} />
      </main>
    </IntlProvider>
  );
}

export default CustomApp;
