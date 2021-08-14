import React from 'react';
import { Typography, Container } from '@material-ui/core';
import useStyles from '../stylesheets/styles';

const About = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h5" component="h2">
        Learn different food recipes via this website
      </Typography>
      <Typography variant="body1" component="h2" gutterBottom>
        All data in these website come from The MealDb api
      </Typography>
    </Container>
  );
};

export default About;
