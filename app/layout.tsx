import "./globals.css";
import "@radix-ui/themes/styles.css";

import { Theme, ThemePanel } from "@radix-ui/themes";

import Footer from "./resume/Footer";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Theme
          panelBackground="solid"
          className="bg-gradient-to-r  from-sky-950 to-emerald-900"
        >
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
