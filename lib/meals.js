import fs from 'node:fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // throw new Error('Loading meals failed');
  return db.prepare(`SELECT * FROM meals`).all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
  try {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;
    const imagePath = `public/images/${fileName}`;

    const bufferedImage = await meal.image.arrayBuffer();
    await fs.promises.writeFile(imagePath, Buffer.from(bufferedImage));

    meal.image = `/images/${fileName}`;

    meal.summary = meal.summary || 'No summary provided.';

    db.prepare(
      `
      INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
      VALUES
        (
          @title,
          @summary,
          @instructions,
          @creator,
          @creator_email,
          @image,
          @slug
        )
      `
    ).run(meal);
  } catch (error) {
    console.error('Error saving meal:', error);
    throw new Error('Meal saving failed!');
  }
}
