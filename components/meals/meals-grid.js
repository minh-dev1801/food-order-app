import MealItem from './meal-item';

export default function MealsGrid({ meals }) {
  return (
    <ul className="grid-template-meals mx-auto my-8 w-[90%] max-w-[90rem]">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
