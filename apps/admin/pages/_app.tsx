import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {SSRProvider} from 'react-bootstrap'
import {ProgressBar} from '../components/ProgressBar'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

config.autoAddCss = false

function MyApp({Component, pageProps}: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <SSRProvider>
        <ProgressBar/>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </SSRProvider>
    </QueryClientProvider>
  )
}

export default MyApp
