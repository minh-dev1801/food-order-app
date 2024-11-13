import { Suspense } from 'react';
import Link from 'next/link';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className="mx-auto mb-20 mt-12 w-[90%] max-w-[75rem] text-2xl text-[#ddd6cb]">
        <h1 className="text-montserrat mb-4 text-3xl font-bold">
          Delicious meals, created <span className="text-header-gradient">by you</span>
        </h1>
        <p className="text-lg">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className="header-gradient-orange mt-4 inline-block rounded-lg px-4 py-2 font-bold text-white">
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<p className="loading text-center">Fetching meal...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
