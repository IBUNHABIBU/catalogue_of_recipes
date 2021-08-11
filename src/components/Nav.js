import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { AccountCircleIcon } from '@material-ui/icons/AccountCircle';

const Nav = () => (
  <div>
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography variant="h2">
          BookStore CMS
        </Typography>
        <Typography edge="start" variant="h3">
          BOOKS
        </Typography>
        <CategoryFilter handleFilter={handleCategoryChange} />
        <AccountCircleIcon fontSize="large" />
      </Toolbar>
    </AppBar>
  </div>
);

export default Nav;
