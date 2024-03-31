import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <body className=' max-h-1'>
        <Main />
        <NextScript />
        
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800&family=Montserrat:wght@100;400;700;800&family=Open+Sans&family=Poppins&family=Proza+Libre:ital,wght@1,400;1,500&family=Roboto+Mono:wght@100&family=Sono&display=swap" rel="stylesheet"></link>
      </body>
    </Html>
  )
}
