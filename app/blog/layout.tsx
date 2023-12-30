import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen max-w-4xl">{children}</div>;
}
