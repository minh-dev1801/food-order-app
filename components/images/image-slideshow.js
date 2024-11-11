'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';
import clsx from 'clsx';

const images = [
  { src: burgerImg, alt: 'A delicious, juicy burger' },
  { src: curryImg, alt: 'A delicious, spicy curry' },
  { src: dumplingsImg, alt: 'Steamed dumplings' },
  { src: macncheeseImg, alt: 'Mac and cheese' },
  { src: pizzaImg, alt: 'A delicious pizza' },
  { src: schnitzelImg, alt: 'A delicious schnitzel' },
  { src: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isActive = (index) => index === currentImageIndex;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="box-shadow-slideshow relative h-full w-full overflow-hidden rounded-lg">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          className={clsx(
            'transform-slideshow absolute left-0 top-0 h-full w-full object-cover transition-all duration-500 ease-in-out',
            isActive(index) && 'transform-slideshow-active z-10 opacity-100'
          )}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
