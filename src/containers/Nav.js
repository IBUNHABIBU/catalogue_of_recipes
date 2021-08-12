import React from 'react';
import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CategoryFilter from '../components/CategoryFilter';
import useStyles from '../stylesheets/grid';
import { changeFilter } from '../redux/actions/index';

const Nav = () => {
  const filter = useSelector((state) => state.filter);
  const cat = useSelector((state) => state.allFoods.categories);
  // // console.log('Use selector', cat);
  // console.log('filter', filter, cat);
  const filteredCat = cat.filter((item) => item.strCategory === filter);
  console.log(id, 'id');
  const dispatch = useDispatch();
  const handleCategoryChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            RECIPE ZONE
          </Typography>
          <Link to="/" className={classes.link}>
            <Typography variant="h5">
              Home
            </Typography>
          </Link>
          <Link to={`/category/${filteredCat.idCategory}`} className={classes.link}>
            <CategoryFilter handleFilter={handleCategoryChange} className={classes.catField} />
          </Link>
          <Link to="/about" className={classes.link}>
            <Typography edge="start" variant="h5">
              About
            </Typography>
          </Link>
          <AccountCircleIcon fontSize="large" />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
