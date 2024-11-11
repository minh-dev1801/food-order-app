'use client';
import Link from 'next/link';
import ImageSlideshow from '@/components/images/image-slideshow';
export default function Home() {
  return (
    <>
      <header className="mx-auto my-12 flex w-[90%] max-w-[75rem] gap-12">
        <div className="h-[25rem] w-[40rem]">
          <ImageSlideshow />
        </div>
        <div>
          <div className="text-2xl text-[#ddd6cb]">
            <h1 className="text-header-gradient text-3xl font-bold uppercase tracking-[0.15rem]">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>Taste & share food all over the world.</p>
          </div>
          <div className="flex gap-4 text-2xl">
            <Link
              className="mt-4 rounded-lg px-4 py-2 first:pl-0 first:font-normal first:text-[#ff9b05] first:hover:text-[#f9b241]"
              href="/community"
            >
              Join the community
            </Link>
            <Link
              className="header-gradient-orange hover:header-gradient-orange-hover mt-4 rounded-lg px-4 py-2 font-bold text-white"
              href="/meals"
            >
              Explore meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="mx-auto my-8 flex w-[90%] max-w-[50rem] flex-col text-center text-2xl text-[#ddd6cb]">
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite recipes with the world.
            It&apos;s a place to discover new dishes, and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect with other food lovers.
          </p>
        </section>

        <section className="mx-auto my-8 flex w-[90%] max-w-[50rem] flex-col text-center text-2xl text-[#ddd6cb]">
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite recipes with the world.
            It&apos;s a place to discover new dishes, and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
