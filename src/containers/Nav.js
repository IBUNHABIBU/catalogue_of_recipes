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
  let filteredCat;
  let id;
  const filter = useSelector((state) => state.filter);
  const cat = useSelector((state) => state.allFoods.categories);
  if (filter === 'All') {
    filteredCat = 'All';
  } else {
    filteredCat = cat.find((item) => item.strCategory === filter);
  }
  if (filteredCat === 'All') {
    id = 1;
  } else {
    id = filteredCat.idCategory;
  }
  const dispatch = useDispatch();
  const handleCategoryChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  const classes = useStyles();
  return (

    <div className={classes.navbar}>
      <AppBar position="static" color="transparent" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.link}>
            <Typography className={classes.logo} variant="h6" noWrap>
              RECIPE ZONE
            </Typography>
            <Typography variant="h5">
              Home
            </Typography>
          </Link>
          <Link to="/about" className={classes.link}>
            <Typography edge="start" variant="h5">
              About
            </Typography>
          </Link>
          {}
          <Link to={`/category/${id}`} className={classes.link}>
            <CategoryFilter handleFilter={handleCategoryChange} className={classes.catField} />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
