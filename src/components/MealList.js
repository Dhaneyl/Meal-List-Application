import React from 'react';

function MealList({ meals, loading }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (meals.length === 0) {
    return <div>No meals found.</div>;
  }

  const groupedMeals = meals.reduce((acc, meal) => {
    if (!acc[meal.category]) {
      acc[meal.category] = [];
    }
    acc[meal.category].push(meal);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(groupedMeals).map(([category, categoryMeals]) => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {categoryMeals.map((meal) => (
              <li key={meal.id}>{meal.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default MealList;