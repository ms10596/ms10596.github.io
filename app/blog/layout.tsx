import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen max-w-7xl mx-auto py-10">{children}</div>;
}
