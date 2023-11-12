import { Card } from "@radix-ui/themes";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-96 py-24">
      <Card>{children}</Card>
    </div>
  );
}
