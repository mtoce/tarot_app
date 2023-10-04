import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

import { Open_Sans, Roboto_Mono, Fuggles } from 'next/font/google';

export const metadata = {
  title: 'Totally Tarot',
  description: 'Tarot Readings with Specialized Results for You!',
  favicon: "/assets/images/favicon-32x32.png"
}

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const fuggles = Fuggles({
  subsets: ['latin'],
  weight: "400",
  display: 'swap',
  variable: '--font-fuggles',
})

{/* 
<head>
<link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png" />
<link rel="manifest" href="/assets/images/site.webmanifest" />
<link rel="mask-icon" href="/assets/images/safari-pinned-tab.svg" color="#25283d" />
<meta name="msapplication-TileColor" content="#e2c044" />
<meta name="theme-color" content="#ffffff" />
</head> */}

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`${openSans.variable} ${robotoMono.variable} font-sans`}>
      <body>
        <Provider>
          <main>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout