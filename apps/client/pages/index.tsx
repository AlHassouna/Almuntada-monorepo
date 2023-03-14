import Head from 'next/head';
import { useIntl } from 'react-intl';
import Navbar from '../components/Navbar/Navbar';
import styles from './index.module.css';
import HomePage from './home/home';

export default function Home() {
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.home.head.title' });

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={styles.main}>
        <HomePage />
      </main>
    </div>
  );
}
