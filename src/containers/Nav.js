import React from 'react';
import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CategoryFilter from '../components/CategoryFilter';
import useStyles from '../stylesheets/styles';
import { changeFilter } from '../redux/actions/index';

const Nav = () => {
  const dispatch = useDispatch();
  const handleCategoryChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  const filter = useSelector((state) => state.filter);
  const classes = useStyles();
  return (

    <div className={classes.navbar}>
      <AppBar position="static" color="transparent" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.logo} variant="h6" noWrap>
            RECIPE ZONE
          </Typography>
          <Link to="/" className={classes.link}>
            <Typography variant="h5">
              Home
            </Typography>
          </Link>
          <Link to="/about" className={classes.link}>
            <Typography edge="start" variant="h5">
              About
            </Typography>
          </Link>
          {
          }
          <Link to={`/category/${filter}`} className={classes.link}>
            <CategoryFilter handleFilter={handleCategoryChange} className={classes.catField} />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
