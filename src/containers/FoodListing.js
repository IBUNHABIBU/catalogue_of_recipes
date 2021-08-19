import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
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
                {/* <Card className={classes.root}>
                  <CardHeader
                    title={strCategory}
                  />
                  <CardMedia
                    className={classes.media}
                    image={strCategoryThumb}
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {strCategoryDescription.substring(0, 200)}
                    </Typography>
                  </CardContent>
                </Card> */}
                <div className="card bg-dark text-white">
  <img src={strCategoryThumb} className="card-img" alt="Thumb"/>
  <div className="card-img-overlay">
    <h5 className="card-title">{strCategory}</h5>
    <p className="card-text"> {strCategoryDescription.substring(0, 200)}</p>
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
