import Head from 'next/head';
import { useIntl } from 'react-intl';
import Navbar from '../components/Navbar';
import styles from './index.module.css';

export default function Home() {
  const intl = useIntl();

  const title = intl.formatMessage({ id: 'page.home.head.title' });
  const description = intl.formatMessage({
    id: 'page.home.head.meta.description',
  });

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="alternate" href="http://example.com" hrefLang="en" />
        <link rel="alternate" href="http://example.com/ar" hrefLang="ar" />
        <link rel="alternate" href="http://example.com/fr" hrefLang="fr" />
      </Head>

      <header>
        <Navbar />
      </header>

      <main className={styles.main}></main>
    </div>
  );
}
