import React from 'react';
import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CategoryFilter from '../components/CategoryFilter';
import useStyles from '../stylesheets/grid';

const Nav = () => {
  const handleCategoryChange = () => {
    // dispatch(changeFilter(e.target.value));
  };
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h2">
            Home
          </Typography>
          <CategoryFilter handleFilter={handleCategoryChange} className={classes.catField} />
          <Typography edge="start" variant="h3">
            About
          </Typography>
          <AccountCircleIcon fontSize="large" />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
