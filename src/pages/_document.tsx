import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <Script 
        onLoad={()=>{
          // @ts-ignore
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          // @ts-ignore
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})
            (window,document,'script','dataLayer','GTM-PDK42W2Z');
        }}
        />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"       
        />
      <link rel="icon" type="image/svg+xml" href="/favicon.ico" />

      </Head>
    <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PDK42W2Z"
        height="0" width="0" style={{'display':'none','visibility':'hidden'}}></iframe></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
