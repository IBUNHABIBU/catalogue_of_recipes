import React from 'react';
import { useSelector } from 'react-redux';

const FoodListing = () => {
  const categories = useSelector((state) => state.allFoods);
  console.log(categories);
  // const {
  //   idCategory, strCategory, strCategoryThumb, strCategoryDescription,
  // } = categories;

  return (
    <div>
      <h1>FoodListing</h1>
      {/* <h1>{idCategory}</h1>
      <p>{strCategory}</p>
      <img src={strCategoryThumb} alt={strCategoryThumb} />
      <p>{strCategoryDescription}</p> */}
    </div>
  );
};

export default FoodListing;
