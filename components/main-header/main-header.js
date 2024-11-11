'use client';
import Link from 'next/link';
import logoImage from '@/assets/logo.png';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import MainHeaderBackground from './main-header-background';

export default function MainHeader() {
  const currentPath = usePathname();
  const isActive = (pathname) => currentPath === pathname;

  return (
    <>
      <MainHeaderBackground />
      <header className="flex items-center justify-between px-4 py-8 md:px-[10%]">
        <Link
          className="flex items-center justify-center gap-8 text-2xl font-bold uppercase tracking-[0.15rem] text-[#ddd6cb]"
          href="/"
        >
          <Image
            className="drop-shadow-logo h-[5rem] w-[5rem] object-contain filter"
            src={logoImage}
            alt="A plate with food on it"
            priority
          />
          NextLevel Food
        </Link>

        <nav>
          <ul className="flex items-center gap-6 text-xl">
            <li>
              <Link
                className={clsx(
                  'hover:text-gradient-orange hover:text-shadow-orange rounded-lg px-4 py-2 font-bold text-[#ddd6cb]',
                  isActive('/meals') && 'text-gradient-orange'
                )}
                href="/meals"
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                className={clsx(
                  'hover:text-gradient-orange hover:text-shadow-orange rounded-lg px-4 py-2 font-bold text-[#ddd6cb]',
                  isActive('/community') && 'text-gradient-orange'
                )}
                href="/community"
              >
                Foodies Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
