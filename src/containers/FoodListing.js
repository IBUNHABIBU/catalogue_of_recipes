import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from '../stylesheets/styles';

const FoodListing = () => {
  const classes = useStyles();
  const meals = useSelector((state) => state.allFoods.categories);
  if (meals.length === 0) {
    return (
      <div align="center">
        <Typography variant="h4">Loading ..  </Typography>
        <CircularProgress />
      </div>
    );
  }
  const renderList = (
    <Grid container spacing={1}>
      {

      meals.map((meal) => {
        const {
          idCategory, strCategory, strCategoryThumb, strCategoryDescription,
        } = meal;
        return (
          <Grid item lg={3} key={idCategory}>
            <Link to={`/category/${strCategory}`} className={classes.link}>
              <Paper spacing={3}>
               
              <div className="card">
  <img src={strCategoryThumb} className="card-img-top" alt="thumb" />
  <div className="card-body">
    <h5 className="card-title">{strCategory}</h5>
    <p className="card-text">{strCategoryDescription}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
              </Paper>
            </Link>
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
