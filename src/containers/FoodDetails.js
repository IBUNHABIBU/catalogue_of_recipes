import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from '../stylesheets/styles';
import { selectedMeal } from '../redux/actions';

const FoodDetails = () => {
  const { mealId } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details.meals[0]);
  console.log('state', mealId);
  const featchMealDetails = async () => {
    const response = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    dispatch(selectedMeal(response.data));
  };

  useEffect(() => {
    featchMealDetails();
  }, [mealId]);

  const classes = useStyles();
  return (
    <Card className={classes.details} key={details.idMeal}>
      <CardActionArea>
        <CardMedia
          className={classes.detailmedia}
          image={details.strMealThumb}
          title={details.strMeal}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {details.strCategory}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {details.strInstructions}
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
};

export default FoodDetails;
