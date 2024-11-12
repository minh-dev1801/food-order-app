import MealsGrid from '@/components/meals/meals-grid';
import Link from 'next/link';

export default function MealsPage() {
  return (
    <>
      <header className="mx-auto mb-20 mt-12 w-[90%] max-w-[75rem] text-center text-2xl text-[#ddd6cb]">
        <h1 className="text-montserrat">
          Delicious meals, created <span className="text-header-gradient">by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className="header-gradient-orange mt-4 rounded-lg px-4 py-2 font-bold text-white">
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main>
        <MealsGrid meals={[]}/>
      </main>
    </>
  );
}
