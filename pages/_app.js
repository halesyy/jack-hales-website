
import "../styles/globals.css"
import Header from "components/Header"
import Script from "next/script"

import "react-dropdown/style.css"
import "styles/react-select-search.css"

let App = ({ Component, pageProps, ...props }) => {
    return (
      <>
        <div className="flex flex-col h-[100vh]">
          <Header />
          <Component {...pageProps} />
        </div>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-H70V4E54E4" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H70V4E54E4');
          `}
        </Script>
      </>
    )
}

export default App
