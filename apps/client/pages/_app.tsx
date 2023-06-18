import {AppProps} from "next/app";
import "./styles.css";
import {useRouter} from "next/router";
import {IntlProvider} from "react-intl";
import ar from "./lang/ar.json";
import en from "./lang/en.json";
import he from "./lang/he.json";
import {ThemeProvider} from "styled-components";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import React, {useEffect, useRef} from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import {postVisitor} from "@lib/system-design";
import {getAddress} from "@lib/system-design";


const messages = {
  ar,
  en,
  he
};

export function getDirection(locale) {
  if (locale === "ar" || locale === "he") {
    return "rtl";
  }
  return "ltr";
}

const CustomApp = ({Component, pageProps}: AppProps) => {
  const router = useRouter()
  const regex = /\(([^)]+)\)/;
  const isMounted = useRef(false)
  useEffect(() => {
    const matches = regex.exec(window.navigator.userAgent);
    const handleStart = (url: string) => {

      if (!isMounted.current) {
        isMounted.current = true
      }
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async ({coords}) => {
          const {latitude, longitude} = coords;
          const address = await getAddress({latitude, longitude})
          if (url.includes('he') || url.includes('en')) {
            url = url.split('/')[2]
          } else {
            url = url.split('/')[1]
          }
          await postVisitor({
            pathname: url ? url : '/',
            userAgent: matches[1],
            location: address.results[0]?.address_components
          })
        });
      }
    }
    if (!isMounted.current) {
      handleStart('/')
    }
    router.events.on('routeChangeStart', handleStart)
    return () => {
      router.events.off('routeChangeStart', handleStart)
    }
  }, [router])


  const {locale} = useRouter();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <main className="app" dir={getDirection(locale)}>
          <ThemeProvider theme={{dir: getDirection(locale)}}>
            <Navbar/>
            <Component {...pageProps} />
            <Footer/>
          </ThemeProvider>
        </main>
      </IntlProvider>
    </QueryClientProvider>

  );
};

export default CustomApp;
