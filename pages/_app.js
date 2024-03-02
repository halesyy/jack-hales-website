import Header from "components/Header";
import Script from "next/script";
import { NextUIProvider } from "@nextui-org/react";
import "../styles/globals.css";

let App = ({ Component, pageProps, ...props }) => {
    return (
      <NextUIProvider>
        <Header />
        <Component {...pageProps} />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-H70V4E54E4" />
        <Script id="google-analytics">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-H70V4E54E4');`}
        </Script>
      </NextUIProvider>
    )
}

export default App
