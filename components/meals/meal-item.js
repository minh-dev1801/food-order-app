import Link from 'next/link';
import Image from 'next/image';

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className="shadow-meal-item background-meal-item flex flex-col justify-between rounded-[4px] text-[#ddd6cb] transition-all duration-300 ease-in-out">
      <header>
        <div className="relative h-[15rem]">
          <Image className="object-cover" src={image} alt={title} fill />
        </div>
        <div className="px-4 pt-2">
          <h2 className="text-montserrat text-2xl">{title}</h2>
          <p className="text-[0.75rem] italic text-[#cfa69b]">by {creator}</p>
        </div>
      </header>
      <div className="flex h-full flex-col justify-between">
        <p className="px-4 pt-4">{summary}</p>
        <div className="p-4">
          <Link
            className="header-gradient-orange active:background-meal-item-hover hover:background-meal-item-hover mt-4 rounded-lg px-4 py-2 font-bold text-white"
            href={`/meals/${slug}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
