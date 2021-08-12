import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

const FoodListing = () => {
  const meals = useSelector((state) => state.allFoods.categories);
  //   const renderList =
  // <Grid container spacing={1} key={idCategory}>
  //  {meals.map((meal) => {
  //     const {
  //       idCategory, strCategory, strCategoryThumb, strCategoryDescription,
  //     } = meal;
  //   }

  //     return (

  //         <Grid container item md={3} spacing={3}>
  //           <Paper>
  //             <p>{strCategory}</p>
  //             <img src={strCategoryThumb} alt={strCategoryThumb} />
  //             <p>{strCategoryDescription}</p>
  //           </Paper>
  //         </Grid>
  //     );
  //   });
  //   </Grid>
  const renderList = (
    <Grid container />
  );
  return (
    <div>
      { renderList }
    </div>
  );
};

export default FoodListing;
