import './globals.css';
import './styles/highlight-js/github-dark.css';

import Footer from './Footer';
import { Header } from './Header';
import type { Metadata } from 'next';
import { Providers } from './providers';
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Mohamed Sayed',
  description: 'Personal website'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body>
        <div className={`m-0 ${robotoMono.className} mx-auto max-w-7xl`}>
          <Providers>
            <Header />
            <main className="flex-1 pb-10">{children}</main>
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
