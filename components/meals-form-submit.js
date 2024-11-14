'use client';

import { useFormStatus } from 'react-dom';
import clsx from 'clsx';

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button
      className={clsx(
        'button-meal-share hover:header-gradient-orange-hover',
        pending && 'cursor-not-allowed opacity-50'
      )}
      type="submit"
    >
      {pending ? 'Submitting...' : 'Share Meal'}
    </button>
  );
}
