import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Grid, Paper } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { selectCategory } from '../redux/actions';
import useStyles from '../stylesheets/styles';

const CategoryListing = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const foodList = useSelector((state) => state.categories.meals);
  const classes = useStyles();
  const fetchByCategory = async () => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
    dispatch(selectCategory(response.data));
  };

  useEffect(() => {
    fetchByCategory();
  }, [categoryName]);

  if (foodList.length === 0) {
    return (
      <div align="center">
        <Typography variant="h4">Loading ..  </Typography>
        <CircularProgress />
      </div>
    );
  }
  const displayByCategory = (
    <Grid container spacing={3}>
      {
            foodList.map((list) => {
              const {
                strMeal, strMealThumb, idMeal,
              } = list;
              return (
                <Grid item lg={3} key={idMeal}>
                  <Link to={`/category/${categoryName}/${idMeal}`} className={classes.link}>
                    <Paper spacing={3}>
                      <Card className={classes.root}>
                        <CardHeader
                          title={strMeal}
                        />
                        <CardMedia
                          className={classes.media}
                          image={strMealThumb}
                          title="Paella dish"
                        />
                        <CardContent>
                          <Typography variant="body2" color="textSecondary" component="p">
                            {strMeal.substring(0, 200)}
                          </Typography>
                        </CardContent>
                      </Card>
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
      <h1 align="center">
        {
          `${categoryName}  category`
        }
      </h1>
      { displayByCategory }
    </div>
  );
};

export default CategoryListing;
