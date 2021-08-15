import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from '../stylesheets/styles';
import { selectedMeal } from '../redux/actions';

const FoodDetails = () => {
  const { mealId } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details.meals);
  const featchMealDetails = async () => {
    const response = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    dispatch(selectedMeal(response.data));
  };

  const classes = useStyles();
  useEffect(() => {
    featchMealDetails();
  }, [mealId]);
  if (details.length === 0) {
    return (
      <div>
        <span>Loading ..</span>
        <CircularProgress />
      </div>
    );
  }
  const {
    strMealThumb, strMeal, strArea,
    strCategory, strInstructions,
  } = details[0];

  return (
    <Card className={classes.details}>
      {
        !details.length ? (
          <div>
            <CircularProgress />
          </div>
        ) : (
          <CardActionArea>
            <CardMedia
              className={classes.detailmedia}
              image={strMealThumb}
              title={strMeal}
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="h2">
                {strMeal}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                Category:
                {strCategory}
              </Typography>
              <Typography gutterBottom variant="Body2" component="h2">
                Area:
                {strArea}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {strInstructions}
              </Typography>
            </CardContent>
          </CardActionArea>
        )
      }
    </Card>
  );
};

export default FoodDetails;
