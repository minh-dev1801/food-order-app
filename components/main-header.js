"use client";
import Link from "next/link";
import logoImage from "@/assets/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function MainHeader() {
  const currentPath = usePathname();
  const isActive = (pathname) => currentPath === pathname;
  return (
    <header className="flex justify-between items-center py-8 px-4 md:px-[10%]">
      <Link
        className="flex items-center justify-center gap-8 text-[#ddd6cb] uppercase text-2xl tracking-[0.15rem] font-bold"
        href="/"
      >
        <Image
          className="w-[5rem] h-[5rem] object-contain filter drop-shadow-[0_0_0.75rem_rgba(0,0,0,0.5)]"
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
                "text-[#ddd6cb] font-bold hover:text-gradient-orange hover:text-shadow-orange rounded-lg px-4 py-2",
                isActive("/meals") && "text-gradient-orange"
              )}
              href="/meals"
            >
              Browse Meals
            </Link>
          </li>
          <li>
            <Link
              className={clsx(
                "text-[#ddd6cb] font-bold hover:text-gradient-orange hover:text-shadow-orange rounded-lg px-4 py-2",
                isActive("/community") && "text-gradient-orange"
              )}
              href="/community"
            >
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
