import Image from 'next/image';
import Link from 'next/link';
import { FaLaptopCode } from 'react-icons/fa6';
import { ThemeSwitcher } from './components/theme-switcher';
import { data } from './resume/data';

export function Header() {
  return (
    <div className="navbar flex justify-between items-center">
      <div>
        <Link href={'/'} className="text-xl btn">
          <Avatar />
          {data.name}
        </Link>
      </div>

      <div className="flex gap-x-9 print:hidden">
        <Link href="/resume" className="flex-none btn">
          <div>Hire me</div> <FaLaptopCode />
        </Link>
        <ThemeSwitcher />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <div className="w-8 mask mask-circle">
        <Image
          src="https://avatars.githubusercontent.com/u/25807671?v=4"
          alt="avatar"
          width={32}
          height={32}
        />
      </div>
    </div>
  );
}
