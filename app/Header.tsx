import Link from "next/link";
import { ThemeSwitcher } from "./components/theme-switcher";

export function Header() {
  return (
    <div
      style={{ gridArea: "header" }}
      className="navbar print:hidden flex justify-between items-center"
    >
      <Link href={"/"} className="text-xl">
        Mohamed Sayed<div className="badge badge-secondary">beta</div>
      </Link>

      <div className="flex gap-x-9">
        <Link href="/resume" className="flex-none">
          Hire me
        </Link>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
