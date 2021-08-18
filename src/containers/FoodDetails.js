import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { bindActionCreators } from 'redux';
import useStyles from '../stylesheets/styles';
import { fetchMeal } from '../redux/actions';
// import { actionCreators } from '../utility';

const FoodDetails = () => {
  const dispatch = useDispatch();
  const act = bindActionCreators(fetchMeal, dispatch);
  console.log(act);
  const { mealId } = useParams();
  const details = useSelector((state) => state.details.meals);
  // const featchMealDetails = async () => {
  //   const response = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  //   dispatch(selectedMeal(response.data));
  // };

  const classes = useStyles();
  useEffect(() => {
    // featchMeal();
    console.log('action creators', act);
  }, [mealId]);
  if (details.length === 0) {
    return (
      <div align="center">
        <Typography variant="h4">Loading ..  </Typography>
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
        // )
      }
    </Card>
  );
};

export default FoodDetails;
