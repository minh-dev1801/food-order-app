import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import Link from 'next/link';

export default async function MealsPage() {
  const meals = await getMeals();

  return (
    <>
      <header className="mx-auto mb-20 mt-12 w-[90%] max-w-[75rem] text-2xl text-[#ddd6cb]">
        <h1 className="text-montserrat text-3xl font-bold mb-4">
          Delicious meals, created <span className="text-header-gradient">by you</span>
        </h1>
        <p className='text-lg'>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className="header-gradient-orange mt-4 rounded-lg px-4 py-2 font-bold text-white inline-block">
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
