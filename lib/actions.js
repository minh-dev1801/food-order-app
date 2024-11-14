'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

function isInValidText(text) {
  return !text || text.trim() === '';
}

export async function shareMeal(preState, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
    isInValidText(meal.title) ||
    isInValidText(meal.summary) ||
    isInValidText(meal.summary) ||
    isInValidText(meal.creator) ||
    isInValidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Invalid input',
    };
  }
  await saveMeal(meal);

  redirect('/meals');
}
