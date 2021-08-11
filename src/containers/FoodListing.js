import React from 'react';
import { useSelector } from 'react-redux';

const FoodListing = () => {
  const meals = useSelector((state) => state.allFoods.categories);
  console.log(meals);
  const renderList = meals.map((meal) => {
    const {
      idCategory, strCategory, strCategoryThumb, strCategoryDescription,
    } = meal;
    return (
      <div key={idCategory}>
        <h1>FoodListing</h1>
        <p>{strCategory}</p>
        <img src={strCategoryThumb} alt={strCategoryThumb} />
        <p>{strCategoryDescription}</p>
      </div>
    );
  });

  return (
   <>
    { renderList }
   </>
  );
};

export default FoodListing;
