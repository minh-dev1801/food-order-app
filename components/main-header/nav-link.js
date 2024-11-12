import clsx from 'clsx';
import Link from 'next/link';

export default function NavLink({ isActive, children, href }) {
  return (
    <Link
      className={clsx(
        'hover:text-gradient-orange hover:text-shadow-orange rounded-lg px-4 py-2 font-bold text-[#ddd6cb]',
        isActive(href) && 'text-gradient-orange'
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
