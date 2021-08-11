import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { AccountCircleIcon } from '@material-ui/icons/AccountCircle';

const Nav = () => {
 return (
  <div className={classes.root}>
      <AppBar position="static" color="transparent" className={classes.toolbar}>
        <Toolbar>
          <Typography variant="h2" className={classes.logo}>
            BookStore CMS
          </Typography>
          <Typography edge="start" variant="h3" className={classes.title}>
            BOOKS
          </Typography>
          <CategoryFilter handleFilter={handleCategoryChange} className={classes.cat} />
          <AccountCircleIcon fontSize="large" className={classes.account} />
        </Toolbar>
      </AppBar>
    </div>
 )
}

export default Nav
