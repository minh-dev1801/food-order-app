'use client';

import { useState, useEffect } from 'react';
import { getMeal } from '@/lib/meals';
import { CldImage } from 'next-cloudinary';
import { notFound } from 'next/navigation';

export default function MealDetailPage({ params }) {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      const { mealSlug } = params;
      const mealData = await getMeal(mealSlug);

      if (!mealData) {
        notFound();
      } else {
        setMeal(mealData);
      }
    };

    fetchMeal();
  }, [params]);

  if (!meal) return <p>Loading...</p>;

  meal.instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className="m-w-[80rem] flex justify-center gap-12 px-4 py-8">
        <div className="relative h-[20rem] w-[30rem]">
          <CldImage
            className="animation-image rounded-lg object-cover shadow-sm"
            src={`https://res.cloudinary.com/dmsrjqk4y/image/upload/v1731675807/${meal.image}`}
            alt={meal.title}
            fill
          />
        </div>
        <div className="m-w-[40rem] animation-header-text px-4 pt-2 text-[#ddd6cb]">
          <h1 className="text-montserrat mb-4 text-5xl font-bold uppercase">{meal.title}</h1>
          <p className="mb-4 text-2xl italic text-[#cfa69b]">
            by{' '}
            <a
              className="text-header-gradient hover:text-shadow-creator"
              href={`mailto:${meal.creator_email}`}
            >
              {meal.creator}
            </a>
          </p>
          <p className="text-2xl">{meal.summary}</p>
        </div>
      </header>

      <main>
        <p
          className="animation-instructions mx-auto my-8 max-w-[60rem] rounded-lg bg-[#6e6464] p-8 text-xl text-[#13120f] shadow-sm"
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
