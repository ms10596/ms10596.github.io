import "./globals.css";

import Footer from "./Footer";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Mohamed Sayed",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css"
      />
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
      <body className={`m-0 ${robotoMono.className} overflow-x-hidden`}>
        <Providers>
          <div
            style={{
              display: "grid",
              gridTemplateAreas: `"lheader header rheader" "lside content rside" "footer footer footer"`,
            }}
          >
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
