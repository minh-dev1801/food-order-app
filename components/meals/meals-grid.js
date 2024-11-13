import MealItem from './meal-item';

export default function MealsGrid({ meals }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[5rem]  mx-auto my-8 w-[90%] max-w-[90rem]">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
