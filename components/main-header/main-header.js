'use client';

import Link from 'next/link';
import logoImage from '@/assets/logo.png';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

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
              <NavLink isActive={isActive} href="/meals">
                Browse Meals
              </NavLink>
            </li>
            <li>
              <NavLink isActive={isActive} href="/community">
                Foodies Community
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
