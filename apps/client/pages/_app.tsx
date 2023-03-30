import { AppProps } from "next/app";
import "./styles.css";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import ar from "./lang/ar.json";
import en from "./lang/en.json";
import he from "./lang/he.json";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";

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

const CustomApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if ("geolocation" in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
      });
    }
  }, []);
  const { locale } = useRouter();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <IntlProvider locale={locale} messages={messages[locale]}>

        <main className="app" dir={getDirection(locale)}>
          <ThemeProvider theme={{ dir: getDirection(locale) }}>
            <Navbar />
            <Component {...pageProps} />
          </ThemeProvider>
        </main>
      </IntlProvider>
    </QueryClientProvider>
  );
};

export default CustomApp;
