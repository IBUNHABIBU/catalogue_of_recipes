/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';
import useStyles from '../stylesheets/styles';
import { selectedMeal } from '../redux/actions';

const FoodDetails = () => {
  const { mealId } = useParams();
  const dispatch = useDispatch();
  const mealDetails = useSelector((state) => state.details.meals[0]);
  const { idMeal, strMeal, strCategory, strArea, strInstructions, strMealthumb } = mealDetails;
  console.log('state', strArea);
  const featchMealDetails = async () => {
    const response = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    dispatch(selectedMeal(response.data));
  };

  useEffect(() => {
    featchMealDetails();
  }, [mealId]);

  const classes = useStyles();
  return (
    <Card className={classes.details}>
      <CardActionArea>
        <CardMedia
          className={classes.detailmedia}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
};

export default FoodDetails;
