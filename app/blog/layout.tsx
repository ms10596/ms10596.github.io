import { Header } from "../Header";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div style={{ gridArea: "content" }} className="min-h-screen max-w-4xl">
        {children}
      </div>
    </>
  );
}
