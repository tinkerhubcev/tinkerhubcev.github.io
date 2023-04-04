import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Router from "next/router";
import PageLoader from "@/components/PageLoader";
export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    // Used for page transition
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    Router.events.on("routeChangeStart", start)
    Router.events.on("routeChangeComplete", end)
    Router.events.on("routeChangeError", end)
    return () => {
      Router.events.off("routeChangeStart", start)
      Router.events.off("routeChangeComplete", end)
      Router.events.off("routeChangeError", end)
    }
  }, [])

  // return loading ? <PageLoader /> : <AnimatePresence
  //       mode="wait"
  //       initial={false}
  //       onExitComplete={() => window.scrollTo(0, 0)}
  //     >
  //       <Component {...pageProps} />
  //     </AnimatePresence>
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>
      {loading ? <PageLoader /> : <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>}
    </>
  );
}

