import "./globals.css";
import "@radix-ui/themes/styles.css";

import Footer from "./resume/Footer";
import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";

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
      <body className="m-0">{children}</body>
    </html>
  );
}
