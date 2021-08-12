import { Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

const FoodListing = () => {
  const meals = useSelector((state) => state.allFoods.categories);
  const renderList = meals.map((meal) => {
    const {
      idCategory, strCategory, strCategoryThumb, strCategoryDescription,
    } = meal;
    return (
      <Grid container spacing = {1}>
        <Grid container item xs={12} spacing={3}>
        <div key={idCategory}>
        <p>{strCategory}</p>
        <img src={strCategoryThumb} alt={strCategoryThumb} />
        <p>{strCategoryDescription}</p>
      </div>
        </Grid>
      </Grid>
    );
  });

  return (
    <div>
      { renderList }
    </div>
  );
};

export default FoodListing;
