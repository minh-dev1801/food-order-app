import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';

export default function CommunityPage() {
  return (
    <>
      <header className="mx-auto mb-20 mt-12 w-[90%] max-w-[75rem] text-center text-2xl text-[#ddd6cb]">
        <h1 className="text-montserrat">
          One shared passion: <span className="text-header-gradient">Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className="mx-auto my-0 w-[90%] max-w-[40rem] text-center">
        <h2 className="text-montserrat mb-12 text-[2rem] text-[#ddd6cb]">Community Perks</h2>

        <ul className="my-12">
          <li className="flex flex-col items-center gap-8">
            <Image
              className="h-[8rem] w-[8rem] object-contain"
              src={mealIcon}
              alt="A delicious meal"
            />
            <p className="text-montserrat text-2xl font-bold text-[#ddd6cb]">
              Share & discover recipes
            </p>
          </li>
          <li className="flex flex-col items-center gap-8">
            <Image
              className="h-[8rem] w-[8rem] object-contain"
              src={communityIcon}
              alt="A crowd of people, cooking"
            />
            <p className="text-montserrat text-2xl font-bold text-[#ddd6cb]">
              Find new friends & like-minded people
            </p>
          </li>
          <li className="flex flex-col items-center gap-8">
            <Image
              className="h-[8rem] w-[8rem] object-contain"
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p className="text-montserrat text-2xl font-bold text-[#ddd6cb]">
              Participate in exclusive events
            </p>
          </li>
        </ul>
      </main>
    </>
  );
}
