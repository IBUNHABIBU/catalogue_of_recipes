import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '@material-ui/core/Card';
import { CardHeader } from '@material-ui/core/CardHeader';

const FoodListing = () => {
  const meals = useSelector((state) => state.allFoods.categories);
  const renderList = (
    <Grid container>
      {
        meals.map((meal) => {
          const {
            idCategory, strCategory, strCategoryThumb, strCategoryDescription,
          } = meal;
          return (
            <Grid item lg={3} key={idCategory}>
              <Paper>
                CardHeader
                <p>{strCategory}</p>
                <img src={strCategoryThumb} alt={strCategoryThumb} />
                <p>{strCategoryDescription}</p>
              </Paper>
            </Grid>
          );
        })
      }
    </Grid>
  );
  return (
    <div>
      { renderList }
    </div>
  );
};

export default FoodListing;
