import Footer from "../resume/Footer";
import { Theme } from "@radix-ui/themes";

export default function Layout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
          <body className="m-0">
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