import "./globals.css";
import "@radix-ui/themes/styles.css";

import Footer from "./Footer";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { Theme } from "@radix-ui/themes";

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
    <html lang="en">
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
      <body className={`m-0 ${robotoMono.className}`}>
        <Theme
          panelBackground="solid"
          className={`bg-gradient-to-r  from-sky-950 to-emerald-900`}
        >
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
