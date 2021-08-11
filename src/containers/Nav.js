import React from 'react';
// import { useDispatch } from 'react-redux';
import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import myStyle from '../stylesheet/style';
import CategoryFilter from '../components/CategoryFilter';
// import { changeFilter } from '../actions/index';

const Nav = () => {
  // const classes = myStyle();
  // const dispatch = useDispatch();
  const handleCategoryChange = () => {
    // dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h2">
            Home
          </Typography>
          <CategoryFilter handleFilter={handleCategoryChange} />
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
