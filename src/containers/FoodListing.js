import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';


const FoodListing = () => {
  const classes = useStyles();
  const meals = useSelector((state) => state.allFoods.categories);
  const renderList = (
    <Grid container spacing={12}>
      {
        meals.map((meal) => {
          const {
            idCategory, strCategory, strCategoryThumb, strCategoryDescription,
          } = meal;
          return (
            <Grid item lg={3} key={idCategory}>
              <Paper>
                <Card className={classes.root}>
                  <CardHeader
                    title={strCategory}
                    subheader="September 14, 2016"
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
                </Card>
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
