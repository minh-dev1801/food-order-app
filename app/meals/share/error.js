'use client';

export default function Error({ error }) {
  return (
    <main className="mt-[5rem] text-center">
      <h1 className="text-header-gradient mb-4 text-[5rem] font-bold uppercase">
        An error occurred!
      </h1>
      <p className="text-2xl text-white">Failed to create meal.</p>
    </main>
  );
}
